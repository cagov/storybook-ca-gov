import { withDesign } from "storybook-addon-designs";
import { WebComponent } from './container';

import { dataAr } from './data/ar/cagov-reopening.js';
import { dataEn } from './data/en/cagov-reopening.js';
import { dataEs } from './data/es/cagov-reopening.js';
import { dataKo } from './data/ko/cagov-reopening.js';
import { dataTl } from './data/tl/cagov-reopening.js';
import { dataVi } from './data/vi/cagov-reopening.js';
import { dataZhHans } from './data/zh-hans/cagov-reopening.js';
import { dataZhHant } from './data/zh-hant/cagov-reopening.js';

// Build multi-lingual data object.
var data {
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
