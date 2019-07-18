<template>
    <main>

    <div id="tierInfo">
      <!-- <h1>{{ workloadName }}</h1> -->
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
   </main> 
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      workloadName: 'Tiers',
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
#tierInfo{
  display: flex;
  box-sizing: border-box;
  padding-top: 100px; 
  justify-content: space-around;
}

h1 {
margin-top: 0; 
margin-bottom: 50px;
color: rgb( 240, 240, 240);
text-align: left;
}

table.tierDetailsTbl {
  /* justify-content: space-around;  */
  display:flex;
  border-collapse: collapse; 
  width: 95%;
}

tr, th, td {
  height: 30px;
  padding: 20px;
  width: 800px;
}

td#tierName  {
    font-style: italic ;
}

td#instanceType, td#tierName {
  background-color: rgb(63, 63, 63);
  color: rgb(226, 226, 226);
}
th {
  background-color: rgb(49, 49, 49);
  color: #7ac59c;
}


</style>
