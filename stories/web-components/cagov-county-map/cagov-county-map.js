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

export default {
  title: 'covid19/cagov-reopening/web-component',
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
