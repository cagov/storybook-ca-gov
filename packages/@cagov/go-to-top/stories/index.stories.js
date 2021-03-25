import { WebComponent } from "./storybook-web-component";
import { html } from "lit-html";

export default {
  title: "@cagov/Web components/go-to-top",
  argTypes: {
  },
  decorators: [],
  label : { control: { disable: true } },
  parentSelector : { control: { disable: true } },
};

const Template = (args) => WebComponent(args);

export const GoToTop = Template.bind({});
GoToTop.storyName = "Go To Top";
GoToTop.args = {
  label: "Top",
  parentSelector: "#main",
};

