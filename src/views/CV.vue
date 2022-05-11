
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
          <SkillsWordcloud
            v-if="cvSections.skills.parts[0].active == true"
            :skills="skills"
          />
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

<script>
import SkillsWordcloud from "../components/SkillsWordcloud.vue";
import SkillsCategories from "../components/SkillsCategories.vue";
import Education from "../components/Education.vue";
import EducationHighSchool from "../components/EducationHighSchool.vue";
import WorkExperience from "../components/WorkExperience.vue";
import CVButton from "../components/CVButton.vue";
import skills from "../data/skills.js";
import cvSections from "../data/cvSections.js";

export default {
  name: "CV",
  components: {
    SkillsWordcloud,
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
      ],
      skills,
    };
  },
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
