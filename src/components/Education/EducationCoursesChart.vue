<template>
  <div id="barchart">
    <div class="barChartAreaWrapper">
      <p class="barChartArea">{{ discipline }}</p>
    </div>
    <div class="barChartDataWrapper">
      <apexchart
        class="barChartData"
        type="bar"
        height="30"
        :options="chartOptions"
        :series="getCourses"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import VueApexCharts from "vue3-apexcharts";
import { defineComponent, PropType } from "vue";
import Education from "@/types/Education";
import Course from "@/types/Course";

export default defineComponent({
  name: "EducationCoursesChart",
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    discipline: { type: String, required: true },
    school: { type: Object as PropType<Education>, required: true },
  },
  data() {
    return {
      categories: [],
      chartOptions: {
        colors: [
          this.school.color,
          this.adjustColor(this.school.color, 40),
          this.adjustColor(this.school.color, 80),
          this.adjustColor(this.school.color, 120),
          this.adjustColor(this.school.color, 200),
          this.adjustColor(this.school.color, 280),
        ],
        chart: {
          type: "bar",
          height: "auto",
          stacked: true,
          toolbar: {
            tools: {
              download: false,
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "70%",
          },
        },
        stroke: {
          width: 1,
          colors: ["rgb(16, 16, 16)"],
        },
        grid: {
          padding: {
            top: -35,
            bottom: -20,
          },
        },
        xaxis: {
          min: 0,
          max: 41,
          categories: [""],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          position: "none",
        },
        legend: {
          show: false,
        },
        tooltip: {
          theme: "light",
          x: {
            show: false,
          },
        },
        states: {
          hover: {
            filter: {
              type: "lighten",
              value: 0.15,
            },
          },
          active: {
            filter: {
              type: "lighten",
              value: 0,
            },
          },
        },
      },
    };
  },
  computed: {
    getCourses() {
      let courses: unknown[] = [];
      this.school.courses.forEach((course: Course) => {
        let dataArray: number[] = [];
        if (course.discipline === this.discipline) {
          // The US both have 16 credits per semester
          if (this.school.pointScale == "US") {
            dataArray.push(Math.round(course.credits * 1.875 * 10) / 10);
          } else if (this.school.pointScale == "AR") {
            dataArray.push(Math.round(course.credits * 1.428 * 10) / 10);
          } else {
            dataArray.push(course.credits);
          }
          courses.push({ name: course.name, data: dataArray });
        }
      });
      return courses;
    },
  },
  methods: {
    adjustColor(color: string, amount: number) {
      return (
        "#" +
        color
          .replace(/^#/, "")
          .replace(/../g, (color) =>
            (
              "0" +
              Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
                16
              )
            ).substr(-2)
          )
      );
    },
  },
  created() {
    this.getCourses;
  },
});
</script>

<style scoped lang="scss">
.barChartAreaWrapper {
  display: inline-block;
  margin: 0;
  text-align: right;
}

.barChartArea {
  position: relative;
  width: 190px;
  margin: 0;
  color: white;
  font-size: 12px;
  top: -10px;
}

.barChartDataWrapper {
  display: inline-block;
  margin: 0;
  width: 80%;
}

.barChartData {
  margin: 0;
}

@media all and (min-width: 1000px) and (max-width: 1200px) {
  .barChartDataWrapper {
    width: 75%;
  }
}

@media all and (min-width: 800px) and (max-width: 1000px) {
  .barChartDataWrapper {
    width: 65%;
  }
}

@media all and (min-width: 450px) and (max-width: 800px) {
  .barChartDataWrapper {
    width: 60%;
  }
  .barChartArea {
    width: 150px;
    font-size: 10px;
  }
}

@media all and (max-width: 450px) {
  .barChartDataWrapper {
    width: 50%;
  }
  .barChartArea {
    width: 150px;
    font-size: 10px;
  }
}
</style>