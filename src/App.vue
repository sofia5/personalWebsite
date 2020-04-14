
<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Vue from 'vue';
import VueGoogleCharts from 'vue-google-charts';

Vue.use(VueGoogleCharts)


export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>



<style>

body {
  background-color: black;
}

</style>
