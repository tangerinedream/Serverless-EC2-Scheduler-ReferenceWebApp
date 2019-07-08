<template>
  <main> 
    <h1>{{ msg }}</h1>

    <!-- <title>Workload</title> -->
    <h3>Workload</h3>

    <div style="overflow-x:auto;">
      <table class="workloadTable">
        <tr>
          <th>SpecName</th>
          <th>Environment</th>
          <th>Region</th>
          <th>Status</th>
          <th>Profile</th>
        </tr>
        <tr v-for="workload in workloads" v-bind:key="workload.SpecName">
          <td>
            <a v-bind:href="'/workload/' + workload.SpecName">{{workload.SpecName}}</a>
          </td>
          <td>{{ workload.WorkloadFilterTagValue }}</td>
          <td>{{ workload.WorkloadRegion }}</td>
          <td>
            <div class="run-icon"></div>
          </td>
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
  data() {
    return {
      workloads: [],
      workloadsXXX:
        [
          { "name": "NF08", "status": "Running", "profile": "Large" },
          { "name": "QA02", "status": "Stopped", "profile": "Small" },
          { "name": "NF04", "status": "Stopped", "profile": "Small" },
          { "name": "DV05", "status": "Stopped", "profile": "Patch" }
        ]


        // {
        //   "Workloads":
        //     [
        //       {
        //         "SpecName": "SampleWorkload-01",
        //         "WorkloadFilterTagValue": "ENV001",
        //         "ScaleInstanceDelay": "5",
        //         "TierFilterTagName": "ApplicationRole",
        //         "WorkloadFilterTagName": "Environment",
        //         "SNSTopicName": "SchedulerSNSTopic",
        //         "WorkloadRegion": "us-west-2"
        //       },
        //       {
        //         "SpecName": "SampleWorkload-02",
        //         "WorkloadFilterTagValue": "ENV002",
        //         "ScaleInstanceDelay": "5",
        //         "TierFilterTagName": "ApplicationRole",
        //         "WorkloadFilterTagName": "Environment",
        //         "SNSTopicName": "SchedulerSNSTopic",
        //         "WorkloadRegion": "us-west-2"
        //       }
        //     ]
        //   }
    } // return
  } // data
} // defaul
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h3 {
margin-top: 100px;
color: rgb( 240, 240, 240);
}

table.workloadTable {
  width: 70%;
  margin-left:200px; 
}

th, td {
  height: 30px;
  padding: 15px;
  padding: 15px;
  background-color: rgb(250, 204, 161);
  
  
}

th { 
  background-color: #d45d3c;
  color: rgb(44, 44, 44);
}


a:link{text-decoration: none;color:#000000;}

a:visited{text-decoration: none;color:#000000;} 

a:hover {color:#59814c;}



</style>
