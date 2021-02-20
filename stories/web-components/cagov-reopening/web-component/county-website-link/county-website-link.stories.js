import { buildCountyWebsiteLink as WebComponent } from './buildCountyWebsiteLink';
import { data } from "./../../data";

export default {
  title: 'covid19/cagov-reopening/County Website Link',
};

const Template = (args) => WebComponent(args);

export const Default = Template.bind({});
Default.args = {
    linkLabel: `Check <span data-attribute="county"></span>’s COVID-19 website`,
    county: "Alameda County",
    defaultUrl: "../get-local-information",
    language: "en",
    countyWebpages: data["en"]["covid19-county-webpages"].data,
};


export const NoData = Template.bind({});
NoData.args = {
  linkLabel: `Check <span data-attribute="county"></span>’s COVID-19 website`,
    county: "",
    defaultUrl: "../get-local-information",
    language: "en",
    countyWebpages: data["en"]["covid19-county-webpages"].data,
};

export const NotFoundData = Template.bind({});
NotFoundData.args = {
    linkLabel: `Check <span data-attribute="county"></span>’s COVID-19 website`,
    county: "California County",
    defaultUrl: "../get-local-information",
    language: "en",
    countyWebpages: data["en"]["covid19-county-webpages"].data,
};
