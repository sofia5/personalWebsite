<template>
  <div>
    <div v-for="job in workExperience" :key="job.id">
      <p>{{ job.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import * as workExperience from "../data/workExperience.json";
import Job from "../types/Job";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      workExperience: workExperience as Job[],
    };
  },
});
</script>

<style scoped>
</style>