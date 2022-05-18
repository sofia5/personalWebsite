
<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import Vue from "vue";
// import VueGoogleCharts from "vue-google-charts";
// import { GChart } from "vue-google-charts";

// Vue.use(VueGoogleCharts);

export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>



<style lang="scss">
@import "./assets/scss/variables.scss";
body {
  background-color: $background-color;
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgb(49, 49, 49);
  border-radius: 10px;
}
</style>
