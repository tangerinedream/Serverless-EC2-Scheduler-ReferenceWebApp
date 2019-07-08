<template>
  <div id="app">
    <header class="header"></header>

<div id=sideMenu>
  <div id="side-box"></div>
    <div id="workloadSide">
      <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search workloads.."/>
      </div>
      <h2>Workloads</h2>
      <table class="workloadTable">
        <tr v-for="workload in workloads" v-bind:key="workload.SpecName">
           <td> 
             <a v-bind:href="'/workload/' + workload.SpecName">{{workload.SpecName}}</a> 
           </td> 
          </tr>
      </table>
      </div>
  </div>

<main>
  <div id="topTabs">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="selected = tab;"
      :class="['tab-btn', { active: selected === tab }]">
      {{ tab | tabTitle }}
    </button>

     <component :is="selected" class="tab"></component> 
    </div> 
   </main> 
  </div>
</template>

<script>
import SchedulerHome from './components/SchedulerHome.vue'
import Workload from './components/Workload.vue'
import WorkloadActions from './components/WorkloadActions.vue'
import WorkloadTierDetails from './components/WorkloadTierDetails.vue'


export default {
  name: 'app',
  data: function() {
    return {
      tabs: ['WorkloadComponent', 'WorkloadActionsComponent', 'WorkloadTierDetailsComponent'],
      selected: 'WorkloadComponent',
    };
  },
  components: {
    'SchedulerHomeComponent': SchedulerHome,
    'WorkloadComponent': Workload,
    'WorkloadActionsComponent': WorkloadActions,
    'WorkloadTierDetailsComponent': WorkloadTierDetails
   },
   filters: {
     tabTitle: function(value) {
       if (value === 'WorkloadComponent') return 'Workload'
       if (value === 'WorkloadActionsComponent') return 'Actions'
       if (value === 'WorkloadTierDetailsComponent') return 'Tier Details'
     }
   },
   

  name: 'Workload',
  props: {
    msg: String
  },
  mounted() {
    this.getWorkloads()
  },
  methods: {
    getWorkloads: function() {
      // $http is from vue-resource
      this.$http.get('https://p405u59q3c.execute-api.us-west-2.amazonaws.com/Dev' + '/workloads/')
        .then(function(response){
          console.log(response);
          this.workloads = response.body.Workloads;
        })
        , error => {
          console.error(error);
        }
    }
  },
  /*name: 'Search',
  data() {
    return {
      search: ''
    }
  },
  mounted() {
    this.getWorkloads()
  },
  methods: {
    getWorkloads: function() {
      // $http is from vue-resource
      this.$http.get('https://p405u59q3c.execute-api.us-west-2.amazonaws.com/Dev' + '/workloads/')
        .then(function(response){
          console.log(response);
          this.workloads = response.body.Workloads;
        })
        , error => {
          console.error(error);
        }
    },
  computed:{
     filteredWorkloads: function(){
       return this.workloads.filter((workload) => {
         return workload.SpecName.match(this.search)
       });
      }
     }
  }*/
}
  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: rgb(43, 42, 42); */
}

body {
  background-color: rgb(167, 167, 167);
  /* background-color: rgb(105, 138, 131); */
  margin:0; 
}

.header{
  width: 100%;
  height: 50px;
  background-color: #272727;
  position: absolute;  
}

#side-box{
  height: 50px;
  width: 100%;
  background-color: #d45d3c;
}

.search-wrapper{
  position:relative;
  margin-top: 20px;
  margin-left: auto;
  margin-right:auto;
  margin-bottom: 100px;
}

.search-wrapper input{
  height: 30px;
  width: 85%;
  background-color: rgb(240, 240, 240);
  border:none;
  padding-left:10px;
  border-radius: 10px;
  border: 3px solid rgb(160, 160, 160);

}

.search-wrapper input:focus {
  outline: none;
  border: 3px solid rgb(105, 138, 131);
}

#sideMenu{
  box-sizing: border-box;
  background-color: #272727;
  position: absolute; 
  margin-top:0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; 
  left: 0; 
  height: 100%;  
  width:20%; 
  color:#d45d3c;
  /* color: #f5b68e; */
}

#sideMenu #workloadSide{
  box-sizing: border-box;
  background-color: rgb(160, 160, 160); 
  /* background-color: rgb(105, 138, 131);  */
  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 25px;
  height:80%; 
  border-radius: 10px;
  padding: 10px;
  -webkit-box-flex: 0;
  flex: 0,0,auto; 
}

#workloadSide table.workloadTable {
  width: 95%;
  display:-webkit-flex;
  display: -webkit-box;
  -webkit-box-orient: vertical;  
}

#workloadSide td {
  height:35px;
  background-color: rgb(105, 138, 131);
  /* background-color: rgb(240, 240, 240); */
  border-radius:5px;
}

#workloadSide a:link{text-decoration: none;color:rgb(66, 65, 65);}

#workloadSide a:visited{text-decoration: none;color:rgb(66, 65, 65);} 

#workloadSide a:hover {color:rgb(161, 187, 183);}

main{
  margin-top:60px;
  position: absolute;   
  width:80%;
  height:100%; 
  right:0; 
} 

h1{
  color:rgb(84, 107, 104);
  margin-top: 60px;
  text-align: center;
  padding: 10px;
}

.tab-btn {
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  margin: 10px 4px;
  background-color:#272727;
  box-shadow: inset 0 -1rem 0.75rem -1rem rgba(0, 0, 0, 0.25);
  opacity:0.6;
  transition: 100ms linear all;
  cursor: pointer; 
  margin-bottom: 1rem;
  border-top-left-radius: 10px;
  border-top-right-radius:10px;
  border: none;
  outline: none; 
  color:rgb(240, 240, 240);;
}

.active {
  opacity:1;
  border-top: 3px solid #d45d3c; 
  box-shadow: none;
  /* background: #fcfcfc; */
}

.tab{
  border-radius: 10px;
  top:0;
  left:30px;
  box-sizing: border-box;
  padding: 80px;
  background-color: #272727;
  width:95%;
  margin-bottom: 20px;
}

</style>
