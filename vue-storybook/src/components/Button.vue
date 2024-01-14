<template>
  <button type="button" :class="classes" :style="style">
    {{ label }}
  </button>
</template>

<script>
import "../stories/button.css";
import { reactive, computed } from "vue";

export default {
  name: "MyButton",

  props: {
    backgroundColor: {
      type: String,
    },
    fontColor: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
  },
  setup(props) {
    props = reactive(props);
    console.log(props);
    return {
      classes: computed(() => ({
        "storybook-button": true,
        [`button-color--${props.backgroundColor || "gray"}`]: true,
        [`storybook-button--${props.size || "medium"}`]: true,
      })),
      style: computed(() => ({
        // backgroundColor: props.backgroundColor,
        color: props.fontColor,
      })),
    };
  },
};
</script>
