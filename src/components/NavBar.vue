<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand" to="/">Sofia Johansson</router-link>
    <div class="navbar-nav">
      <div v-for="item in items" :item="item" :key="item.id">
        <router-link class="nav-item nav-link" :to="item.router">{{
          item.text
        }}</router-link>
      </div>
    </div>
  </nav>
</template>


<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
  data() {
    return {
      items: [
        { id: 1, text: "CV", router: "/cv" },
        { id: 2, text: "Timeline", router: "/timeline" },
        { id: 3, text: "Map", router: "/map" },
      ],
    };
  },
});
</script>


<style scoped>
.navbar {
  height: 8vh;
}
</style>