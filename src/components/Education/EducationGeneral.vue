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
    <div v-for="school in education" :key="school.id">
      <div class="container-fluid" v-if="school.active == true">
        <!-- Title: Name & Grade -->
        <h5 class="schoolName inline" :style="{ color: school.color }">
          {{ school.nameLong }} ({{ school.nameShort }})
        </h5>
        <p class="lightgray inline marginLeftSmall">
          | Avg. Grade: {{ getAverageGrade[school.id] }} of 5.0
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
        <template v-if="school.exchangeFrom">
          <p class="boldGray">Exchange from:</p>
          <div class="container">
            <p class="inline" :style="{ color: school.color }">
              {{ school.exchangeFrom }}
            </p>
            <p class="lightgray inline marginLeftSmall">
              | {{ school.exchangeYear }}
            </p>
          </div>
        </template>

        <!-- Degrees -->
        <template v-if="school.degrees">
          <p class="boldGray">Degrees:</p>
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
        </template>

        <!-- Accomplishments -->
        <template v-if="school.accomplishments">
          <p class="boldGray">Accomplishments:</p>
          <div v-for="(accomplishment, i) in school.accomplishments" :key="i">
            <div class="container">
              <p class="marginBottomSmall" :style="{ color: school.color }">
                {{ accomplishment.name }}
              </p>
              <p class="lightgray">{{ accomplishment.description }}</p>
            </div>
          </div>
        </template>

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

<script lang="ts">
import { defineComponent } from "vue";
import EducationSchoolsChart from "./EducationSchoolsChart.vue";
import EducationCoursesCharts from "./EducationCoursesCharts.vue";
import education from "@/data/education.json";
import Education from "@/types/Education";
import Course from "@/types/Course";

export default defineComponent({
  name: "EducationGeneral",
  components: {
    EducationSchoolsChart,
    EducationCoursesCharts,
  },
  data() {
    return {
      credits: [] as number[],
      labels: [] as string[],
      averageGrade: {} as { [key: string]: number },
      education: education as Education[],
    };
  },
  computed: {
    getPointsPerSchool() {
      let pointsPerSchool: { name: string; credits: number }[] = [];
      this.education.forEach((school: Education, index: number) => {
        let count = 0;

        school.courses.forEach((course: Course) => {
          switch (school.pointScale) {
            // Sweden and Italy both have 30 credits per semester
            case "SE":
            case "IT":
              count = count + course.credits;
              break;

            // The US has 16 credits per semester
            case "US":
              count = count + course.credits * 1.875;
              break;

            // Argentina has 21 credits per semester
            case "AR":
              count = count + course.credits * 1.428;
              break;
            default:
              break;
          }
        });

        this.credits[index] = Math.round(count);
        this.labels[index] = school.nameShort;
        pointsPerSchool[index] = {
          name: school.nameShort,
          credits: count,
        };
      });

      return pointsPerSchool;
    },
    getAverageGrade() {
      let avg: { [key: string]: number } = {};

      this.education.forEach((school: Education) => {
        let score = 0;
        let possibleMaxScore = 0;

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
            score = score + this.isNumeric(course.grade) * course.credits;

            // Max grade AR: 10.0
            avg[school.nameShort] =
              Math.round(((score * 5) / possibleMaxScore) * 10) / 10;
            this.averageGrade[school.nameShort] = score / possibleMaxScore;

            /* ITALY */
          } else if (school.pointScale == "IT") {
            possibleMaxScore = possibleMaxScore + 30 * course.credits;
            score = score + this.isNumeric(course.grade) * course.credits;

            // Max grade 10: 30.0
            avg[school.nameShort] =
              Math.round(((score * 5) / possibleMaxScore) * 100) / 100;
            this.averageGrade[school.nameShort] = score / possibleMaxScore;
          }
        });
      });

      return avg;
    },
    getAverageGradeForSchool(name): number {
      return this.averageGrade[name];
    },
    getActiveSchool(): Education {
      return this.education.filter(
        (school: Education) => school.active == true
      )[0];
    },
  },
  created() {
    this.getPointsPerSchool;
  },
  methods: {
    isNumeric(stringOrNumber: string | number): number {
      return typeof stringOrNumber === "number" ? stringOrNumber : 0;
    },
  },
});
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