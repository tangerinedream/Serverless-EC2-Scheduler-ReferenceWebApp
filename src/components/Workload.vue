<template>
  <main> 
    <!-- <h1>Workload</h1> -->
    <!-- <div class="search-wrapper">
        <input class="border-effect" type="text" v-model="search" placeholder="Search Workloads"/>
          <span class="focus-border"></span>
      </div> -->

    <div class="table" style="overflow-x:auto;">
      <table class="workloadTable">
        <tr>
          <th>Status</th>
          <th>SpecName</th>
          <th>Environment</th>
          <th>Region</th>
          <th>Profile</th>
        </tr>
        <tr v-for="workload in filteredWorkloads" v-bind:key="workload.SpecName">
          <td>
            <div title="Running" class="running">
          <div class="status-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="16" height="16"
              viewBox="0 0 172 172"
              style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" 
              stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
              <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e6e6e6"><path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM126.90017,69.56683l-50.16667,50.16667c-1.3975,1.3975 -3.23217,2.09983 -5.06683,2.09983c-1.83467,0 -3.66933,-0.70233 -5.06683,-2.09983l-21.5,-21.5c-2.80217,-2.80217 -2.80217,-7.3315 0,-10.13367c2.80217,-2.80217 7.3315,-2.80217 10.13367,0l16.43317,16.43317l45.09983,-45.09983c2.80217,-2.80217 7.3315,-2.80217 10.13367,0c2.80217,2.80217 2.80217,7.3315 0,10.13367z"></path></g></g></svg>
          </div>
          <div class="status-label">Running</div>
        </div> 
          </td>
          <td>
            <a v-bind:href="'/workload/' + workload.SpecName">{{workload.SpecName}}</a>
          </td>
          <td>{{ workload.WorkloadFilterTagValue }}</td>
          <td>{{ workload.WorkloadRegion }}</td>
          <td></td>
        </tr>
      </table>
      
    </div>
     </main> 


</template>

<script>
export default {
  name: 'Workload',
  props: {
    msg: String
  },
  data() {
    return {
      workloads: [],
      search: '',
    }
  }, // data
  computed: {
    filteredWorkloads (){
      console.log(this.$props)
      if(this.search){
        return this.workloads.filter((workload)=>{
          return workload.SpecName.startsWith(this.search);
        })
      }else{
        return this.workloads;
      }
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
    }
    
  },
  
} // default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

main{
  box-sizing: border-box;
  padding-top: 100px;
}


h1 {
margin-bottom: 50px;
color: rgb( 240, 240, 240);
text-align: left;
}

.search-wrapper{
  margin-top: 20px;
  margin-bottom: 70px;
  width: 80%;
}

 input[type="text"]{
  box-sizing: border-box;
  padding-left:0px;
  background-color:#202020;
  width: 100%;
  font-size: 20px;
  color: rgb(226, 226, 226);
  outline: none;
}

.border-effect{
  border:0;
  padding: 7px 0;
  border-bottom: 1px solid rgb(226, 226, 226);
}

.border-effect ~ .focus-border{
  position: absolute;
  bottom:0;
  left:0;
  width: 0;
  height: 3px;
  background-color: #7ac59c;
  transition: 0.3s
}

.border-effect:focus ~ .focus-border {
  width: 100%;
  transition: 0.3s;
  left:0;
}

table.workloadTable {
  margin-left:3%;
  border-collapse: collapse;  
  width: 95%; 
}

th, td {
  height: 30px;
  padding: 15px;
  padding: 15px;
  background-color: rgb(63, 63, 63);
  color: rgb(212, 212, 212);
}



th { 
  background-color: rgb(49, 49, 49);
  color: #7ac59c;
}


/* a:link{text-decoration: none;color:#000000;} */
a:link{text-decoration: none;color: rgb(240, 240, 240);}

a:visited{text-decoration: none;color:rgb(240, 240, 240);} 


</style>
