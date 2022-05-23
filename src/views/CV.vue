<template>
  <div class="container CVArea">
    <!-- FILTER -->
    <CVButton class="filterButtons" :buttons="filterButtons" :right="false" />

    <div v-for="(button, index) in filterButtons" :key="index">
      <!-- SKILLS -->
      <div
        v-if="
          (button.name == 'All' || button.name == cvSections.skills.name) &&
          button.active == true
        "
      >
        <CVButton :buttons="cvSections.skills.parts" :right="true" />
        <div class="CVAreaWrapper">
          <h5 class="CVAreaHeader">{{ cvSections.skills.name }}</h5>
          <!-- <SkillsWordCloud
            v-if="cvSections.skills.parts[0].active == true"
            :skills="skills"
          /> -->
          <SkillsCategories
            v-if="cvSections.skills.parts[1].active == true"
            :skills="skills"
          />
        </div>
      </div>

      <!-- EDUCATION -->
      <div
        v-if="
          (button.name == 'All' || button.name == cvSections.education.name) &&
          button.active == true
        "
      >
        <CVButton :buttons="cvSections.education.parts" :right="true" />
        <div class="CVAreaWrapper">
          <h5 class="CVAreaHeader">{{ cvSections.education.name }}</h5>
          <Education
            v-if="cvSections.education.parts[0].active == true"
            :skills="skills"
          />
          <EducationHighSchool
            v-if="cvSections.education.parts[1].active == true"
            :skills="skills"
          />
        </div>
      </div>

      <!-- WORK EXPERIENCE -->
      <div
        v-if="
          (button.name == 'All' ||
            button.name == cvSections.workExperience.name) &&
          button.active == true
        "
      >
        <div class="CVAreaWrapper">
          <h5 class="CVAreaHeader">{{ cvSections.workExperience.name }}</h5>
          <WorkExperience />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import SkillsWordCloud from "../components/Skills/SkillsWordCloud.vue";
import SkillsCategories from "../components/Skills/SkillsCategories.vue";
import Education from "../components/Education/EducationGeneral.vue";
import EducationHighSchool from "../components/Education/EducationHighSchool.vue";
import WorkExperience from "../components/WorkExperience.vue";
import CVButton from "../components/CVButton.vue";
import skills from "@/data/skills.json";
import cvSections from "@/data/cvSections.js";
import ButtonWithState from "../types/ButtonWithState";

export default defineComponent({
  name: "CV",
  components: {
    // SkillsWordCloud,
    SkillsCategories,
    Education,
    EducationHighSchool,
    WorkExperience,
    CVButton,
  },
  data() {
    return {
      cvSections,
      filterButtons: [
        { name: "All", active: true },
        { name: cvSections.skills.name, active: false },
        { name: cvSections.education.name, active: false },
        { name: cvSections.workExperience.name, active: false },
      ] as ButtonWithState[],
      skills,
    };
  },
});
</script>

<style>
.CVArea {
  margin-top: 30px;
}

.filterButtons {
  margin-bottom: 40px;
}

.CVAreaWrapper {
  border: rgb(26 26 26) solid 1px;
  margin-bottom: 40px;
}

.CVAreaHeader {
  position: relative;
  top: -15px;
  left: 15px;
  color: gray;
  font-style: italic;
  background-color: rgb(16, 16, 16);
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
}

.flex {
  display: flex;
  justify-content: space-around;
}
</style>
