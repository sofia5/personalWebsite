
<template>
  <div>
    <wordcloud
      class="wordcloud"
      :data="skills"
      nameKey="skill"
      valueKey="skillLevel"
      :color="wordcloudColors"
      :showTooltip="false"
      :fontSize="wordcloudFontSize"
      :margin="wordcloudMargin"
    ></wordcloud>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from "vue";
import wordcloud from "vue-wordcloud";
import Skill from "@/types/Skill";

export default defineComponent({
  name: "SkillsWordCloud",
  components: {
    wordcloud,
  },
  props: { skills: { type: Array as PropType<Skill[]>, required: true } },
  data() {
    return {
      wordcloudColors: ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"],
      wordcloudFontSize: [15, 50],
      wordcloudMargin: { top: 15, right: 15, bottom: 0, left: 0 },
    };
  },
});
</script>


<style>
.container {
  margin-top: 50px;
}

.skillsButtonWrapper {
  display: flex;
  justify-content: flex-end;
}

.skillsButton {
  flex: 1;
}

.wordcloudWrapper {
  border: gray solid 1px;
}

.wordcloud {
  width: 100%;
  height: 100%;
}

.skillsHeader {
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
</style>
