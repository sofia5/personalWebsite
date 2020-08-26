<template>
  <div>
    <div v-for="(area, i) in getAreas" :key="i">
      <EducationCoursesChart :school="school" :area="area" />
    </div>
  </div>
</template>

<script>
import EducationCoursesChart from "../components/EducationCoursesChart.vue";

export default {
  props: ["school"],
  components: {
    EducationCoursesChart
  },
  data() {
    return {
      area: []
    };
  },
  computed: {
    getAreas() {
      var areas = [];
      this.school.courses.forEach(course => {
        if (!areas.includes(course.area)) {
          areas.push(course.area);
        }
      });
      return areas;
    }
  }
};
</script>

<style scoped>
</style>