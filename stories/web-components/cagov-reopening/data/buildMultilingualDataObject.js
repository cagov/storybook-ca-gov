// A mock data sample pulling in all the data used in the what's open search interface.
// @TODO port some examples of existing translated data (if available) into Airtable & export to have some more working samples.

export const buildMultilingualDataObject = ({
    countyRegionsData,
    countyRegionsApi,
    regionsClosedData,
    regionsClosedApi,
    reopeningActivitiesData,
    reopeningActivitiesApi,
    schoolsMayReopenData,
    schoolsMayReopenApi,
    tierStatusDescriptorsData,
    tierStatusDescriptorsApi,
    countyCovid19WebpagesApi,
    countyCovid19Webpages,
    countyStatusApi,
    countyStatus,
    reopeningMatrixDataApi,
    reopeningMatrixData,
    reopeningRoadmapActivityDataApi,
    reopeningRoadmapActivityDataPage1,
    reopeningRoadmapActivityDataPage2,
    rshoApi,
    rshoData,
    pubData,
    pubDataApi,
    stateIndustryGuidance, // These are already compiled in the new v2 format
    activitySearchBusiness, // These are already compiled in the new v2 format
    commonPageLabels,
    commonPageLabelsApi,
}) => {
    return  {
        content: "text",
        pubData: null, // @TODO What was this?
        "covid19-county-webpages": {
            docs: countyCovid19WebpagesApi,
            data: countyCovid19Webpages.records
        },
        "countystatus": {
            docs: countyStatusApi,
            data: countyStatus
        },
        "reopening-matrix-data": {
            docs: reopeningMatrixDataApi,
            data: reopeningMatrixData
        },
        "reopening-roadmap-activity-data": {
            docs: reopeningRoadmapActivityDataApi,
            data: Object.assign({}, reopeningRoadmapActivityDataPage1.records, reopeningRoadmapActivityDataPage2.records)
        },
        "rsho": {
            docs: rshoApi,
            data: rshoData
        },
        "pubData": {
            docs: pubDataApi,
            data: pubData
        },
        "countyregions": {
            docs: countyRegionsApi,
            data: countyRegionsData
        },
        "regionsclosed": {
            docs: regionsClosedApi,
            data: regionsClosedData
        },
        "reopening-activities": {
            docs: reopeningActivitiesApi,
            data: reopeningActivitiesData
        },
        "schools-may-reopen": {
            docs: schoolsMayReopenApi,
            data: schoolsMayReopenData
        },
        "tier-status-descriptors": {
            docs: tierStatusDescriptorsApi,
            data: tierStatusDescriptorsData
        },
        "activity-business-search-data": activitySearchBusiness,
        "state-industry-guidance": stateIndustryGuidance,
        "common-page-labels": {
            docs: commonPageLabelsApi,
            data: commonPageLabels
        }
    };
}