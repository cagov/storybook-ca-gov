import { withDesign } from "storybook-addon-designs";
import { WebComponent } from './storybook-web-component';
import { data } from "./data";
// console.log(data);

export default {
  title: 'covid19/cagov-reopening/Variants',
  argTypes: {
    // onClick: { action: 'onClick' },
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

export const CountyOnlyEn = Template.bind({});
CountyOnlyEn.args = {
  countyValue: 'Alameda',
  activityValue: 'Appliance repair shops',
  language: 'en',
  data: data['en'],
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

export const CountyActivityEn = Template.bind({});
CountyActivityEn.args = {
  language: 'en',
  data: data['en']
};

/**
* Connect Figma Frame
*/
CountyActivityEn.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A168",
  },
};

export const ActivityOnlyEn = Template.bind({});
ActivityOnlyEn.args = {
  language: 'en',
  data: data['en']
};

/**
* Connect Figma Frame
*/
ActivityOnlyEn.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A309",
  },
};