<template>
  <div>
    <h1>{{ msg }}</h1>



    <h3>Workload Details</h3>
    <label>Workload Selection: </label>
    <select v-model="selected.name">
      <option v-for="workloadName in workloads.name" >{{workloadName}}</option>
    </select>
    <br />
    <div id="workloadDetails">
      <label>Workload Specification: </label>
      <p>{{ workloadDetails }}</p>
    </div>



    <h3>Workload Actions</h3>
    <!-- <label>Start</label><input type="radio" v-model="selected.action" value="Start"><br>
    <label>Stop</label><input type="radio" v-model="selected.action" value="Stop"><br> -->
    <ul >
      <li v-for="action in actionTypes">
        <input
          type="radio"
          v-model="selected.action"
          v-bind:id="action"
          v-bind:value="action"
          name="selected.action">{{action}}<br />
      </li>
    </ul>


    <div id="profiles" v-show="showProfiles">
      <label>Profiles: </label>
      <select v-model="selected.profile">
        <option v-for="profileName in workloads.profiles" >{{profileName}}</option>
      </select>
    </div>

    <h3>Confirmation</h3>
    <p>Workload: <b>{{ selected.name }}</b></p>
    <p>Action: <b>{{ selected.action }}</b></p>
    <p v-show="showProfiles">Profile: <b>{{ selected.profile}}</b></p>
    <button>Submit</button>

    <br />
    <label></label><I>Placeholder response from API call ...</I></label>

    <p>------------</p>
    <h3>Tiers</h3>
    <button name="Tiers" v-on:click="tierBtnClick">Tiers</button>



  </div>
</template>

<script>
export default {
  name: 'SchedulerHome',
  props: {
    msg: String
  },
  data() {
    return {
      workloadDetails: { "key1": "value1", "key2": "value2" },
      // workloadDetails: 'some json',
      showProfiles: false,
      actionTypes: ['Stop', 'Start'],
      workloads: {
        name: ['workloadA', 'workloadB', 'workloadC'],
        profiles: ['<No Profile>', 'profile A', 'profile B', 'profile C']
      },
      selected: {
        name: "",
        action: 'Stop',
        profile: ""
      }
    }
  },
  methods: {
    tierBtnClick: function() {
      alert('Tier Button Clicked');
    }
  },
  watch: {
    "selected.action": function(val, oldVal) {
      if( val == 'Start' ) {
        this.showProfiles = true;
      } else {
        this.showProfiles = false;
        this.selected.profile = "";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  padding: 15;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#workloadDetails {

}
/* button {
  background-color: #4CAF50;
  border: 2px solid #555555;
  color: black;
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 4px;
} */
</style>
