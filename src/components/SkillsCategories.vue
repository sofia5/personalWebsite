<template>
  <div class="container">
    <div class="row">
      <div v-for="(categories, i) in getCategories" :key="i">
        <p
          @click="getSkillsInCategory(categories.category)"
          class="skillsCategories"
        >{{categories.category}}</p>
      </div>
    </div>

    <div class="skillWrapper" v-for="(skills, i) in categorySkills" :key="i">
      <p class="skill">{{ skills.skill }}</p>
      <SkillsCategoriesChart class="skillChart" :skillLevel="skills.level" />
    </div>
  </div>
</template>

<script>
import SkillsCategoriesChart from "../components/SkillsCategoriesChart.vue";

export default {
  name: "SkillsCategories",
  props: ["skills"],
  components: { SkillsCategoriesChart },
  data() {
    return {
      categorySkills: []
    };
  },
  computed: {
    getCategories() {
      var categories = [];
      var categories2 = [];
      this.skills.forEach(skill => {
        if (!categories.includes(skill.category)) {
          categories.push(skill.category);
        }
      });
      categories.sort();
      categories.forEach(category => {
        categories2.push({ category: category, active: true });
      });
      return categories2;
    }
  },
  methods: {
    getSkillsInCategory(category) {
      this.categorySkills = [];
      this.skills.forEach(skill => {
        if (skill.category == category) {
          this.categorySkills.push({
            skill: skill.skill,
            level: skill.skillLevel
          });
        }
      });
      this.categorySkills.sort(
        (function(index) {
          return function(a, b) {
            return a[index] === b[index] ? 0 : a[index] < b[index] ? -1 : 1;
          };
        })(2)
      );
    }
  }
};
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