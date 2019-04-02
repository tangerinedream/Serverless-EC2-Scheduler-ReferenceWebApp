<template>
  <div>
    <h1>{{ msg }}</h1>

    <div id="tierInfo">
      <h3>{{ workloadName }}</h3>
      <table class="tierDetailsTbl">

        <div v-for="profile in profilesList" :key="profile">
          <th colspan="2">{{ profile.profileName }}</th>
          <tr
            v-if="profile.tiersDetails != null"
            v-for="tier in profile.tiersDetails" :key="tier"
            style="width:100%">
            <!-- <div id="tier"> -->
              <td id="tierName">{{ tier.tierName }}</td>
              <td id="instanceType">{{ tier.instanceType }}</td>
            <!-- </div> -->
          </tr>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      workloadName: 'Test',
      profilesList : [
        {
          profileName : 'Small',
          tiersDetails : [
            { tierName : 'IWeb', instanceType : 't2.large' },
            { tierName : 'PWeb', instanceType : 't2.small' },
            { tierName : 'ServiceMediation', instanceType : 't2.xlarge' },
            { tierName : 'BackendServices', instanceType : 't2.large' }
          ]
        },
        {
          profileName : 'Large',
          tiersDetails : [
            { tierName : 'IWeb', instanceType : 'm4.large' },
            { tierName : 'PWeb', instanceType : 't2.small' },
            { tierName : 'ServiceMediation', instanceType : 'm4.xlarge' },
            { tierName : 'BackendServices', instanceType : 'm4.large' }
          ]
        },
        {
          profileName : 'Patch',
          tiersDetails : [
            { tierName : 'IWeb', instanceType : 't3.xlarge' },
            { tierName : 'PWeb', instanceType : 't3.large' },
            { tierName : 'ServiceMediation', instanceType : 't3.xlarge' },
            { tierName : 'BackendServices', instanceType : 't3.xlarge' }
          ]
        }
      ] // profilesList
    } // return
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table.tierDetailsTbl {
  border: 1px solid black;
  display: flex;
}

tr:hover {background-color: #f5f5f5;}

tr, th, td {
  height: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  width: 80%;
}

td#tierName  {
    font-style: italic ;
}

td#instanceType, td#tierName {
    background-color: #eeffe6;
}
th {
  background-color: #99ccff;
  color: black;
}
</style>
