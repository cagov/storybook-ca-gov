import { buildStateIndustryGuidanceCard as WebComponent } from './buildStateIndustryGuidanceCard';
import { data } from "./../../data";

export default {
  title: 'covid19/cagov-reopening/State Industry Guidance',
};

const Template = (args) => WebComponent(args);

export const AutoRepairShops = Template.bind({});
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
      "last_modified": "2021-01-15T09:40:00.000Z",
      "primary_guidance": "limited-services",
      "secondary_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "See state industry guidance",
    guidanceTemplate: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>`,
    industryGuidancePdfLabel: `Industry guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "Depending on your business operations, other guidance may apply",
    resultType: "default",
    language: "en",
};

export const GymsFitnessCenters = Template.bind({});
GymsFitnessCenters.args = {
    activityLabel: 'Gyms and fitness centers',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "gyms-fitness-centers",
      "activity_search_autocomplete": "Gyms and fitness centers",
      "override_industry_guidance_label": "",
      "activity_key": "gyms-fitness-centers",
      "4 - WIDESPREAD": "Can open outdoors only with modifications",
      "3 - SUBSTANTIAL": "Can open indoors with modifications - Max 10% capacity - +Climbing walls",
      "2 - MODERATE": "Can open indoors with modifications - Max 25% capacity - +Indoor pools",
      "1 - MINIMAL": "Can open indoors with modifications  - +Saunas - +Spas - +Steam rooms - Max 50% capacity",
      "RSHO": "Can open outdoors only with modifications",
      "last_modified": "2021-01-15T09:40:00.000Z",
      "primary_guidance": "fitness",
      "secondary_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "See state industry guidance",
    guidanceTemplate: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>`,
    industryGuidancePdfLabel: `Industry guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "Depending on your business operations, other guidance may apply",
    resultType: "default",
    language: "en",
};

export const YogaStudios = Template.bind({});
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
      "3 - SUBSTANTIAL": "Can open indoors with modifications - Max 10% capacity",
      "2 - MODERATE": "Can open indoors with modifications - Max 25% capacity - +Indoor pools",
      "1 - MINIMAL": "Can open indoors with modifications  - +Saunas - +Spas - +Steam rooms - Max 50% capacity",
      "RSHO": "Can open outdoors only with modifications",
      "last_modified": "2021-01-15T09:40:00.000Z",
      "primary_guidance": "fitness",
      "secondary_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "See state industry guidance",
    guidanceTemplate: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>`,
    industryGuidancePdfLabel: `Industry guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "Depending on your business operations, other guidance may apply",
    resultType: "default",
    language: "en",
};

export const Schools = Template.bind({});
Schools.args = {
    activityLabel: 'Schools',
    county: null,
    stateIndustryGuidanceData: data["en"]["state-industry-guidance"].data,
    searchResultData: {
      "activity_reference_key": "schools",
      "activity_search_autocomplete": "Schools",
      "override_industry_guidance_label": "",
      "activity_key": "schools",
      "4 - WIDESPREAD": "-",
      "3 - SUBSTANTIAL": "-",
      "2 - MODERATE": "-",
      "1 - MINIMAL": "-",
      "RSHO": "-",
      "last_modified": "2021-02-18T01:17:00.000Z",
      "primary_guidance": "schools, cohorts, youth-sports",
      "secondary_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "See state industry guidance",
    guidanceTemplate: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>`,
    industryGuidancePdfLabel: `Industry guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "Depending on your business operations, other guidance may apply",
    resultType: "default",
    language: "en",
};


export const SwimmingPools = Template.bind({});
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
      "last_modified": "2021-02-18T01:17:00.000Z",
      "primary_guidance": "fitness, hotels-lodging-rentals, campgrounds-outdoor-recreation, swimming-pools",
      "secondary_guidance": ""
    },
    seeStateIndustryGuidanceLabel: "See state industry guidance",
    guidanceTemplate: `<span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span>`,
    industryGuidancePdfLabel: `Industry guidance for <span data-attribute="activityLabel"></span>`,
    checklistPdfLabel: `Checklist for <span data-attribute="activityLabel"></span>`,
    additionalGuidanceLabel: "Depending on your business operations, other guidance may apply",
    resultType: "default",
    language: "en",
};