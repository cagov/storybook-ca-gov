import { withDesign } from "storybook-addon-designs";
import { data } from './data/cagov-reopening.js';
import { WebComponent } from './container';

let mockData = {
  Default: data
};

export default {
  title: 'covid19/cagov-reopening/web-component',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
  decorators: [withDesign]
};

const Template = (args) => WebComponent(args);

/**
* Connect mock data
*/
Template.args = {
    data: data,
};

export const CountyOnly = Template.bind({});
CountyOnly.args = {
  primary: true,
  label: 'Button',
};

/**
* Connect Figma Frame
*/
CountyOnly.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3815%3A0",
  },
};

export const CountyActivity = Template.bind({});
CountyActivity.args = {
  primary: true,
  label: 'Button',
};

/**
* Connect Figma Frame
*/
CountyActivity.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A168",
  },
};

export const ActivityOnly = Template.bind({});
ActivityOnly.args = {
  primary: true,
  label: 'Button',
};

/**
* Connect Figma Frame
*/
ActivityOnly.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A309",
  },
};
