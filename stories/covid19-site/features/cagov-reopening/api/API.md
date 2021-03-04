# API

This is a folder used to build and optimize datasets for this webcomponent.

## Scripts

* `buildAirtableJsonCsv.js` — Pull data from Airtable base & generate JSON and CSV files. This provides a data backup for the API which can be used as needed in the event of a service outage. Edit the CSV files in whatever tools makes sense, commit the updated data & run the data build script. CSV files can be reimported to Airtable to update.
* `buildStateIndustryGuidance.js` — Using exported JSON data, build a dataset that's used for What's Open and Industry Guidance pages.
* `buildStateIndustryGuidanceFigma.js` — Experimental: Export sample data for content design. (Note: At this time, JSONtoFigma works better with flatter datasets.)

## Templates
* We insert `meta` or `docs` content into each JSON file. This helps to provide context about the endpoints.