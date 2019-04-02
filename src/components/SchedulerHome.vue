<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


    <!-- <h3>Actions</h3> -->
    <button name="Workloads" v-on:click="">Workloads</button>
    <button name="Tiers" v-on:click="">Tiers</button>

    <h3></h3>

    <ul>
      <li><a href="https://github.com/tangerinedream/Serverless-EC2-Scheduler">Serverless-EC2-Scheduler documentation</a>
</li>
      <li>Ver: {{ ver }}</li>
      <li>Endpoint: {{ endpoint }}</li>
    </ul>

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
      ver: 'v0.1',
      endpoint: 'something'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
button {
  background-color: #4CAF50;
  border: 2px solid #555555;
  color: black;
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 4px;
}
</style>
