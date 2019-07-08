<template>
<!-- switch schedulerhome and app, so this is app and app becomes like details or something -->
<div id='SchedulerHome'>
  <div class="top">
    <div class="header"></div>
  </div>
  <div class="below-top">
      <nav class="aside-left-nav"></nav>
      <main class="main">
        <div class="main-body">
          <div class="dashboard">
            <table class="workloadTable">
        <tr v-for="workload in workloads" v-bind:key="workload.SpecName">
          <td>
            <a v-bind:href="'/workload/' + workload.SpecName">{{workload.SpecName}}</a>
          </td>
          </tr>
      </table>
            </div>
          </div>
        </main>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SchedulerHome',
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
      ver: 'v0.1',
      endpoint: 'something'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
  width: 100%;
  height: 50px;
  background-color: #b1b1b1;
  position: absolute;  
}

body {
  background-color: #272727;
  margin:0; 
}

.aside-left-menu{
  -webkit-box-flex: 0;
  flex: 0,0,auto; 
  width:70px; 
  overflow: visible;
}

.aside-left-menu #sideMenu{
  display: flex;
  display:-webkit-flex;
  display: -webkit-box;
  -webkit-box-orient: vertical; 
  background-color: #666666;
  flex-direction: column; 
}

</style>
