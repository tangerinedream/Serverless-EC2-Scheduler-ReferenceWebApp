<template>
  <main> 
    <!-- <h1>{{ msg }}</h1> -->
  <div class="actions">
    <div class="workloadInfo" >
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
        <!-- <ul> -->
          <label v-for="action in actionTypes" v-bind:key="action" v-bind:value="action">
            <input
              type="radio"
              v-model="selected.action"
              v-bind:id="action"
              v-bind:value="action"
              name="selected.action">{{action}}
          </label>
        <!-- </ul> -->
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
      <div id="submit">
      <button>Submit</button>
    </div>
    </div>

    
    </div>

    <div class="results">
      <h3>Server Response</h3>
      <!-- <textarea rows="40" cols="80" v-model="JSON.stringify(serverResponse, null, 4)"></textarea> -->
      <textarea rows="40" cols="60" v-model="serverResponse"></textarea>
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
main{
  box-sizing: border-box;
  display:flex;
  color: #dddddd;
  padding-top: 80px;
  flex-direction:row;
  justify-content: space-around;
  overflow:auto;
}

.actions{
  border: 2px solid #7ac59c; 
  border-radius: 12px;
  display: flex;
  width: 40%;
  height: 90%;
  justify-content: center;
  justify-content: space-around;
  flex-direction: column;
  margin:10px;
}


.transition {
  transition: all 0.3s ease-out;
}

#action-types{
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 10%;
  height: 80px;
  width: 300px;
}

#action-types h3{
  padding-bottom:15px;
}

input[type="radio"]{
  visibility: hidden;
  height: 0;
  width: 0;
}

#action-types label{
  vertical-align: middle; 
  text-align: center;
  cursor: pointer;
  background-color: rgb(46, 46, 46);
  color: #58ba83;
  padding: 20px 20px;
  border-radius: 12px;
  transition: all 0.3s ease-out;
  margin:10px;
  /* border: 2px solid #58ba83; */
}

input[type="radio"]:checked + label {
  background-color: #58ba83;
}

#profiles{
  margin-top: 20px;
}

select{
  margin-top: 8px;
  border-radius: 3px;
  background-color: rgb(46, 46, 46);
  width: 90%;  
  height: 50px;
  padding: 10px;
  color: #58ba83;
  cursor: pointer;
  border: none;
}

select:focus{
  outline:none;
}

h3 {
	color: #AAAAAA;
}

h1{
  margin-top: 0;
  
}

table.workloadStatusTbl {
  background-color: rgb(46, 46, 46);
  border-radius: 12px;
  flex-direction: column;
  margin-left: 30%;
  margin-right: 30%;
}

tr:hover {
  background-color: #7ac59c;
  border-radius: 12px;
  }

th, td {  
  color: #dddddd;
  height: 20%;
  padding: 20px;
  width: 20%;
}
td{
  border: none;
}
th {
  color: black;
}

.workloadInfo button {
  background-color: #282828;
  border: 2px solid #7ac59c;  
  border-radius: 12px;
  color: rgb(240, 240, 240);
  font-weight: normal;
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 10px 4px; 
  cursor: pointer;
}

#submit button {
  background-color: #282828; 
  border: 2px solid #7ac59c; 
  border-radius: 12px;
  color: rgb(240, 240, 240);
  font-weight: normal;
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
}

/* ul { 
  list-style-type: none;
  padding: 0;
}
li { 
  margin: 0 10px; 
}*/

.results{
  justify-content: space-around;
  width: 40%;
  height: 90%;
}

.results textarea{
  /* justify-content: space-around; */
  border-radius: 12px;
  box-sizing: border-box;
  background-color: #242424;
  border: 2px solid #7ac59c; 
  color: rgb(240, 240, 240);
  padding: 20px;
  outline:none;
}

</style>
