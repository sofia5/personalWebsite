<template>
  <div class="timeline">
    <TimelineEvent />
  </div>
</template>


<script>
import TimelineEvent from "../components/TimelineEvent.vue";

export default {
  name: "Timeline",
  components: {
    TimelineEvent
  }
};
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  color: white;
}

.timeline::after {
  content: "";
  position: absolute;
  width: 3px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
  z-index: -1;
}

@media screen and (max-width: 800px) {
  .timeline::after {
    left: 30px;
  }
}
</style>