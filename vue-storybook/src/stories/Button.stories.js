import MyButton from "../components/Button.vue";

export default {
  title: "Study/Button",
  component: MyButton,
  tags: ["autodocs"], // docs 추가
  argTypes: {
    backgroundColor: {
      control: "select",
      options: ["green", "coral", "gray"],
      description: "버튼의 바탕색을 지정합니다.",
    },
    fontColor: {
      control: "color",
      description: "버튼의 글자색을 지정합니다.",
    },
    label: {
      control: "text",
      description: "버튼명을 작성합니다.",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "버튼의 크기를 결정합니다.",
    },
  },
};

export const Default = {
  args: {
    backgroundColor: "gray",
    fontColor: "white",
    label: "버튼",
    size: "medium",
  },
};

export const Green = {
  args: {
    backgroundColor: "green",
    fontColor: "fff",
    label: "초록버튼",
    size: "small",
  },
};

export const Coral = {
  args: {
    backgroundColor: "coral",
    fontColor: "fff",
    label: "분홍버튼",
    size: "small",
  },
};
