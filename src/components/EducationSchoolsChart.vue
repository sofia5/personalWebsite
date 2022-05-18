

<template>
  <div class="flex">
    <apexchart
      class="donutChart"
      type="donut"
      :options="chartOptions"
      :series="credits"
    ></apexchart>
  </div>
</template>
    
<script>
import VueApexCharts from "vue-apexcharts";

export default {
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
          events: {
            dataPointSelection: (event, chartContext, config) => {
              this.showInfo(config.dataPointIndex);
            },
          },
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
                  formatter: function (val) {
                    return val + " HP";
                  },
                },
                total: {
                  fontSize: "30px",
                  show: true,
                  color: "white",
                  formatter: function (w) {
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
    showInfo(index) {
      let activeEducation = this.education;
      activeEducation.map((school, i) =>
        i == index
          ? (activeEducation[index].active = !activeEducation[index].active)
          : (school.active = false)
      );
    },
  },
};
</script>
    
<style scoped>
.donutChart {
  width: 700px;
  height: 400px;
}

@media all and (max-width: 800px) {
}
</style>