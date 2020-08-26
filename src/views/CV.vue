
<template>
  <div class="container CVArea">
    <!-- FILTER -->
    <CVButton class="filterButtons" :buttons="filterButtons" :right="false" />

    <div v-for="(button, index) in filterButtons" :key="index">
      <!-- SKILLS -->
      <div
        v-if="(button.name == 'All' || button.name == cvAreas.skills.name) && button.active == true"
      >
        <CVButton :buttons="cvAreas.skills.parts" :right="true" />
        <div class="CVAreaWrapper">
          <h5 class="CVAreaHeader">{{cvAreas.skills.name}}</h5>
          <SkillsWordcloud v-if="cvAreas.skills.parts[0].active == true" :skills="skills" />
          <SkillsCategories v-if="cvAreas.skills.parts[1].active == true" :skills="skills" />
        </div>
      </div>

      <!-- EDUCATION -->
      <div
        v-if="(button.name == 'All' || button.name == cvAreas.education.name) && button.active == true"
      >
        <CVButton :buttons="cvAreas.education.parts" :right="true" />
        <div class="CVAreaWrapper">
          <h5 class="CVAreaHeader">{{cvAreas.education.name}}</h5>
          <Education v-if="cvAreas.education.parts[0].active == true" :skills="skills" />
          <EducationHighSchool v-if="cvAreas.education.parts[1].active == true" :skills="skills" />
        </div>
      </div>

      <!-- WORK EXPERIENCE -->
      <div
        v-if="(button.name == 'All' || button.name == cvAreas.workExperience.name) && button.active == true"
      >
        <div class="CVAreaWrapper">
          <h5 class="CVAreaHeader">{{cvAreas.workExperience.name}}</h5>
          <WorkExperience />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillsWordcloud from "../components/SkillsWordcloud.vue";
import SkillsCategories from "../components/SkillsCategories.vue";
import Education from "../components/Education.vue";
import EducationHighSchool from "../components/EducationHighSchool.vue";
import WorkExperience from "../components/WorkExperience.vue";
import CVButton from "../components/CVButton.vue";
import skills from "../data/skills.js";
import cvAreas from "../data/cvAreas.js";

export default {
  name: "CV",
  components: {
    SkillsWordcloud,
    SkillsCategories,
    Education,
    EducationHighSchool,
    WorkExperience,
    CVButton
  },
  data() {
    return {
      cvAreas,
      filterButtons: [
        { name: "All", active: true },
        { name: cvAreas.skills.name, active: false },
        { name: cvAreas.education.name, active: false },
        { name: cvAreas.workExperience.name, active: false }
      ],
      skills
    };
  }
};
</script>

<style>
.CVArea {
  margin-top: 30px;
}

.filterButtons {
  margin-bottom: 40px;
}

.CVAreaWrapper {
  border: gray solid 1px;
  margin-bottom: 40px;
}

.CVAreaHeader {
  position: relative;
  top: -15px;
  left: 15px;
  color: gray;
  font-style: italic;
  background-color: black;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
}

.flex {
  display: flex;
  justify-content: space-around;
}
</style>
