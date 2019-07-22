<template>
    <div class="autocomplete">
    <input 
    class="border-effect"
    type="text" 
    placeholder="Search workloads"
    v-model="search"
    @input="onChange"
    @keyup.down="onArrowDown" @keyup.up="onArrowUp" @keyup.enter="onEnter"
    />
    <span class="focus-border"></span>
    <ul v-show="isOpen" class="autocomplete-results">
      <li v-for="(result, i) in results" :key="i" class="autocomplete-result" @click="setResult(result)"
       :class="{ 'is-active': i === arrowCounter }">{{result}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'autocomplete',
    props: {
      items: {
        type: Array,
        required: false,
      default: () => [],
      },
      isAsync: {
      type: Boolean,
      required: false,
      default: false
    }
  },
    data() {
      return {
        isOpen: false,
        results: [],
        search: "",
        isLoading: false,
        arrowCounter: 0
      };
    },
    methods: {
      onChange() {
        this.$emit("input", this.search);

        if (this.isAsync) {
        this.isLoading = true;
      } else {
        // Let's search our flat array
        this.filterResults();
        this.isOpen = true;
      }
    },
      filterResults() {
        this.results = this.items.filter(item => {
          return item.toLowerCase().indexOf(this.search.toLowerCase())> -1;
      });
    },
    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    onArrowDown(evt) {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    }
  },
  watch: {
    items: function(val, oldValue) {
      // actually compare them
      if (val.length !== oldValue.length) {
        this.results = val;
        this.isLoading = false;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }

}
</script>

<style>

    .autocomplete{
      margin-top: 30px;
      overflow:hidden;
      display:flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center; 
      width: 100%;
      margin-bottom: 150px;
    }

     input[type="text"]{
      box-sizing: border-box;
      height: 55px;
      width: 88%; 
      background-color: #242424;
      font-size: 1em;
      color: rgb(226, 226, 226);
      outline:none;
      padding-left: 10px;
  }

  .border-effect{
    border:0;
    border-bottom: 1px solid rgb(226, 226, 226);
    transition: 0.3s
  }

  .border-effect:focus{
    border-bottom: 1px solid #7ac59c;
    transition: 0.3s
  }

  /*.border-effect ~ .focus-border{
    position: absolute;
    bottom:0; 
    left:0;
    width: 0;
    height: 3px;
    background-color: #7ac59c;
    transition: 0.3s
  }

   .border-effect:focus ~ .focus-border { 
    width: 88%;
    transition: 0.3s;
    left:0;
  }*/

  ul{
      padding-top: 12px; 
      list-style: none;  
      padding-left: 0;
  }

  li{
    padding-left: 30px; 
    padding-top: 8px; 
    padding-bottom: 9px;  
  }

  li:hover{
    background-color: #7ac59c;
  }

  .autocomplete-results {
    position:relative;
    color: rgb(226, 226, 226);
    box-sizing: border-box;  
    width: 88%;  
    margin-top: 0px; 
    height: 130px; 
    overflow: auto;   
    list-style: none;  
    text-align: left; 
    cursor: pointer;
    background-color: #202020;
    
  }


</style>
