import { WebComponent } from "./storybook-web-component";
import { html } from "lit-html";

export default {
  title: "@cagov/Web components/web-component-template",
  argTypes: {
  },
  decorators: [],
};

const Template = (args) => WebComponent(args);

export const BasicWebComponent = Template.bind({});
BasicWebComponent.storyName = "Basic Web Component";
BasicWebComponent.args = {
    content: "Replace content"
};
