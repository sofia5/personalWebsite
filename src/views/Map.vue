<template>
  <div>
    <GChart
      class="map"
      :settings="{ packages: ['corechart', 'table', 'map', 'geochart'] }"
      type="GeoChart"
      :data="chartData"
      :options="chartOptions"
      mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
    />
    <div class="legend">
      <h4 class="legendTitle">Country Tracker</h4>
      <div>
        <svg width="10px" height="10px">
          <rect width="10px" height="10px" style="fill: green" />
        </svg>
        <p class="legendText inline">Lived in more than 3 months</p>
      </div>
      <div>
        <svg width="10px" height="10px">
          <rect width="10px" height="10px" style="fill: lightgreen" />
        </svg>
        <p class="legendText inline">Visited</p>
      </div>
      <h6 class="legendTotal">Total: {{ chartData.length - 1 }} countries</h6>
    </div>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import visitedCountries from "../data/visitedCountries.json";

export default {
  name: "Map",
  components: {
    GChart,
  },
  data() {
    return {
      chartData: visitedCountries,
      chartOptions: {
        chart: {
          title: "Countries",
        },
        colorAxis: {
          colors: ["lightgreen", "green"],
        },
        backgroundColor: "rgb(16, 16, 16)",
        legend: "none",
        tooltip: {
          textStyle: { fontName: "Candara" },
        },
      },
    };
  },
};
</script>


<style scoped>
.map {
  height: 92vh;
  width: 100vw;
  font-family: "Titillium", sans-serif;
}

body {
  overflow: hidden;
}

.legend {
  position: absolute;
  border: 2px solid lightgray;
  top: 5vh;
  right: 5vh;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  color: white;
}

.legendTitle {
  color: #00cccc;
  margin-bottom: 20px;
  text-align: center;
}

.inline {
  display: inline-block;
  padding: 10px;
}

.legendText {
  margin: 0;
}

.legendTotal {
  margin-top: 20px;
  text-align: center;
  color: #00cccc;
}
</style>