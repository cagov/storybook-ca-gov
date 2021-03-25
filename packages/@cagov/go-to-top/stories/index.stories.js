import { WebComponent } from "./storybook-web-component";
import { html } from "lit-html";

export default {
  title: "@cagov/Web components/go-to-top",
  argTypes: {
  },
  decorators: [],
};

const Template = (args) => WebComponent(args);

export const GoToTop = Template.bind({});
GoToTop.storyName = "Go To Top";
GoToTop.args = {
  label: "Top",
  domain: "covid19.ca.gov",
  parentSelector: "#main",
};

