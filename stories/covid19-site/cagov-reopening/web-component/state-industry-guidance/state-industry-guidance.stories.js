import { buildStateIndustryGuidanceCard as WebComponent } from './buildStateIndustryGuidanceCard';
import { data } from "./../../data";

// To hide controls:
// export const parameters = {
//   controls: { disabled: true },
// };

export default {
  title: 'covid19/cagov-reopening/State Industry Guidance',
};

// Hide some data from the controls display.
let argTypes = {
  stateIndustryGuidanceData : { control: { disable: true } },
  county : { control: { disable: true } },
  language : { control: { disable: true } },
};

const Template = (args) => WebComponent(args);

export const Agriculture = Template.bind({});
Agriculture.argTypes = argTypes;
Agriculture.args = {
    activityLabel: 'Agriculture and livestock',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "agriculture",
      "activity_search_autocomplete": "Agriculture and livestock",
      "override_industry_guidance_label": "",
      "activity_key": "agriculture",
      "4 - WIDESPREAD": "",
      "3 - SUBSTANTIAL": "",
      "2 - MODERATE": "",
      "1 - MINIMAL": "",
      "RSHO": "",
      "last_modified": "2021-03-02T00:55:00.000Z",
      "primary_guidance": "agriculture",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};

export const AmusementThemeParks = Template.bind({});
AmusementThemeParks.argTypes = argTypes;
AmusementThemeParks.args = {
    activityLabel: 'Amusement parks and theme parks',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "amusement-theme-parks",
      "activity_search_autocomplete": "Amusement parks and theme parks",
      "override_industry_guidance_label": "",
      "activity_key": "amusement-theme-parks",
      "4 - WIDESPREAD": "",
      "3 - SUBSTANTIAL": "",
      "2 - MODERATE": "",
      "1 - MINIMAL": "",
      "RSHO": "",
      "last_modified": "2021-03-02T02:15:00.000Z",
      "primary_guidance": "amusement-theme-parks",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": "retail, restaurants-bars-wineries"
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};

export const AutoRepairShops = Template.bind({});
AutoRepairShops.argTypes = argTypes;
AutoRepairShops.args = {
    activityLabel: 'Auto repair shops',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "auto-repair-shops",
      "activity_search_autocomplete": "Auto repair shops",
      "override_industry_guidance_label": "",
      "activity_key": "auto-repair-shops",
      "4 - WIDESPREAD": "Can open with modifications",
      "3 - SUBSTANTIAL": "Can open with modifications",
      "2 - MODERATE": "Can open with modifications",
      "1 - MINIMAL": "Can open with modifications",
      "RSHO": "Can open with modifications",
      "last_modified": "2021-03-02T02:03:00.000Z",
      "primary_guidance": "limited-services",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};

export const Childcare = Template.bind({});
Childcare.argTypes = argTypes;
Childcare.args = {
    activityLabel: 'Childcare',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "childcare",
      "activity_search_autocomplete": "Childcare",
      "override_industry_guidance_label": "",
      "activity_key": "childcare",
      "4 - WIDESPREAD": "Can open with modifications",
      "3 - SUBSTANTIAL": "Can open with modifications",
      "2 - MODERATE": "Can open with modifications",
      "1 - MINIMAL": "Can open with modifications",
      "RSHO": "Can open with modifications",
      "last_modified": "2021-03-02T02:03:00.000Z",
      "primary_guidance": "childcare, cohorts",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};

export const Cohorts = Template.bind({});
Cohorts.argTypes = argTypes;
Cohorts.args = {
    activityLabel: 'Cohorts for children and youth in supervised settings',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "cohorts",
      "activity_search_autocomplete": "Cohorts for children and youth in supervised settings",
      "override_industry_guidance_label": "",
      "activity_key": "cohorts",
      "4 - WIDESPREAD": "",
      "3 - SUBSTANTIAL": "",
      "2 - MODERATE": "",
      "1 - MINIMAL": "",
      "RSHO": "",
      "last_modified": "2021-03-02T00:55:00.000Z",
      "primary_guidance": "cohorts",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};

export const GymsFitnessCenters = Template.bind({});
GymsFitnessCenters.argTypes = argTypes;
GymsFitnessCenters.args = {
    activityLabel: 'Gyms and fitness centers',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "fitness",
      "activity_search_autocomplete": "Fitness",
      "override_industry_guidance_label": "Gyms and fitness centers",
      "activity_key": "fitness",
      "4 - WIDESPREAD": "",
      "3 - SUBSTANTIAL": "",
      "2 - MODERATE": "",
      "1 - MINIMAL": "",
      "RSHO": "",
      "last_modified": "2021-03-02T00:55:00.000Z",
      "primary_guidance": "fitness",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};

export const HotelsLodgingRentals = Template.bind({});
HotelsLodgingRentals.argTypes = argTypes;
HotelsLodgingRentals.args = {
    activityLabel: 'Gyms and fitness centers',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "hotels-lodging-rentals",
      "activity_search_autocomplete": "Hotels, lodging, and short-term lodging rentals",
      "override_industry_guidance_label": "",
      "activity_key": "hotels-lodging-rentals",
      "4 - WIDESPREAD": "",
      "3 - SUBSTANTIAL": "",
      "2 - MODERATE": "",
      "1 - MINIMAL": "",
      "RSHO": "",
      "last_modified": "2021-03-02T02:18:00.000Z",
      "primary_guidance": "hotels-lodging-rentals",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": "restaurants-bars-wineries, retail, fitness"
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};

export const SaunasSteamRooms = Template.bind({});
SaunasSteamRooms.argTypes = argTypes;
SaunasSteamRooms.args = {
    activityLabel: 'Saunas and steam rooms',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "saunas-steam-rooms",
      "activity_search_autocomplete": "Saunas and steam rooms",
      "override_industry_guidance_label": "Gyms and fitness, Hotels, lodging, and short-term lodging rentals, and Outdoor recreation, including campgrounds, playgrounds, and ski resorts",
      "activity_key": "saunas-steam-rooms",
      "4 - WIDESPREAD": "Closed",
      "3 - SUBSTANTIAL": "Closed",
      "2 - MODERATE": "Closed",
      "1 - MINIMAL": "Can open indoors with modifications<br>– +Saunas<br>– +Spas<br>– +Steam rooms<br>– Max 50% capacity",
      "RSHO": "Closed",
      "last_modified": "2021-03-02T02:03:00.000Z",
      "primary_guidance": "fitness, hotels-lodging-rentals, campgrounds-outdoor-recreation",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};

export const Schools = Template.bind({});
Schools.argTypes = argTypes;
Schools.args = {
    activityLabel: 'Schools',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "schools",
      "activity_search_autocomplete": "Schools",
      "override_industry_guidance_label": "",
      "activity_key": "schools",
      "4 - WIDESPREAD": "K-12th grade schools can reopen for in-person instruction in accordance with the <a href=\"https://schools.covid19.ca.gov/\">K-12 School Guidance</a>. K-6th grade schools may open once their county has a case rate of less than 25 cases per 100,00 (adjusted) and if schools have followed the other processes for school re-opening outlined in the guidance. Middle and high schools can open once the county is in the Substantial (red) tier and have also followed the school re-opening guidance. ",
      "3 - SUBSTANTIAL": "Schools may reopen fully for in-person instruction. Local school officials will decide whether and when that will occur.",
      "2 - MODERATE": "Schools may reopen fully for in-person instruction. Local school officials will decide whether and when that will occur.",
      "1 - MINIMAL": "Schools may reopen fully for in-person instruction. Local school officials will decide whether and when that will occur.",
      "RSHO": "–",
      "last_modified": "2021-03-02T02:03:00.000Z",
      "primary_guidance": "schools, cohorts, youth-sports",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};

export const SwimmingPools = Template.bind({});
SwimmingPools.argTypes = argTypes;
SwimmingPools.args = {
    activityLabel: 'Swimming pools',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "swimming-pools",
      "activity_search_autocomplete": "Swimming pools",
      "override_industry_guidance_label": "Gyms and fitness centers - Outdoor recreation, including campgrounds and playgrounds - Hotels and lodging",
      "activity_key": "swimming-pools",
      "4 - WIDESPREAD": "Can open outdoors with modifications. Drowning prevention classes, including swim lessons with certified instructors, are permitted indoors and outdoors.",
      "3 - SUBSTANTIAL": "Can open outdoors with modifications. Drowning prevention classes, including swim lessons with certified instructors, are permitted indoors and outdoors.",
      "2 - MODERATE": "Can open outdoors with modifications. Drowning prevention classes, including swim lessons with certified instructors, are permitted indoors and outdoors.",
      "1 - MINIMAL": "Can open outdoors with modifications. Drowning prevention classes, including swim lessons with certified instructors, are permitted indoors and outdoors.",
      "RSHO": "Can open outdoors with modifications. Drowning prevention classes, including swim lessons with certified instructors, are permitted indoors and outdoors.",
      "last_modified": "2021-03-02T02:03:00.000Z",
      "primary_guidance": "fitness, hotels-lodging-rentals, campgrounds-outdoor-recreation, swimming-pools",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};

export const YogaStudios = Template.bind({});
YogaStudios.argTypes = argTypes;
YogaStudios.args = {
    activityLabel: 'Yoga studios',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "yoga-studios",
      "activity_search_autocomplete": "Yoga studios",
      "override_industry_guidance_label": "",
      "activity_key": "yoga-studios",
      "4 - WIDESPREAD": "Can open outdoors only with modifications",
      "3 - SUBSTANTIAL": "Can open indoors with modifications<br>– Max 10% capacity",
      "2 - MODERATE": "Can open indoors with modifications<br>– Max 25% capacity<br>– +Indoor pools",
      "1 - MINIMAL": "Can open indoors with modifications<br>– +Saunas<br>– +Spas<br>– +Steam rooms<br>– Max 50% capacity",
      "RSHO": "Can open outdoors only with modifications",
      "last_modified": "2021-03-02T02:03:00.000Z",
      "primary_guidance": "fitness",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};

export const YouthSports = Template.bind({});
YouthSports.argTypes = argTypes;
YouthSports.args = {
    activityLabel: 'Youth and adult recreational sports',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "youth-sports",
      "activity_search_autocomplete": "Youth and adult recreational sports",
      "override_industry_guidance_label": "",
      "activity_key": "youth-sports",
      "4 - WIDESPREAD": "Some outdoor low-contact sports permitted. Higher-contact outdoor sports may be permitted, subject to additional requirements.&nbsp;<a href=\"https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/COVID-19/outdoor-indoor-recreational-sports.aspx\">See list</a>.",
      "3 - SUBSTANTIAL": "Some outdoor moderate-contact sports permitted. Higher-contact outdoor sports may be permitted, subject to additional requirements. <a href=\"https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/COVID-19/outdoor-indoor-recreational-sports.aspx\">See list</a>. ",
      "2 - MODERATE": "Some outdoor high-contact sports allowed, and some indoor low-contact sports permitted. <a href=\"https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/COVID-19/outdoor-indoor-recreational-sports.aspx\">See list</a>.",
      "1 - MINIMAL": "Some indoor moderate-contact sports allowed, and some indoor high-contact sports permitted. <a href=\"https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/COVID-19/outdoor-indoor-recreational-sports.aspx\">See list</a>.",
      "RSHO": "Outdoor physical conditioning and practice permitted with 6 feet of physical distancing from others.",
      "last_modified": "2021-03-02T02:03:00.000Z",
      "primary_guidance": "youth-sports",
      "secondary_guidance": "general-indoors, general-outdoors",
      "related_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "Get state industry guidance",
    primaryGuidanceLabel: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>.`,
    secondaryGuidanceLabel: `Depending on your business operations, other guidance may apply`,
    guidancePdfLabel: `Guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "",
    relatedGuidanceLabel: "Related guidance",
    resultType: "default",
    language: "en",
    expanded: true,
};
