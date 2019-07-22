<template>
  <div id="app">
    <header class="header">

     <div class="user"> 
         <a href="#"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="24" height="24"
          viewBox="0 0 172 172"
          style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM86,34.04167c12.86417,0 23.29167,10.4275 23.29167,23.29167c0,12.86417 -10.4275,23.29167 -23.29167,23.29167c-12.86417,0 -23.29167,-10.4275 -23.29167,-23.29167c0,-12.86417 10.4275,-23.29167 23.29167,-23.29167zM86,143.33333c-19.85167,0 -37.33833,-10.09067 -47.62967,-25.42017c8.03383,-11.68167 33.626,-17.57983 47.62967,-17.57983c14.00367,0 39.59583,5.89817 47.62967,17.57983c-10.29133,15.3295 -27.778,25.42017 -47.62967,25.42017z"></path></g></g></svg></a>
          <ul class="sub-menu">
            <a href="#"><li>Account</li></a>
          </ul>
          
      </div>
    </header>

<div id=sideMenu>
  <div id="side-box"></div>
    <div id="workloadSide">
      <AutocompleteComponent :items="['SampleWorkload-01', 'SampleWorkload-02', 'SampleWorkload-03', 'SampleWorkload-04', 'SampleWorkload-05', 'SampleWorkload-06', 'SampleWorkload-07', 'SampleWorkload-08', 'SampleWorkload-09']"> 
         </AutocompleteComponent> 
      <!-- <div class="search-wrapper"> -->

        <!-- <div title="Stopped" class="stopped"> 
          <div class="status-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="17" height="17" viewBox="0 0 226 226" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" 
              stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" 
              font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#ffffff"><g id="surface1">
              <path d="M113,9.04c-57.32984,0 -103.96,46.63016 -103.96,103.96c0,57.32984 46.63016,103.96 103.96,103.96c57.32984,0 103.96,-46.63016 103.96,-103.96c0,-57.32984 -46.63016,-103.96 -103.96,-103.96zM167.24,126.56c0,2.71906 -1.80094,4.52 -4.52,4.52h-99.44c-2.71906,0 -4.52,-1.80094 -4.52,-4.52v-27.12c0,-2.71906 1.80094,-4.52 4.52,-4.52h99.44c2.71906,0 4.52,1.80094 4.52,4.52z"></path></g></g></g></svg>
          </div>
          <div class="status-label">Stopped</div>
        </div>
        <div title="Running" class="running">
          <div class="status-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="17" height="17"
              viewBox="0 0 172 172"
              style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" 
              stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
              <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM126.90017,69.56683l-50.16667,50.16667c-1.3975,1.3975 -3.23217,2.09983 -5.06683,2.09983c-1.83467,0 -3.66933,-0.70233 -5.06683,-2.09983l-21.5,-21.5c-2.80217,-2.80217 -2.80217,-7.3315 0,-10.13367c2.80217,-2.80217 7.3315,-2.80217 10.13367,0l16.43317,16.43317l45.09983,-45.09983c2.80217,-2.80217 7.3315,-2.80217 10.13367,0c2.80217,2.80217 2.80217,7.3315 0,10.13367z"></path></g></g></svg>
          </div>
          <div class="status-label">Running</div>
        </div>-->
      <!-- </div> -->
      <DropdownComponent></DropdownComponent>
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
import Autocomplete from './components/Autocomplete.vue'
import Dropdown from './components/Dropdown.vue'

export default {
  name: 'app',
  data: function() {
    return {
      tabs: ['WorkloadComponent', 'WorkloadActionsComponent', 'WorkloadTierDetailsComponent'],
      selected: 'WorkloadComponent',
      workloads: []
    };
  },
  components: {
    'SchedulerHomeComponent': SchedulerHome,
    'WorkloadComponent': Workload,
    'WorkloadActionsComponent': WorkloadActions,
    'WorkloadTierDetailsComponent': WorkloadTierDetails,
    'AutocompleteComponent': Autocomplete,
    'DropdownComponent' : Dropdown,
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
}
  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
}

body {
  background-color: rgb(65, 65, 65);
  margin:0; 
  box-sizing: border-box; 
}

a:link{text-decoration: none;color: rgb(240, 240, 240);}

a:visited{text-decoration: none;color:rgb(240, 240, 240);} 

.header{
  width: 100%;
  height: 65px;
  background-color: #111111;
  position: absolute;  
  box-shadow: 0px 2px 2px -1px rgb(27, 27, 27); 
  display: flex; 
  justify-content: flex-end; 
}

.user{
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 20px;
  height: 45px;
  border-left: 1px solid rgb(160, 160, 160); 
  position: relative;
}

.user .sub-menu{
  visibility: hidden; /* hides sub-menu */
  opacity: 0;
  border: 1px solid rgb(160, 160, 160); 
  position: absolute;
  top: 100%;
  right: 0;
  width: 200%;
  transform: translateY(-2em);
  z-index: -1;
  background: #111111;
  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
}

.user:focus .sub-menu,
.user:focus-within .sub-menu,
.user:hover .sub-menu{
  visibility: visible;
  /* shows sub-menu */
  opacity: 1;
  z-index: 1;
  transform: translateY(0%);
  transition-delay: 0s, 0s, 0.3s;
}

.user a {
  display: block;
  text-decoration: none;
}
ul.sub-menu:hover {
  color: #7ac59c;
}
.user ul,
.user ul li,
.user ul li a {
  list-style-type: none;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  color: rgb(240, 240, 240);
}

#side-box{ 
  height: 65px;
  width: 102%;
  background-color: #111111;
}

#sideMenu{
  box-sizing: border-box;
  background-color: #242424;
  box-shadow: 1px 0 2px 0px rgb(27, 27, 27);  
  position: absolute; 
  height: 120%;  
  width:18%; 
  color:rgb(226, 226, 226);
}

main{
  border-radius: 2px;
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
  margin: 30px 4px;
  background-color:#202020;
  box-shadow: inset 0 -1rem 0.75rem -1rem rgba(0, 0, 0, 0.25);
  opacity:0.6;
  transition: 100ms linear all;
  cursor: pointer; 
  margin-bottom: 1rem;
  border-top-left-radius: 10px;
  border-top-right-radius:10px;
  border: none;
  outline: none; 
  color:rgb(240, 240, 240);
  border: 2px solid #7ac59c; 
}

.active {
  opacity:1;
  border-top: 4px solid #63d691;
  box-shadow: none;
}

.tab{
  top:22px;
  align-items: center;
  left:auto;  
  right: auto; 
  box-sizing: border-box;
  padding: 70px;
  padding-top: 30px;
  background-color: #202020;
  width:97%;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 2px solid #7ac59c; 
}

.stopped{
  box-sizing:border-box;
  width: 120px;
  height: 25px;
  background-color: rgb(202, 69, 69);
  color: white;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 12px;
  align-items: center; 
  display:flex;
  text-align: right; 
}

/*.running{
  box-sizing:border-box;
  width: 120px;
  height: 25px;
  background-color: rgb(105, 167, 105);
  color: white;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 12px;
  align-items: center; 
  display:flex;
  text-align: right; 
}*/

.running{
  box-sizing:border-box;
  width: 120px;
  height: 25px;
  background-color: #313131;
  border: 2px solid rgb(105, 167, 105);
  color: rgb(230, 230, 230);
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 12px;
  align-items: center; 
  display:flex;
  text-align: right; 
}

.patching{
  box-sizing:border-box;
  width: 120px;
  height: 25px;
  background-color: rgb(255, 174, 81);
  color: white;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 12px;
  align-items: center; 
  display:flex;
  text-align: right; 
}

.status-label{
  margin-left: 10px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.status-icon{
  margin-top: 3px;
  margin-left: 6px; 
  float:left;
}

.patching .status-label{
  margin-left: 8px;
}

</style>
