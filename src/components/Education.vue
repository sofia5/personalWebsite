<template>
  <div>
    <div class="flex">
      <apexchart
        width="600px"
        height="600px"
        type="donut"
        :options="chartOptions"
        :series="highschoolPoints"
      ></apexchart>
    </div>
    <p
      class="internationalPointsText"
    >* The international points have other scales. These have been approximated to fit the Swedish point system</p>
    <div v-for="(school, index) in education" :key="index">
      <div class="container-fluid" v-if="school.active == true">
        <p
          class="schoolName"
        >{{school.nameLong}} | Average Grade: {{getAverageGrade[school.nameShort]}} of 5.0</p>
        <p class="schoolDescription">{{school.schoolDescription}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Education",
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      highschoolPoints: [],
      averageGrade: [],
      chartOptions: {
        tooltip: {
          enabled: false
        },
        legend: {
          position: "bottom"
        },
        labels: [],
        dataLabels: {
          style: {
            fontSize: "12px",
            colors: ["black"]
          },
          dropShadow: {
            enabled: false
          }
        },
        chart: {
          type: "donut",
          foreColor: "rgb(163, 163, 163)",
          events: {
            dataPointSelection: (event, chartContext, config) => {
              this.showInfo(config.dataPointIndex);
            }
          }
        },
        stroke: {
          show: true,
          colors: "black"
        },
        plotOptions: {
          pie: {
            donut: {
              size: "70%",
              labels: {
                show: true,
                value: {
                  show: true,
                  formatter: function(val) {
                    return val + " HP";
                  }
                },
                total: {
                  fontSize: "22px",
                  show: true,
                  color: "white",
                  formatter: function(w) {
                    return (
                      w.globals.seriesTotals.reduce((a, b) => {
                        return a + b;
                      }, 0) + " HP"
                    );
                  }
                }
              }
            }
          }
        }
      },
      education: [
        {
          nameShort: "KTH",
          nameLong: "The Royal Institute of Technology",
          educationLevel: "University",
          schoolDescription:
            "Since its founding in 1827, KTH Royal Institute of Technology in Stockholm has grown to become one of Europe’s leading technical and engineering universities, as well as a key centre of intellectual talent and innovation. We are Sweden’s largest technical research and learning institution and home to students, researchers and faculty from around the world dedicated to advancing knowledge.",
          active: false,
          degrees: [
            { name: "Bachelor of Science", highschoolPoints: 180 },
            { name: "Master of Science", highschoolPoints: 120 },
            {
              name: "Master of Science in Engineering",
              highschoolPoints: 300
            }
          ],
          bachelorProgram: {
            name: "Information and Communication Technology",
            highschoolPoints: 300
          },
          masterProgram: {
            name: "Human Computer Interaction and Design EIT",
            highschoolPoints: 120
          },
          courses: [
            {
              name: "Mathematics, Basic Course ",
              highschoolPoints: 4.5,
              courseReference: "SF1659",
              grade: "D",
              date: "2013-10-07",
              courseLevel: "bachelor"
            },
            {
              name: "Digital Design",
              highschoolPoints: 7.5,
              courseReference: "IE1204",
              grade: "C",
              date: "2013-10-28",
              courseLevel: "bachelor"
            },
            {
              name: "Japanese Studies and the Basic of Japanese",
              highschoolPoints: 7.5,
              courseReference: "LS1380",
              grade: "B",
              date: "2013-12-14",
              courseLevel: "bachelor"
            },
            {
              name: "Calculus in One Variable ",
              highschoolPoints: 7.5,
              courseReference: "SF1625",
              grade: "D",
              date: "2014-01-11",
              courseLevel: "bachelor"
            },
            {
              name: "Algebra and Geometry ",
              highschoolPoints: 7.5,
              courseReference: "SF1624",
              grade: "E",
              date: "2014-05-20",
              courseLevel: "bachelor"
            },
            {
              name: "Discrete Mathematics",
              highschoolPoints: 7.5,
              courseReference: "SF1610",
              grade: "C",
              date: "2014-05-27",
              courseLevel: "bachelor"
            },
            {
              name: "Embedded Electronics ",
              highschoolPoints: 7.5,
              courseReference: "IE1206",
              grade: "C",
              date: "2014-06-05",
              courseLevel: "bachelor"
            },
            {
              name: "Algorithms and Data Structures ",
              highschoolPoints: 7.5,
              courseReference: "ID1020",
              grade: "B",
              date: "2014-10-31",
              courseLevel: "bachelor"
            },
            {
              name: "Electromagnetism and Waves ",
              highschoolPoints: 7.5,
              courseReference: "IF1613",
              grade: "D",
              date: "2014-10-31",
              courseLevel: "bachelor"
            },
            {
              name: "Information and Retrieval and Source Criticism",
              highschoolPoints: 1.5,
              courseReference: "LI1012",
              grade: "P",
              date: "2014-12-10",
              courseLevel: "bachelor"
            },
            {
              name: "Industrial Management, Basic Course",
              highschoolPoints: 6.0,
              courseReference: "ME1003",
              grade: "B",
              date: "2015-01-15",
              courseLevel: "bachelor"
            },
            {
              name: "Computer Hardware Engineering",
              highschoolPoints: 7.5,
              courseReference: "IS1200",
              grade: "D",
              date: "2015-03-16",
              courseLevel: "bachelor"
            },
            {
              name: "Calculus in Several Variable II",
              highschoolPoints: 7.5,
              courseReference: "SF1670",
              grade: "E",
              date: "2015-03-16",
              courseLevel: "bachelor"
            },
            {
              name: "Programming II",
              highschoolPoints: 7.5,
              courseReference: "ID1019",
              grade: "E",
              date: "2015-03-20",
              courseLevel: "bachelor"
            },
            {
              name: "Networks and Communication",
              highschoolPoints: 7.5,
              courseReference: "IK1203",
              grade: "B",
              date: "2015-03-20",
              courseLevel: "bachelor"
            },
            {
              name: "Team Leadership and Human Resource Management",
              highschoolPoints: 6.0,
              courseReference: "ME2063",
              grade: "B",
              date: "2015-04-20",
              courseLevel: "bachelor"
            },
            {
              name: "Project IT",
              highschoolPoints: 7.5,
              courseReference: "ID1003",
              grade: "P",
              date: "2015-06-09",
              courseLevel: "bachelor"
            },
            {
              name: "Modern Software Development",
              highschoolPoints: 6.0,
              courseReference: "IV1303",
              grade: "P",
              date: "2015-06-09",
              courseLevel: "bachelor"
            },
            {
              name: "Programming I",
              highschoolPoints: 7.5,
              courseReference: "ID1018",
              grade: "A",
              date: "2016-01-13",
              courseLevel: "bachelor"
            },
            {
              name: "Sustainable Development, ICT and Innovation",
              highschoolPoints: 7.5,
              courseReference: "AG1815",
              grade: "A",
              date: "2016-04-15",
              courseLevel: "bachelor"
            },
            {
              name: "Project Management: Leadership and Control",
              highschoolPoints: 6.0,
              courseReference: "ME2015",
              grade: "B",
              date: "2016-06-23",
              courseLevel: "bachelor"
            },
            {
              name:
                "Degree Project in Information and Communication Technology, First Cycle",
              highschoolPoints: 15.0,
              courseReference: "II123X",
              grade: "B",
              date: "2016-07-04",
              courseLevel: "bachelor"
            },
            {
              name: "Project Work II",
              highschoolPoints: 15.0,
              courseReference: "SI2911",
              grade: "P",
              date: "2016-12-14",
              courseLevel: "bachelor"
            },
            {
              name: "Probability Theory and Statistics",
              highschoolPoints: 6.0,
              courseReference: "SF1901",
              grade: "E",
              date: "2017-05-30",
              courseLevel: "bachelor"
            },
            {
              name: "Human-Computer Interaction, Research Seminars",
              highschoolPoints: 3.0,
              courseReference: "DH2632",
              grade: "B",
              date: "2018-06-27",
              courseLevel: "master"
            },
            {
              name: "Interaction Programming and the Dynamic Web",
              highschoolPoints: 7.5,
              courseReference: "DH2642",
              grade: "A",
              date: "2017-04-19",
              courseLevel: "master"
            },
            {
              name: "Multimodal Interaction and Interfaces",
              highschoolPoints: 7.5,
              courseReference: "DT2140",
              grade: "B",
              date: "2017-01-20",
              courseLevel: "master"
            },
            {
              name: "Human-computer Interaction: Principles and Design",
              highschoolPoints: 7.5,
              courseReference: "IC1007",
              grade: "C",
              date: "2016-12-21",
              courseLevel: "master"
            },
            {
              name: "Methodology of Interaction Design",
              highschoolPoints: 7.5,
              courseReference: "IC2005",
              grade: "B",
              date: "2017-01-16",
              courseLevel: "master"
            },
            {
              name: "Research Methodology and Scientific Writing",
              highschoolPoints: 7.5,
              courseReference: "II2202",
              grade: "A",
              date: "2017-02-06",
              courseLevel: "master"
            },
            {
              name: "Technology-based Entrepreneurship",
              highschoolPoints: 7.5,
              courseReference: "ME2062",
              grade: "A",
              date: "2017-06-27",
              courseLevel: "master"
            },
            {
              name: "Entrepreneurship for Engineers",
              highschoolPoints: 6.0,
              courseReference: "ME2072",
              grade: "A",
              date: "2017-01-0",
              courseLevel: "master"
            },
            {
              name: "Business Development Lab of Entrepreneurship Engineers",
              highschoolPoints: 9.0,
              courseReference: "ME2073",
              grade: "A",
              date: "2017-06-02",
              courseLevel: "master"
            },
            {
              name: "Summer Course- Entrepreneurship for Engineers",
              highschoolPoints: 4.0,
              courseReference: "ME2078",
              grade: "B",
              date: "2017-07-02",
              courseLevel: "master"
            }
          ]
        },
        {
          nameShort: "SU",
          nameLong: "Stockholm University",
          educationLevel: "University",
          schoolDescription: "",
          active: false,
          degrees: [],
          bachelorProgram: {
            name: "Business Administration",
            highschoolPoints: 180
          },
          courses: [
            {
              name: "Accounting I",
              highschoolPoints: 7.5,
              courseReference: "FE1403",
              grade: "E",
              date: "2018-11-02",
              courseLevel: "bachelor"
            },
            {
              name: "Marketing I",
              highschoolPoints: 7.5,
              courseReference: "FE1303",
              grade: "C",
              date: "2018-12-05",
              courseLevel: "bachelor"
            }
          ]
        },
        {
          nameShort: "ITBA",
          nameLong: "Instituto Tecnólogico de Buenos Aires",
          educationLevel: "University",
          schoolDescription: "",
          active: false,
          exchangeFrom: "KTH",
          courses: []
        },
        {
          nameShort: "VU",
          nameLong: "Villanova University",
          educationLevel: "University",
          schoolDescription: "",
          active: false,
          courses: []
        },
        {
          nameShort: "UNITN",
          nameLong: "University of Trento",
          educationLevel: "University",
          schoolDescription: "",
          active: false,
          exchangeFrom: "KTH",
          courses: []
        }
      ]
    };
  },
  computed: {
    getPointsPerSchool() {
      var array = [];
      this.education.forEach((school, index) => {
        var count = 0;
        school.courses.forEach(course => {
          count = count + course.highschoolPoints;
        });

        this.highschoolPoints[index] = count;
        this.chartOptions.labels[index] = school.nameShort;
        array[index] = {
          name: school.nameShort,
          highschoolPoints: count
        };
      });

      return array;
    },
    getAverageGrade() {
      var avg = [];

      this.education.forEach(school => {
        var score = 0;
        var possibleMaxScore = 0;

        school.courses.forEach(course => {
          possibleMaxScore = possibleMaxScore + course.highschoolPoints;

          switch (course.grade) {
            case "A":
              score = score + 5 * course.highschoolPoints;
              break;
            case "P":
              score = score + 5 * course.highschoolPoints;
              break;
            case "B":
              score = score + 4.5 * course.highschoolPoints;
              break;
            case "C":
              score = score + 4 * course.highschoolPoints;
              break;
            case "D":
              score = score + 3.5 * course.highschoolPoints;
              break;
            case "E":
              score = score + 3 * course.highschoolPoints;
              break;
          }
        });
        avg[school.nameShort] =
          Math.round((score / possibleMaxScore) * 10) / 10;
        this.averageGrade[school.nameShort] = score / possibleMaxScore;
      });
      return avg;
    },
    getAverageGradeForSchool(name) {
      return this.averageGrade[name];
    }
  },
  methods: {
    showInfo(index) {
      this.education.forEach(school => {
        school.active = false;
      });
      this.education[index].active = true;
    }
  },
  created() {
    this.getPointsPerSchool;
    this.getAverage;
  }
};
</script>

<style scoped>
.internationalPointsText {
  font-size: 12px;
  color: rgb(102, 102, 102);
  text-align: center;
}

.schoolDescription {
  color: white;
}

.schoolName {
  color: teal;
}

.flex {
  display: flex;
  justify-items: center;
}
</style>