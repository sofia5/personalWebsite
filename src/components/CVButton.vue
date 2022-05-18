<template>
  <div :class="{ skillsButtonWrapperRight: right }">
    <div
      class="btn-group btn-group-toggle"
      data-toggle="buttons"
      v-for="(button, index) in buttons"
      :key="index"
    >
      <label
        class="skillsButton btn btn-sm"
        @click="changeActive(index)"
        :class="{ active: button.active == true }"
      >
        <input type="radio" />
        {{ button.name }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
  methods: {
    changeActive(i: number): void {
      this.buttons.map((button: any, index: number) =>
        index == i ? (button.active = true) : (button.active = false)
      );
    },
  },
})
export default class CVButton extends Vue {}

// export default {
//   name: "CVButton",
//   props: ["buttons", "right"],
//   methods: {
//     changeActive(i: number): void {
//       this.buttons.map((button, index) =>
//         index == i ? (button.active = true) : (button.active = false)
//       );
//     },
//   },
// };
</script>

<style scoped>
.skillsButtonWrapperRight {
  display: flex;
  justify-content: flex-end;
}

.skillsButton {
  border-radius: 0;
  border: rgb(26 26 26) solid 1px;
  border-bottom: rgb(16, 16, 16) solid 5px;
  bottom: -1px;
  color: white;
}

.active {
  border-bottom: #28a745 solid 2px;
}
</style>