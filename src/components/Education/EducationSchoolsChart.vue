

<template>
  <div class="flex">
    <apexchart
      class="donutChart"
      type="donut"
      :options="chartOptions"
      :series="credits"
      @dataPointSelection="dataPointSelection"
    ></apexchart>
  </div>
</template>
    
<script lang="ts">
import VueApexCharts from "vue3-apexcharts";
import { defineComponent } from "vue";
import Education from "@/types/Education";

export default defineComponent({
  name: "EducationSchoolsChart",
  props: ["education", "credits", "labels"],
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        labels: this.labels,
        tooltip: {
          enabled: false,
        },
        legend: {
          position: "bottom",
        },

        dataLabels: {
          style: {
            fontSize: "0.9vmax",
            colors: ["rgb(16, 16, 16)"],
          },
          dropShadow: {
            enabled: false,
          },
        },
        chart: {
          type: "donut",
          foreColor: "rgb(163, 163, 163)",
        },
        stroke: {
          show: true,
          colors: "rgb(16, 16, 16)",
        },
        plotOptions: {
          pie: {
            donut: {
              size: "70%",
              labels: {
                show: true,
                value: {
                  show: true,
                  formatter: function (val: string) {
                    return val + " HP";
                  },
                },
                total: {
                  fontSize: "30px",
                  show: true,
                  color: "white",
                  formatter: function (w: { globals: { seriesTotals } }) {
                    return (
                      w.globals.seriesTotals.reduce((a, b) => {
                        return a + b;
                      }, 0) + " HP"
                    );
                  },
                },
              },
            },
          },
        },
      },
    };
  },
  methods: {
    dataPointSelection(_event, _chartContext, config) {
      this.showInfo(config.dataPointIndex);
    },
    showInfo(index: number) {
      let activeEducation = this.education;
      activeEducation.map((school: Education, i: number) =>
        i == index
          ? (activeEducation[index].active = !activeEducation[index].active)
          : (school.active = false)
      );
    },
  },
});
</script>
    
<style scoped>
.donutChart {
  width: 700px;
  height: 400px;
}

@media all and (max-width: 800px) {
}
</style>