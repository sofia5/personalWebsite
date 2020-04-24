
<template>
  <div class="container">
    <!-- SKILLS -->
    <!-- Skills buttons -->
    <div class="skillsButtonWrapper">
      <div
        class="btn-group btn-group-toggle"
        data-toggle="buttons"
        v-for="(button, index) in buttons"
        :key="index"
      >
        <label
          class="skillsButton btn btn-sm"
          v-on:click="changeActive(index)"
          :class="{ active: button.active == true}"
        >
          <input type="radio" />
          {{button.name}}
        </label>
      </div>
    </div>

    <!-- Skills component -->
    <div class="CVAreaWrapper">
      <h5 class="CVAreaHeader">Skills</h5>
      <div v-for="(button, index) in buttons" :key="index">
        <Wordcloud v-if="button.name == 'Wordcloud' && button.active == true" :skills="skills" />
        <Categories v-if="button.name == 'Categories' && button.active == true" :skills="skills" />
      </div>
    </div>

    <!-- EDUCATION -->
    <div class="CVAreaWrapper">
      <h5 class="CVAreaHeader">Education</h5>
      <Education />
    </div>

    <!-- WORK EXPERIENCE -->
    <div class="CVAreaWrapper">
      <h5 class="CVAreaHeader">Work Experience</h5>
      <WorkExperience />
    </div>
  </div>
</template>

<script>
import Wordcloud from "../components/Wordcloud.vue";
import Categories from "../components/Categories.vue";
import Education from "../components/Education.vue";
import WorkExperience from "../components/WorkExperience.vue";

export default {
  name: "CV",
  components: {
    Wordcloud,
    Categories,
    Education,
    WorkExperience
  },
  data() {
    return {
      buttons: [
        { name: "Wordcloud", active: true },
        { name: "Categories", active: false }
      ],
      skills: [
        {
          skill: "Java",
          skillLevel: 3
        },
        {
          skill: "Python",
          skillLevel: 2
        },
        {
          skill: "Vue",
          skillLevel: 3
        },
        {
          skill: "JavaScript",
          skillLevel: 3
        },
        {
          skill: "German",
          skillLevel: 1
        },
        {
          skill: "Spanish",
          skillLevel: 2
        },
        {
          skill: "English",
          skillLevel: 4
        },
        {
          skill: "Erlang",
          skillLevel: 1
        },
        {
          skill: "ELK",
          skillLevel: 2
        },
        {
          skill: "Continuous Delivery",
          skillLevel: 2
        },
        {
          skill: "Agile",
          skillLevel: 3
        },
        {
          skill: "DevOps",
          skillLevel: 2
        },
        {
          skill: "Angular",
          skillLevel: 3
        },
        {
          skill: "Powerpoint",
          skillLevel: 5
        },
        {
          skill: "Excel",
          skillLevel: 4
        },
        {
          skill: "R",
          skillLevel: 1
        },
        {
          skill: "Node.js",
          skillLevel: 1
        },
        {
          skill: "CSS",
          skillLevel: 2
        },
        {
          skill: "HTML",
          skillLevel: 4
        },
        {
          skill: "Blogging",
          skillLevel: 3
        },
        {
          skill: "Photoshop",
          skillLevel: 4
        },
        {
          skill: "InDesign",
          skillLevel: 4
        },
        {
          skill: "Design",
          skillLevel: 4
        },
        {
          skill: "Tableau",
          skillLevel: 3
        },
        {
          skill: "Unity",
          skillLevel: 1
        },
        {
          skill: "Math",
          skillLevel: 4
        },
        {
          skill: "Enigineering",
          skillLevel: 4
        },
        {
          skill: "Photography",
          skillLevel: 3
        },
        {
          skill: "Bootstrap",
          skillLevel: 4
        },
        {
          skill: "Axure RD",
          skillLevel: 4
        },
        {
          skill: "Assembly",
          skillLevel: 2
        },
        {
          skill: "C",
          skillLevel: 2
        },
        {
          skill: "Economics",
          skillLevel: 3
        },
        {
          skill: "Research",
          skillLevel: 4
        },
        {
          skill: "Human-Computer Interactions",
          skillLevel: 3
        },
        {
          skill: "D3",
          skillLevel: 1
        },
        {
          skill: "APIs",
          skillLevel: 3
        },
        {
          skill: "Microservices",
          skillLevel: 3
        }
      ]
    };
  },
  methods: {
    changeActive(i) {
      this.buttons.forEach(button => {
        button.active = false;
      });
      this.buttons[i].active = true;
    }
  }
};
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
  border-radius: 0;
  border: none;
  background-color: rgb(83, 83, 83);
  color: white;
}

.active {
  background-color: gray;
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
