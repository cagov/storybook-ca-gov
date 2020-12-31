import { withDesign } from "storybook-addon-designs";
import { WebComponent } from './web-component-container';

import { data as dataAr } from './data/ar/cagov-reopening-data.js';
import { data as dataEn } from './data/en/cagov-reopening-data.js';
import { data as dataEs } from './data/es/cagov-reopening-data.js';
import { data as dataKo } from './data/ko/cagov-reopening-data.js';
import { data as dataTl } from './data/tl/cagov-reopening-data.js';
import { data as dataVi } from './data/vi/cagov-reopening-data.js';
import { data as dataZhHans } from './data/zh-hans/cagov-reopening-data.js';
import { data as dataZhHant } from './data/zh-hant/cagov-reopening-data.js';

// Build multi-lingual data object.
var data = {
  "ar": dataAr,
  "en": dataEn,
  "es": dataEs,
  "ko": dataKo,
  "tl": dataTl,
  "vi": dataVi,
  "zh-hans": dataZhHans,
  "zh-hant": dataZhHant,
};

let mockData = {
  Default: data
};

console.log(data);

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
