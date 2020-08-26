<template>
  <div>
    <svg width="400" height="30">
      <path
        :class="[skillLevel >= 1 ? 'active' : 'notActive']"
        d="M 0 0 M 10 0 A 2 1 0 0 0 10 10 M 10 10 L 80 10 L 80 0 L 10 0"
      />
      <rect :class="[skillLevel >= 2 ? 'active' : 'notActive']" width="80" height="10" x="82" />
      <rect :class="[skillLevel >= 3 ? 'active' : 'notActive']" width="80" height="10" x="164" />
      <rect :class="[skillLevel >= 4 ? 'active' : 'notActive']" width="80" height="10" x="246" />
      <path
        :class="[skillLevel >= 5 ? 'active' : 'notActive']"
        d="M 398 10 A 2 1 0 0 0 398 0 L 328 0 L 328 10"
        fill="rgba(0,0,255)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "SkillsCategoriesChart",
  props: ["skillLevel"]
};
</script>

<style scoped>
.active {
  fill: rgba(0, 0, 255);
}

.notActive {
  fill: rgba(40, 40, 40);
}
</style>