import { withDesign } from "storybook-addon-designs";
import { WebComponent, WebComponentSpanish } from './storybook-web-component';
import { data } from "./data";

export default {
  title: 'covid19/cagov-reopening/Variants',
  argTypes: {
    // onClick: { action: 'onClick' },
  },
  decorators: [withDesign]
};


const Template = (args) => WebComponent(args);
const TemplateSpanish = (args) => WebComponentSpanish(args);

/**
* Connect mock data
*/
Template.args = {
    data: data,
};

export const CountyOnlyEn = Template.bind({});
CountyOnlyEn.args = {
  countyValue: 'Alameda',
  activityValue: '',
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

export const CountyOnlyEs = TemplateSpanish.bind({});
CountyOnlyEs.args = {
  countyValue: 'San Francisco',
  activityValue: '',
  language: 'es',
  data: data['es'],
};
/**
* Connect Figma Frame
*/
// CountyOnlyEs.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3815%3A0",
//   },
// };

// export const CountyOnlyTl = Template.bind({});
// CountyOnlyEn.args = {
//   countyValue: 'Alameda',
//   activityValue: '',
//   language: 'tl',
//   data: data['tl'],
// };
// /**
// * Connect Figma Frame
// */
// CountyOnlyTl.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3815%3A0",
//   },
// };

// export const CountyOnlyAr = Template.bind({});
// CountyOnlyAr.args = {
//   countyValue: 'Alameda',
//   activityValue: '',
//   language: 'ar',
//   data: data['ar'],
// };
// /**
// * Connect Figma Frame
// */
// CountyOnlyAr.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3815%3A0",
//   },
// };

export const CountyActivityEn = Template.bind({});
CountyActivityEn.args = {
  countyValue: 'Alameda',
  activityValue: 'Appliance repair shops',
  language: 'en',
  data: data['en'],
};

/**
* Connect Figma Frame
*/
// CountyActivityEn.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A168",
//   },
// };

export const ActivityOnlyEn = Template.bind({});
ActivityOnlyEn.args = {
  countyValue: '',
  activityValue: 'Appliance repair shops',
  language: 'en',
  data: data['en'],
};

/**
* Connect Figma Frame
*/
// ActivityOnlyEn.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A309",
//   },
// };

export const NoCountyActivityEn = Template.bind({});
NoCountyActivityEn.args = {
  countyValue: '',
  activityValue: '',
  language: 'en',
  data: data['en'],
};

/**
* Connect Figma Frame
*/
// NoCountyActivityEn.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A309",
//   },
// };

export const SchoolsCountyEn = Template.bind({});
SchoolsCountyEn.args = {
  countyValue: 'Alameda',
  activityValue: 'Schools',
  language: 'en',
  data: data['en'],
};

/**
* Connect Figma Frame
*/
// SchoolsCountyEn.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A309",
//   },
// };

export const SchoolsNoCountyEn = Template.bind({});
SchoolsNoCountyEn.args = {
  countyValue: '',
  activityValue: 'Schools',
  language: 'en',
  data: data['en'],
};

/**
* Connect Figma Frame
*/
// SchoolsNoCountyEn.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A309",
//   },
// };


export const RSHOActivityCountyEn = Template.bind({});
RSHOActivityCountyEn.args = {
  countyValue: 'Yolo',
  activityValue: 'Aquariums',
  isUnderRSHO: true,
  language: 'en',
  data: data['en'],
};

/**
* Connect Figma Frame
*/
// RSHOActivityCountyEn.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A309",
//   },
// };

export const RSHOSchoolsCountyEn = Template.bind({});
RSHOSchoolsCountyEn.args = {
  countyValue: 'San Francisco',
  activityValue: 'Schools',
  isUnderRSHO: true,
  language: 'en',
  data: data['en'],
};

/**
* Connect Figma Frame
*/
// RSHOActivityCountyEn.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A309",
//   },
// };

export const RSHOSchoolsNoCountyEn = Template.bind({});
RSHOSchoolsNoCountyEn.args = {
  countyValue: '',
  activityValue: 'Schools',
  isUnderRSHO: true,
  language: 'en',
  data: data['en'],
};

/**
* Connect Figma Frame
*/
// RSHOActivityCountyEn.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/LrzsOu8U5KcMAjJTQ1O3BG/covid19.ca.gov-screens?node-id=3813%3A309",
//   },
// };