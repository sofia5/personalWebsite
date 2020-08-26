<template>
  <div :class="{skillsButtonWrapperRight : right}">
    <div
      class="btn-group btn-group-toggle"
      data-toggle="buttons"
      v-for="(button, index) in buttons"
      :key="index"
    >
      <label
        class="skillsButton btn btn-sm"
        @click="changeActive(index)"
        :class="{ active: button.active == true}"
      >
        <input type="radio" />
        {{button.name}}
      </label>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "CVButton",
  props: ["buttons", "right"],
  methods: {
    changeActive(i) {
      this.buttons.forEach(button => {
        button.active = false;
      });
      this.buttons[i].active = true;
    }
  }
};
</script>

<style>
.skillsButtonWrapperRight {
  display: flex;
  justify-content: flex-end;
}

.skillsButton {
  border-radius: 0;
  border: none;
  background-color: rgb(83, 83, 83);
  color: white;
}

.active {
  background-color: gray;
}
</style>