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
          <rect width="10px" height="10px" style="fill:green" />
        </svg>
        <p class="legendText inline">Lived in more than 3 months</p>
      </div>
      <div>
        <svg width="10px" height="10px">
          <rect width="10px" height="10px" style="fill:lightgreen" />
        </svg>
        <p class="legendText inline">Visited</p>
      </div>
      <h6 class="legendTotal">Total: {{chartData.length - 1}} countries</h6>
    </div>
  </div>
</template>

/*
//JSON
{
    "countries": [{
            "id": 1,
            "country": "Sweden",
            "livedIn": 1,
            "visited": 1
        },
        {
            "id": 2,
            "country": "USA",
            "livedIn": 1,
            "visited": 1
        }
    ]
}
 */

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "Map",
  components: {
    GChart
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Countries", "Lived", "Visited", { role: "tooltip" }],
        ["Sweden", 1, 1, ""],
        ["Argentina", 1, 1, ""],
        ["Norway", 0, 1, ""],
        ["Denmark", 0, 1, ""],
        ["Poland", 0, 1, ""],
        ["Germany", 0, 1, ""],
        ["United States", 1, 1, ""],
        ["Brazil", 0, 1, ""],
        ["France", 0, 1, ""],
        ["Italy", 1, 1, ""],
        ["Finland", 0, 1, ""],
        ["Latvia", 0, 1, ""],
        ["Estonia", 0, 1, ""],
        ["Lithuania", 0, 1, ""],
        ["Switzerland", 0, 1, ""],
        ["Austria", 0, 1, ""],
        ["Luxembourg", 0, 1, ""],
        ["Croatia", 0, 1, ""],
        ["Ireland", 0, 1, ""],
        ["United Kingdom", 0, 1, ""],
        ["Scotland", 0, 1, ""],
        ["Spain", 0, 1, ""],
        ["Portugal", 0, 1, ""],
        ["Malaysia", 0, 1, ""],
        ["Thailand", 0, 1, ""],
        ["Indonesia", 0, 1, ""],
        ["Singapore", 0, 1, ""],
        ["India", 0, 1, ""],
        ["China", 0, 1, ""],
        ["Turkey", 0, 1, ""],
        ["Nicaragua", 0, 1, ""],
        ["Uruguay", 0, 1, ""],
        ["Netherlands", 0, 1, ""],
        ["Belgium", 0, 1, ""],
        ["Liechtenstein", 0, 1, ""],
        ["Monaco", 0, 1, ""]
      ],
      chartOptions: {
        chart: {
          title: "Countries"
        },
        colorAxis: {
          colors: ["lightgreen", "green"]
        },
        backgroundColor: "black",
        legend: "none"
      }
    };
  }
};
</script>


<style scoped>
.map {
  height: 92vh;
  width: 100vw;
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