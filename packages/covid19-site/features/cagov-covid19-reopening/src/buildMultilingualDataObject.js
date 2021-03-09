import countyCovid19WebpagesApi from "./api_templates/covid19-county-webpages.api.json";
import countyStatusApi from "./api_templates/countystatus.api.json";
import rshoApi from "./api_templates/rsho.api.json";
import countyRegionsApi from "./api_templates/countyregions.api.json";
import regionsClosedApi from "./api_templates/regionsclosed.api.json";
import schoolsMayReopenApi from "./api_templates/schools-may-reopen.api.json";
import tierStatusDescriptorsApi from "./api_templates/tier-status-descriptors.api.json";
import commonPageLabelsApi from "./api_templates/common-page-labels.api.json";

// A mock data sample pulling in all the data used in the what's open search interface.
// Used also to help us map & document the display data

export const buildMultilingualDataObject = ({
    countyStatus,
    countyRegionsData,
    regionsClosedData,
    rshoData,
    schoolsMayReopenData,
    commonPageLabels,
    tierStatusDescriptorsData,
    countyCovid19Webpages
}) => {
    return  {
        // content: "text",
        // Recent County Tier Status
        "countystatus": {
            meta:  countyStatusApi,
            data: countyStatus
        },
        // Not needed in search, used for reopening-matrix.njk
        // Leaving here in case design changes
        // "reopening-matrix-data": {
        //     meta: reopeningMatrixDataApi,
        //     data: reopeningMatrixData
        // },
        // Which regions counties belong to
        "countyregions": {
            meta: countyRegionsApi,
            data: countyRegionsData
        },
        // Which regions have school closings
        "regionsclosed": {
            meta: regionsClosedApi,
            data: regionsClosedData
        },
        // Which counties are currently under RSHO, if any
        "rsho": {
            meta: rshoApi,
            data: rshoData
        },
        // Schools can reopen in which counties
        // Pulls from table data, schools-may-reopen-in-these-counties.json
        // Which 11ty rewrites and returns as a simple array.
        "schools-may-reopen": {
            meta: schoolsMayReopenApi,
            data: schoolsMayReopenData
        },
        // What's open search data (data managed in Airtable)
        "activity-business-search-data": activitySearchBusiness,
        // PDF files and links for State Guidance (data managed in Airtable)
        "state-industry-guidance": stateIndustryGuidance,
        // Subset of Wordpress table data that includes schools may reopen labelling
        "common-page-labels": {
            meta: commonPageLabelsApi,
            data: commonPageLabels
        },
        // Data from Wordpress Data Table 1 is used to build tier status cards.
        "tier-status-descriptors": {
            meta: tierStatusDescriptorsApi,
            data: tierStatusDescriptorsData
        },
        // County Health Department web pages
        // Data managed in Airtable
        "covid19-county-webpages": {
            meta: countyCovid19WebpagesApi,
            data: countyCovid19Webpages.records
        },
    };
}