<template>
  <div class="container">
    <div class="row">
      <div v-for="(category, i) in getCategories" :key="i">
        <p @click="getSkillsInCategory(category)" class="skillsCategories">
          {{ category }}
        </p>
      </div>
    </div>

    <div class="skillWrapper" v-for="(skills, i) in categorySkills" :key="i">
      <p class="skill">{{ skills.skill }}</p>
      <SkillsCategoriesChart class="skillChart" :skillLevel="skills.level" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SkillsCategoriesChart from "./SkillsCategoriesChart.vue";
import Skill from "@/types/Skill";

interface SkillCategory {
  skill: string;
  level: number;
}

export default defineComponent({
  name: "SkillsCategories",
  props: { skills: { type: Array as PropType<Skill[]>, required: true } },
  components: { SkillsCategoriesChart },
  data() {
    return {
      categorySkills: [] as SkillCategory[],
    };
  },
  computed: {
    getCategories(): string[] {
      return [...new Set(this.skills.map((skill) => skill.category))];
    },
  },
  methods: {
    getSkillsInCategory(category: string) {
      this.categorySkills = this.skills
        .filter((skill) => skill.category === category)
        .map((skill) => ({ skill: skill.skill, level: skill.skillLevel }))
        .sort();
      // this.categorySkills.sort(
      //   (function (index) {
      //     return function (a: SkillCategory, b: SkillCategory) {
      //       return a[index] === b[index] ? 0 : a[index] < b[index] ? -1 : 1;
      //     };
      //   })(2)
      // );
    },
  },
});
</script>




<style scoped>
.container {
  margin-top: 0px;
  color: white;
}

.skillsCategories {
  color: #00cccc;
  text-align: center;
  width: 220px;
  cursor: pointer;
}

.row {
  display: flex;
  justify-content: right;
}

.skillWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.skill {
  flex: 1;
}

.skillChart {
  flex: 1;
}
</style>