<template>
  <div>
    <div v-for="(discipline, i) in getDisciplines" :key="i">
      <EducationCoursesChart :school="school" :discipline="discipline" />
    </div>
  </div>
</template>

<script>
import EducationCoursesChart from "../components/EducationCoursesChart.vue";

export default {
  props: ["school"],
  components: {
    EducationCoursesChart,
  },
  data() {
    return {
      discipline: [],
    };
  },
  computed: {
    getDisciplines() {
      return [
        ...new Set(this.school.courses.map((course) => course.discipline)),
      ];
    },
  },
};
</script>

<style scoped>
</style>