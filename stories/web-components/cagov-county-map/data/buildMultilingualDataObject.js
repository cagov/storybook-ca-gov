export const buildMultilingualDataObject = ({
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
    pubDataApi
}) => {
    return  {
        content: "text",
        pubData: null, // @TODO What was this?
        "county-covid19-webpages": {
            api: countyCovid19WebpagesApi,
            records: countyCovid19Webpages.records
        },
        "countystatus": {
            api: countyStatusApi,
            records: countyStatus
        },
        "reopening-matrix-data": {
            api: reopeningMatrixDataApi,
            records: reopeningMatrixData
        },
        "reopening-roadmap-activity-data": {
            api: reopeningRoadmapActivityDataApi,
            records: Object.assign({}, reopeningRoadmapActivityDataPage1.records, reopeningRoadmapActivityDataPage2.records)
        },
        "rsho": {
            api: rshoApi,
            records: rshoData
        },
        "pubData": {
            api: pubData,
            records: pubData
        }
    };
}