<template>
  <div>
    <EducationSchoolsChart
      :credits="credits"
      :education="education"
      :labels="labels"
    />
    <p class="internationalPointsText">
      * The international credits have other scales. These have been
      approximated to fit the Swedish credit system.
    </p>
    <div v-for="school in education" :key="school.name">
      <div class="container-fluid" v-if="school.active == true">
        <!-- Title: Name & Grade -->
        <h5 class="schoolName inline" :style="{ color: school.color }">
          {{ school.nameLong }} ({{ school.nameShort }})
        </h5>
        <p class="lightgray inline marginLeftSmall">
          | Avg. Grade: {{ getAverageGrade[school.nameShort] }} of 5.0
        </p>

        <!-- About school -->
        <p class="aboutSchool boldGray">About {{ school.nameShort }}:</p>
        <div class="container schoolDescriptionWrapper">
          <p class="lightgray">{{ school.schoolDescription }}</p>

          <div class="schoolLink">
            <a :href="school.schoolLink">- {{ school.nameLong }}</a>
          </div>
        </div>

        <!-- Exchange from -->
        <p class="boldGray" v-if="school.exchangeFrom">Exchange from:</p>
        <div class="container" v-if="school.exchangeFrom">
          <p class="inline" :style="{ color: school.color }">
            {{ school.exchangeFrom }}
          </p>
          <p class="lightgray inline marginLeftSmall">
            | {{ school.exchangeYear }}
          </p>
        </div>

        <!-- Degrees -->
        <p class="boldGray" v-if="school.degrees">Degrees:</p>
        <div v-for="degree in school.degrees" :key="degree.name">
          <div class="container">
            <p class="inline" :style="{ color: school.color }">
              {{ degree.name }}
            </p>
            <p class="lightgray inline marginLeftSmall">
              | {{ degree.credits }} credits
            </p>
          </div>
        </div>

        <!-- Accomplishments -->
        <p class="boldGray" v-if="school.accomplishments">Accomplishments:</p>
        <div v-for="(accomplishment, i) in school.accomplishments" :key="i">
          <div class="container">
            <p class="marginBottomSmall" :style="{ color: school.color }">
              {{ accomplishment.name }}
            </p>
            <p class="lightgray">{{ accomplishment.description }}</p>
          </div>
        </div>

        <!-- Courses -->
        <p class="boldGray">Courses:</p>
        <div class="container">
          <p class="lightgray">{{ school.coursesComment }}</p>
        </div>
        <EducationCoursesCharts :school="getActiveSchool" />
      </div>
    </div>
  </div>
</template>

<script>
import EducationSchoolsChart from "./EducationSchoolsChart.vue";
import EducationCoursesCharts from "./EducationCoursesCharts.vue";
import education from "../data/education.js";

export default {
  name: "EducationGeneral",
  components: {
    EducationSchoolsChart,
    EducationCoursesCharts,
  },
  data() {
    return {
      credits: [],
      labels: [],
      averageGrade: [],
      education,
    };
  },
  computed: {
    getPointsPerSchool() {
      var array = [];
      this.education.forEach((school, index) => {
        var count = 0;
        school.courses.forEach((course) => {
          // Sweden and Italy both have 30 credits per semester
          if (school.pointScale == "SE" || school.pointScale == "IT") {
            count = count + course.credits;
            // The US has 16 credits per semester
          } else if (school.pointScale == "US") {
            count = count + course.credits * 1.875;
            // Argentina has 21 credits per semester
          } else if (school.pointScale == "AR") {
            count = count + course.credits * 1.428;
          }
        });

        this.credits[index] = Math.round(count);
        this.labels[index] = school.nameShort;
        array[index] = {
          name: school.nameShort,
          credits: count,
        };
      });

      return array;
    },
    getAverageGrade() {
      var avg = [];

      this.education.forEach((school) => {
        var score = 0;
        var possibleMaxScore = 0;

        school.courses.forEach((course) => {
          /* Sweden */
          if (school.pointScale == "SE") {
            // Sweden - normal semester 30 points
            possibleMaxScore = possibleMaxScore + course.credits;
            switch (course.grade) {
              case "A":
                score = score + 5 * course.credits;
                break;
              case "P":
                score = score + 5 * course.credits;
                break;
              case "B":
                score = score + 4.5 * course.credits;
                break;
              case "C":
                score = score + 4 * course.credits;
                break;
              case "D":
                score = score + 3.5 * course.credits;
                break;
              case "E":
                score = score + 3 * course.credits;
                break;
              case "default":
                break;
            }
            // Max grade Sweden: 5.0
            avg[school.nameShort] =
              Math.round((score / possibleMaxScore) * 10) / 10;
            this.averageGrade[school.nameShort] = score / possibleMaxScore;

            /* USA */
          } else if (school.pointScale == "US") {
            // US - normal semester 16 points
            possibleMaxScore = possibleMaxScore + course.credits;
            switch (course.grade) {
              case "A":
                score = score + 4 * course.credits;
                break;
              case "A-":
                score = score + 3.67 * course.credits;
                break;
              case "B+":
                score = score + 3.33 * course.credits;
                break;
              case "B":
                score = score + 3 * course.credits;
                break;
              case "B-":
                score = score + 2.67 * course.credits;
                break;
              case "C+":
                score = score + 2.33 * course.credits;
                break;
              case "C":
                score = score + 2 * course.credits;
                break;
              case "C-":
                score = score + 1.67 * course.credits;
                break;
              case "D+":
                score = score + 1.33 * course.credits;
                break;
              case "D":
                score = score + 1 * course.credits;
                break;
              case "D-":
                score = score + 0.67 * course.credits;
                break;
              case "default":
                break;
            }

            // Max grade US: 4.0
            avg[school.nameShort] =
              Math.round(((score * 5) / (possibleMaxScore * 4)) * 10) / 10;
            this.averageGrade[school.nameShort] = score / possibleMaxScore;

            /* ARGENTINA */
          } else if (school.pointScale == "AR") {
            possibleMaxScore = possibleMaxScore + 10 * course.credits;
            score = score + course.grade * course.credits;

            // Max grade AR: 10.0
            avg[school.nameShort] =
              Math.round(((score * 5) / possibleMaxScore) * 10) / 10;
            this.averageGrade[school.nameShort] = score / possibleMaxScore;

            /* ITALY */
          } else if (school.pointScale == "IT") {
            possibleMaxScore = possibleMaxScore + 30 * course.credits;
            score = score + course.grade * course.credits;

            // Max grade 10: 30.0
            avg[school.nameShort] =
              Math.round(((score * 5) / possibleMaxScore) * 100) / 100;
            this.averageGrade[school.nameShort] = score / possibleMaxScore;
          }
        });
      });

      return avg;
    },
    getAverageGradeForSchool(name) {
      return this.averageGrade[name];
    },
    getActiveSchool() {
      return this.education.filter((school) => school.active == true)[0];
    },
  },
  created() {
    this.getPointsPerSchool;
    this.getAverage;
  },
};
</script>

<style scoped>
.container {
  margin-top: 0;
}

.internationalPointsText {
  font-size: 12px;
  color: rgb(102, 102, 102);
  text-align: center;
}

.container-fluid {
  margin-top: 40px;
}

.schoolName {
  font-weight: bold;
}

.schoolDescriptionWrapper {
  margin-top: 0;
}

.schoolLink {
  font-style: italic;
  text-align: right;
  margin-bottom: -15px;
  margin-top: 5px;
}

a {
  color: rgb(102, 102, 102);
}

.lightgray {
  color: rgb(199, 199, 199);
}

.boldGray {
  color: rgb(102, 102, 102);
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
}

.marginLeftSmall {
  margin-left: 5px;
}

.marginBottomSmall {
  margin-bottom: 5px;
}

.inline {
  display: inline;
}
</style>