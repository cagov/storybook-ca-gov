import { WebComponent } from "./storybook-web-component";

export default {
  title: "@cagov/template",
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
