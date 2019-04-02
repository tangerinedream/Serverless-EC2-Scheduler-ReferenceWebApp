<template>
  <div>
    <h1>{{ msg }}</h1>

    <title>Workload</title>

    <div style="overflow-x:auto;">
      <table class="workloadTable">
        <tr>
          <th>Workload</th>
          <th>Status</th>
          <th>Profile</th>
        </tr>
        <tr v-for="workload in workloads" v-bind:key="workload" v-bind:value="workload">
          <td>
            <a v-bind:href="'/workload/' + workload.name">{{workload.name}}</a>
          </td>
          <td>{{ workload.status }}</td>
          <td>{{ workload.profile }}</td>
        </tr>
      </table>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Workload',
  props: {
    msg: String
  },
  data() {
    return {
      workloads:
        [
          { "name": "NF08", "status": "Running", "profile": "Large" },
          { "name": "QA02", "status": "Stopped", "profile": "Small" },
          { "name": "NF04", "status": "Stopped", "profile": "Small" },
          { "name": "DV05", "status": "Stopped", "profile": "Patch" }
        ]

        <!-- Scheduler Response Data -->
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
  margin: 40px 0 0;
}

table.workloadTable {
  border: 1px solid black;
  width: 80%;
  margin-left:auto;
  margin-right:auto;
}

tr:hover {background-color: #f5f5f5;}

th, td {
  height: 30px;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}
th {
  background-color: #99ccff;
  color: black;
}



</style>
