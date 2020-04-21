<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand" to="/">Sofia Johansson</router-link>
    <div class="navbar-nav">
      <div v-for="item in items" v-bind:item="item" v-bind:key="item.id">
        <router-link class="nav-item nav-link" v-bind:to="item.router">{{ item.text }}</router-link>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: "NavBar",
  data() {
    return {
      items: [
        { id: 1, text: "Timeline", router: "/timeline" },
        { id: 2, text: "Photos", router: "/photos" },
        { id: 3, text: "Map", router: "/map" }
      ]
    };
  }
};
</script>


<style scoped>
.navbar {
  background: black;
  height: 8vh;
}
</style>