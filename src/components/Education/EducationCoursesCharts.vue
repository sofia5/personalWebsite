<template>
  <div>
    <div v-for="(discipline, i) in getDisciplines" :key="i">
      <EducationCoursesChart :school="school" :discipline="discipline" />
    </div>
  </div>
</template>

<script lang="ts">
import EducationCoursesChart from "./EducationCoursesChart.vue";
import { defineComponent, PropType } from "vue";
import Education from "@/types/Education";

export default defineComponent({
  props: { school: { type: Object as PropType<Education>, required: true } },
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
});
</script>

<style scoped>
</style>