const fs = require("fs");

const componentPath =
  "./stories/web-components/cagov-reopening";

// Get static API files
const activityBusinessDataPath =
  `${componentPath}/api/auto-generated-data/json/data-covid19-activity-business-search-data.json`;
const guidanceFilePath =
`${componentPath}/api/auto-generated-data/json/data-covid19-state-industry-guidance.json`;

const outputDataPath = `${componentPath}/data`;
const storyPaths = {
  ar: `${outputDataPath}/ar/records/data-covid19-state-industry-guidance.json`,
  en: `${outputDataPath}/en/records/data-covid19-state-industry-guidance.json`,
  es: `${outputDataPath}/es/records/data-covid19-state-industry-guidance.json`,
  ko: `${outputDataPath}/ko/records/data-covid19-state-industry-guidance.json`,
  tl: `${outputDataPath}/tl/records/data-covid19-state-industry-guidance.json`,
  vi: `${outputDataPath}/vi/records/data-covid19-state-industry-guidance.json`,
  "zh-hans": `${outputDataPath}/zh-hans/records/data-covid19-state-industry-guidance.json`,
  "zh-hant": `${outputDataPath}/zh-hant/records/data-covid19-state-industry-guidance.json`,
};

let activityBusinessData = fs.readFileSync(activityBusinessDataPath);
let guidanceData = fs.readFileSync(guidanceFilePath);

Object.keys(storyPaths).map((language_code) => {
  fs.writeFile(
    `${storyPaths[language_code]}`,
    guidanceFilePath,
    function (err) {
      if (err) return console.log(err);
      console.log(
        `Update mock data: data-covid19-state-industry-guidance.json`
      );
    }
  );
});
