import { buildStateIndustryGuidanceCard as WebComponent } from './buildStateIndustryGuidanceCard';
import { data } from "./../../data";

export default {
  title: 'covid19/cagov-reopening/State Industry Guidance',
};

const Template = (args) => WebComponent(args);

export const Default = Template.bind({});
Default.args = {
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
