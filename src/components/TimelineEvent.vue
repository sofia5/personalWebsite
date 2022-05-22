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


<script lang="ts">
import { defineComponent } from "vue";
import timelineEvents from "@/data/timelineEvents.json";
import TimelineEvent from "@/types/TimelineEvent";

export default defineComponent({
  name: "TimelineEvent",
  data() {
    return {
      windowWidth: 0,
      events: timelineEvents as TimelineEvent[],
    };
  },
  computed: {
    sortedEvents: function () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.events.sort(
        (a: TimelineEvent, b: TimelineEvent) =>
          Date.parse(b.date) - Date.parse(a.date)
      );
    },
  },
  methods: {
    getYear: (date: string) => {
      let d: Date = new Date(date);
      return d.getFullYear();
    },

    getMonth: (date: string) => {
      const MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      let d: Date = new Date(date);
      return MONTHS[d.getMonth()];
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
});
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