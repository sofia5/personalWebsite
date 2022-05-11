<template>
  <div class="container-fluid">
    <div
      class="row h-50"
      v-for="(event, index) in sortedEvents"
      :key="event.id"
    >
      <!-- LEFT SIDE -->
      <div class="eventTextLeft" v-if="windowWidth > 800">
        <div v-if="index % 2 == 0">
          <h5 v-if="event.eventSize == 'big'" class="eventDateTeal">
            {{ getYear(event.date) + " " + getMonth(event.date) }}
          </h5>
          <h5 v-else class="eventDate">
            {{ getYear(event.date) + " " + getMonth(event.date) }}
          </h5>
          <p class="inline">{{ event.text }}</p>
          <i
            class="inline"
            v-if="event.icon != undefined"
            :class="event.icon + ' paddingLeft'"
          ></i>
        </div>
      </div>

      <!-- CENTER -->
      <div class="center">
        <svg height="60" width="60">
          <circle
            v-if="event.eventSize == 'big'"
            cx="30"
            cy="30"
            r="15"
            stroke="rgb(16, 16, 16)"
            stroke-width="5"
            fill="#00cccc"
          />
          <circle
            v-else
            cx="30"
            cy="30"
            r="10"
            stroke="rgb(16, 16, 16)"
            stroke-width="5"
            fill="white"
          />
        </svg>
      </div>

      <!-- RIGHT SIDE -->
      <div class="eventTextRight">
        <div v-if="index % 2 != 0 || windowWidth <= 800">
          <h5 v-if="event.eventSize == 'big'" class="eventDateTeal">
            {{ getYear(event.date) + " " + getMonth(event.date) }}
          </h5>
          <h5 v-else class="eventDate">
            {{ getYear(event.date) + " " + getMonth(event.date) }}
          </h5>
          <p class="inline">{{ event.text }}</p>
          <i
            class="inline"
            v-if="event.icon != undefined"
            :class="event.icon + ' paddingLeft'"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "TimelineEvent",
  data() {
    return {
      windowWidth: 0,
      events: [
        {
          id: 0,
          date: "1993-07-06T00:00:00.000Z",
          text: "Born",
          icon: "fas fa-baby",
          eventSize: "small",
        },
        {
          id: 1,
          date: "2012-09-01T00:00:00.000Z",
          text: "Moved to the US to attend Villanova University after having received the Dr. Peter Wallenberg scholarship. I lived there for almost a year studying Liberal Arts, and learned all about the American student life. It was the first time away from home, so a huge moment in my life.",
          eventSize: "big",
        },
        {
          id: 2,
          date: "2014-03-25T00:00:00.000Z",
          text: "Coupled up with the love of my life.",
          icon: "fas fa-heart",
          eventSize: "big",
        },
        {
          id: 3,
          date: "2015-09-01T00:00:00.000Z",
          text: "Did an exchange program via KTH, and moved to Buenos Aires, Argentina to study at Instituto Technologico de Buenos Aires (ITBA). What I loved the most was how diverse and beautiful Argentina is as a country, from glaciars in the south to jungle and salt deserts in the north",
          eventSize: "small",
        },
        {
          id: 4,
          date: "2018-07-01T00:00:00.000Z",
          text: "Graduated from KTH (and EIT Digital) with a bachelor in IT Engineering and a master in Human-Computer Interactions.",
          icon: "fas fa-graduation-cap",
          eventSize: "big",
        },
        {
          id: 5,
          date: "2016-06-01T00:00:00.000Z",
          text: "Went to India for 3 weeks with a project group at KTH called FocusOn. We visited companies (Swedish and Indian) and other cool places like Taj Mahal.",
          eventSize: "small",
        },
        {
          id: 6,
          date: "2018-09-01T00:00:00.000Z",
          text: 'Started my first "real" job as a trainee in SEB\'s International Trainee Program.',
          eventSize: "small",
        },
        {
          id: 7,
          date: "2017-09-01T00:00:00.000Z",
          text: "Moved for the third time abroad to study. This time to Italy. For a couple of months my life was full hiking adventures, romance and my mouth was full of deliciouosness.",
          eventSize: "small",
        },
        {
          id: 8,
          date: "2012-07-01T00:00:00.000Z",
          text: "Completed the Nijmegen march with Försvarsmakten in the Netherlands. We walked 16km in 4 days.",
          icon: "fas fa-shoe-prints",
          eventSize: "small",
        },
        {
          id: 9,
          date: "2007-09-01T00:00:00.000Z",
          text: "Started my first job, as a commercial postman. Being only 14 years old this meant a lot more $ every month",
          eventSize: "small",
        },
        {
          id: 10,
          date: "2011-12-24T00:00:00.000Z",
          text: "As part of my high-school project, me and one of my closest friends decided to travel to Guilin, China and volunteer at a school. There we made a comparison between the Chinese and Swedish school systems.",
          eventSize: "small",
        },
        {
          id: 11,
          date: "2009-06-01T00:00:00.000Z",
          text: "My first time travelling without my parents. Also, my first time on a plane (except for Legoland). The destination was Bangkok, Thailand and I spent 3 days there.",
          eventSize: "small",
        },
        {
          id: 12,
          date: "2020-03-01T00:00:00.000Z",
          text: "COVID-19 came, making life less exciting",
          eventSize: "small",
        },
        {
          id: 13,
          date: "2017-07-01T00:00:00.000Z",
          text: "Attended a summer school in Antibes on the France Riviera. Lots of sun, ice-cream and studies on digital cities",
          eventSize: "small",
        },
        {
          id: 14,
          date: "2019-03-01T00:00:00.000Z",
          text: "Still with the trainee program at SEB, I got to work abroad - going to many places in Europe with other trainees, and to Luxembourg and Kuala Lumpur alone for a longer stay.",
          eventSize: "small",
        },
        {
          id: 15,
          date: "2011-06-01T00:00:00.000Z",
          text: "This summer I had no plans, and decided to apply for a summer program with the military youth at F7 Såtenås. I got to fly airplanes (Hercules and a glider), met people from across Sweden and had to endure variuos challenging moments. In many ways this changed me and what I wanted to do in life. One realisation was that I wanted to become a military helicopter pilot - but this dream is still a Todo.",
          eventSize: "small",
        },
        {
          id: 16,
          date: "2013-09-01T00:00:00.000Z",
          text: 'Coincidentally ended up at KTH after my year in the US. Mostly to have something to do while considering other plans. At that time I didn\'t know that IT was "computer studies", but it got me stuck for 5 years and I found out programming & tech were unknown passions.',
          eventSize: "small",
        },
        {
          id: 17,
          date: "1995-05-04T00:00:00.000Z",
          text: "Got a baby brother",
          icon: "fas fa-baby",
          eventSize: "small",
        },
        {
          id: 18,
          date: "2022-03-01T00:00:00.000Z",
          text: "Started working as a consultant at Codelabs with a specialization in frontend / fullstack.",
          eventSize: "small",
        },
      ],
    };
  },
  computed: {
    sortedEvents: function () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.events.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
  methods: {
    getYear: (date) => {
      var d = new Date(date);
      return d.getFullYear();
    },

    getMonth: (date) => {
      const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
      };

      var d = new Date(date);
      return months[d.getMonth()];
    },
  },
  created() {
    this.windowWidth = window.innerWidth;
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
};
</script>

<style scoped>
.row {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
}

.eventTextLeft {
  text-align: right;
  flex: 2;
}

.center {
  flex: 1;
  text-align: center;
}

.eventTextRight {
  flex: 2;
}

.eventDateTeal {
  color: #00cccc;
}

.eventDate {
  color: #7e7e7e;
}

.inline {
  display: inline;
}

.paddingLeft {
  padding-left: 10px;
}

@media all and (max-width: 800px) {
  .row {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 20px;
  }

  .center {
    flex: 0;
    margin-right: 30px;
  }
}
</style>