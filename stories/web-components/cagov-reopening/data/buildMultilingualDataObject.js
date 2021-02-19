// A mock data sample pulling in all the data used in the what's open search interface.
// Used also to help us map & document the display data

export const buildMultilingualDataObject = ({
    countyRegionsData,
    countyRegionsApi,
    regionsClosedData,
    regionsClosedApi,
    // reopeningActivitiesData,
    // reopeningActivitiesApi,
    schoolsMayReopenData,
    schoolsMayReopenApi,
    tierStatusDescriptorsData,
    tierStatusDescriptorsApi,
    countyCovid19WebpagesApi,
    countyCovid19Webpages,
    countyStatusApi,
    countyStatus,
    // reopeningMatrixDataApi,
    // reopeningMatrixData,
    // reopeningRoadmapActivityDataApi,
    // reopeningRoadmapActivityDataPage1,
    // reopeningRoadmapActivityDataPage2,
    rshoApi,
    rshoData,
    // pubData,
    // pubDataApi,
    stateIndustryGuidance, // These are already compiled in the new v2 format
    activitySearchBusiness, // These are already compiled in the new v2 format
    commonPageLabels,
    commonPageLabelsApi,
}) => {
    return  {
        content: "text",

        // Recent County Tier Status
        "countystatus": {
            docs: countyStatusApi,
            data: countyStatus
        },
        // Not needed in search, used for reopening-matrix.njk
        // Leaving here in case design changes
        // "reopening-matrix-data": {
        //     docs: reopeningMatrixDataApi,
        //     data: reopeningMatrixData
        // },
        // Concatenate data from Airtable into one blob
        // Autocomplete search data
        // @TODO Not needed, can deprecate
        // "reopening-roadmap-activity-data": {
        //     docs: reopeningRoadmapActivityDataApi,
        //     data: Object.assign({}, reopeningRoadmapActivityDataPage1.records, reopeningRoadmapActivityDataPage2.records)
        // },

        // Labels  - trying to deprecate
        // "pubData": {
        //     docs: pubDataApi,
        //     data: pubData
        // },
        // Which regions counties belong to
        "countyregions": {
            docs: countyRegionsApi,
            data: countyRegionsData
        },
        // Which regions have school closings
        "regionsclosed": {
            docs: regionsClosedApi,
            data: regionsClosedData
        },
        // Which counties are currently under RSHO, if any
        "rsho": {
            docs: rshoApi,
            data: rshoData
        },
        // Original V1 dataset
        // "reopening-activities": {
        //     docs: reopeningActivitiesApi,
        //     data: reopeningActivitiesData
        // },
        // Schools can reopen in which counties
        // Pulls from table data, schools-may-reopen-in-these-counties.json
        // Which 11ty rewrites and returns as a simple array.
        "schools-may-reopen": {
            docs: schoolsMayReopenApi,
            data: schoolsMayReopenData
        },
        // What's open search data (data managed in Airtable)
        "activity-business-search-data": activitySearchBusiness,
        // PDF files and links for State Guidance (data managed in Airtable)
        "state-industry-guidance": stateIndustryGuidance,
        // Subset of Wordpress table data that includes schools may reopen labelling
        "common-page-labels": {
            docs: commonPageLabelsApi,
            data: commonPageLabels
        },
        // Data from Table 1 is used to build tier status cards.
        "tier-status-descriptors": {
            docs: tierStatusDescriptorsApi,
            data: tierStatusDescriptorsData
        },
        // County Health Department web pages
        "covid19-county-webpages": {
            docs: countyCovid19WebpagesApi,
            data: countyCovid19Webpages.records
        },
    };
}