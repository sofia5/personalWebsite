<template>
  <div>
    <div v-for="job in workExperience" :key="job.id">
      <p>{{ job.title }}</p>
    </div>
  </div>
</template>

<script>
import workExperience from "../data/workExperience.json";
export default {
  data() {
    return {
      workExperience: workExperience,
    };
  },
};
</script>

<style scoped>
</style>