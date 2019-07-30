<template>
<div id = "workloadInfo">

<div id=sideMenu>
  <div id="side-box"></div>
    <div id="workloadSide">
      <AutocompleteComponent :items="['SampleWorkload-01', 'SampleWorkload-02', 'SampleWorkload-03', 'SampleWorkload-04', 'SampleWorkload-05', 'SampleWorkload-06', 'SampleWorkload-07', 'SampleWorkload-08', 'SampleWorkload-09']"> 
         </AutocompleteComponent> 
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
import Workload from '../components/Workload.vue'
import WorkloadActions from '../components/WorkloadActions.vue'
import WorkloadTierDetails from '../components/WorkloadTierDetails.vue'
import Autocomplete from '../components/Autocomplete.vue'
import Dropdown from '../components/Dropdown.vue'

export default {
  name: 'workloadInfo',
  data: function() {
    return {
      tabs: ['WorkloadComponent', 'WorkloadActionsComponent', 'WorkloadTierDetailsComponent'],
      selected: 'WorkloadComponent',
      workloads: []
    };
  },
  components: {
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

}
</script>

<style>
/*#workloadInfo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
}*/

a:link{text-decoration: none;color: rgb(240, 240, 240);}

a:visited{text-decoration: none;color:rgb(240, 240, 240);} 

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




</style>
