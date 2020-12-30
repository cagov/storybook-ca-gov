import countyCovid19Webpages from "./records/county-covid19-webpages.json";
import countyCovid19WebpagesApi from "./api_templates/county-covid19-webpages.api.json";

import countyStatus from "./records/countystatus.json";
import countyStatusApi from "./api_templates/countystatus.json";

export const data = {
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
};