import { WebComponent } from './web-component-container';

// import { data as dataAr } from './data/ar/data.js';
import { data as dataEn } from './data/en/data.js';
import { data as dataEs } from './data/es/data.js';
// import { data as dataKo } from './data/ko/data.js';
import { data as dataTl } from './data/tl/data.js';
// import { data as dataVi } from './data/vi/data.js';
// import { data as dataZhHans } from './data/zh-hans/data.js';
// import { data as dataZhHant } from './data/zh-hant/data.js';

// Build multi-lingual data object.
var data = {
//   "ar": dataAr,
  "en": dataEn,
  "es": dataEs,
//   "ko": dataKo,
  "tl": dataTl,
//   "vi": dataVi,
//   "zh-hans": dataZhHans,
//   "zh-hant": dataZhHant,
};


console.log("data", data);

let mockData = {
  Default: data
};

export default {
  title: 'd3-charts/cagov-county-map/web-component',
  argTypes: {
    onClick: { action: 'onClick' },
  },
  decorators: []
};

const Template = (args) => WebComponent(args);

/**
* Connect mock data
*/
Template.args = {
    data: data,
};

export const CountyMapEn = Template.bind({});
CountyMap.args = {
  language: 'en',
  data: data['en']
};
