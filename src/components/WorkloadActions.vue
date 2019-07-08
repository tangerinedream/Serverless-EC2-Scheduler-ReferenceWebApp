<template>
  <main> 
    <h1>{{ msg }}</h1>

    <div class="workloadInfo" align="left">
      <h3>{{ workloadName }}</h3>
      <table class="workloadStatusTbl">
        <tr>
          <td>State</td>
          <td>{{ workloadStatus.state }}</td>
        </tr>
        <tr>
          <td>Profile</td>
          <td>{{ workloadStatus.profile }}</td>
        </tr>

      </table>
      <button name="tierDetails" type="button" value="Tier Details">Tier Details</button>


    </div>

    <div class="workloadActions">
      <div id="action-types">
        <h3>Workload Actions</h3>
        <ul>
          <li v-for="action in actionTypes" v-bind:key="action" v-bind:value="action">
            <input
              type="radio"
              v-model="selected.action"
              v-bind:id="action"
              v-bind:value="action"
              name="selected.action">{{action}}<br />
          </li>
        </ul>
      </div>

      <div id="profiles" v-show="showProfiles">
        <label>Profiles: </label>
        <select v-model="selected.profile">
          <option
            v-for="profileName in workloadActionElems.profiles"
            v-bind:key="profileName"
            v-bind:value="profileName">
            {{ profileName }}
          </option>
        </select>
      </div>

      <div id="confirmation">
        <h3>Confirmation</h3>
        <p>Workload: <b>{{ selected.name }}</b></p>
        <p>Action: <b>{{ selected.action }}</b></p>
        <p v-show="showProfiles">Profile: <b>{{ selected.profile}}</b></p>
      </div>
    </div>

    <div id="submit" align="left">
      <button>Submit</button>
    </div>

    <div class="results">
      <h3>Server Response</h3>
      <!-- <textarea rows="40" cols="80" v-model="JSON.stringify(serverResponse, null, 4)"></textarea> -->
      <textarea rows="40" cols="80" v-model="serverResponse"></textarea>
      </div>
  </main> 
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: false,
      default: 'Workload Actions'
    }
  },
  data() {
    return {
      workloadName: 'Test',
      workloadStatus : {
        state: 'unset',
        profile: 'unset'
      },
      showProfiles: false,
      actionTypes: ['Stop', 'Start'],
      workloadActionElems: {
        name: ['workloadA', 'workloadB', 'workloadC'],
        profiles: ['<No Profile>', 'profile A', 'profile B', 'profile C']
      },
      selected: {
        name: "",
        action: 'Stop',
        profile: ""
      },
      serverResponse: {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3",
        "key4": [
          'Cubs', 'Sox'
        ]
      }
    }
  },
  watch: {
    "selected.action": function(val) {
      if( val == 'Start' ) {
        this.showProfiles = true;
      } else {
        this.showProfiles = false;
        this.selected.profile = "";
      }
    }
  },
  filters: {
    pretty: function(value) {
      return JSON.stringify(JSON.parse(value), null, 2);
    }
  }
}
</script>


<style scoped>

.workloadActions {
  display: flex;
}

h3 {
  margin: 40px 0 0;
}

table.workloadStatusTbl {
  background-color: #dfb9ae;
  margin-left:20px; 
}

tr:hover {background-color: rgb(84, 107, 104);}

th, td {
  height: 30px;
  padding: 15px;
}
th {
  background-color: #99ccff;
  color: black;
}

.workloadInfo button {
  margin-left:20px;
  background-color: rgb(84, 107, 104);
  border: 2px solid rgb(84, 107, 104);  
  color: rgb(173, 173, 173);
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 4px;   
}

#submit button {
  margin-left:20px;
  background-color: rgb(84, 107, 104);
  border: 2px solid rgb(84, 107, 104); 
  color: rgb(173, 173, 173);
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 4px;   
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px; 
}

.results textarea{
  background-color: #f7e5da;
  
}

</style>
