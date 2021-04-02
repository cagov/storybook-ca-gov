import { WebComponent } from "./storybook-web-component";

export default {
  title: "@cagov/go-to-top",
  argTypes: {
  },
  decorators: [],
};

const Template = (args) => WebComponent(args);

export const GoToTop = Template.bind({});
GoToTop.storyName = "Go To Top";
GoToTop.args = {
  hideAfter: 7000,
  label: "Top",
};

