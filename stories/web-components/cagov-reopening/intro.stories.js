import { Meta, Story, Preview, Canvas } from "@storybook/addon-docs/blocks";
import { html } from "lit-html";
import CAGovReopening from "./web-component";
import { data } from "./data";
import { WebComponent } from "./storybook-web-component";

export default {
  title: 'covid19/cagov-reopening/intro',
};

export const Page = (args) => html`
  <div>
    <h2>County Only Search</h2>
    <p>Example documented with HTML</p>
    ${WebComponent(args)}
  </div>
`;

const Template = (args) => Page(args);

/**
* Connect mock data
*/
Template.args = {
    data: data,
};

export const CountyOnlyEn = Template.bind({});
CountyOnlyEn.args = {
  language: 'en',
  data: data['en']
};
/**
* Connect Figma Frame
*/
CountyOnlyEn.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3815%3A0",
  },
};
