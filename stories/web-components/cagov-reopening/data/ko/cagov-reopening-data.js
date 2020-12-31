import countyCovid19Webpages from "./records/county-covid19-webpages.json";
import countyCovid19WebpagesApi from "./api_templates/county-covid19-webpages.api.json";

import countyStatus from "./records/countystatus.json";
import countyStatusApi from "./api_templates/countystatus.api.json";

import reopeningMatrixData from "./records/reopening-matrix-data-ko.json";
import reopeningMatrixDataApi from "./api_templates/reopening-matrix-data.api.json";

import reopeningRoadmapActivityDataPage1 from "./records/reopening-roadmap-activity-data-page-1.json";
import reopeningRoadmapActivityDataPage2 from "./records/reopening-roadmap-activity-data-page-2.json";
import reopeningRoadmapActivityDataApi from "./api_templates/reopening-roadmap-activity-data.api.json";

import rshoData from "./records/rsho.json";
import rshoApi from "./api_templates/rsho.api.json";
import { buildMultilingualDataObject } from "../buildMultilingualDataObject";

export const data = buildMultilingualDataObject({
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
    rshoData
})