<template>
<div class="main">
  <div class="region">
    <div class="label">Region</div>
<select v-model="selectedRegion">
  <option v-for="workload in workloads" v-bind:value="workload.WorkloadRegion">
    {{ workload.WorkloadRegion }}
  </option>
</select>
</div>
 <div class="environment">
   <div class="label">Environment</div>
 <select v-model="selectedEnvironment">
  <option v-for="workload in workloads" v-bind:value="workload.WorkloadFilterTagValue">
    {{ workload.WorkloadFilterTagValue }}
  </option>
</select>
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
      workloads: [],
      search: '',
      selected:'Select an environment',
    }
  }, // data
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
 }
</script>

<style>

.main{
  overflow:hidden;
  flex-direction: column;
  align-items: center; 
}

.label{
  padding-bottom: 8px;
  color: rgb(185, 185, 185);
  text-align: left;
  margin-left: 20px;
}

.region{
  margin-bottom: 25px;
}

select{
  border-radius: 0px;
  background-color: rgb(46, 46, 46);
  width: 90%;  
  height: 50px;
  padding: 10px;
  color: rgb(185, 185, 185);
  cursor: pointer;
  font-size: 14px;
}

select:focus{
  outline:none;
}
</style>
