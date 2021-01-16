import {
    metadata as activityBusinessSearchMetadata
} from './metadata.js';

// @TODO Re-export endpoint data from Airtable Base
// @TODO Review this data plan with team
// @TODO Remake autocomplete data array using new key.


/**
 * Publishing notes
 * We will provide API data from each dataset as plain records saved from Airtable. These JSON structures can be easily converted to CSV for having a data fallback in the event of a service outage in our data publishing pipeline.
 * 
 * The records & CSV data can be compiled into in-memory JSON objects that match the following dataset structures. These data items are fed into several web components. The metadata will refer to the sources.
 * Storage:
 * We can check payload size - we have the option to delivery a fully compiled JSON object with all options (good for search) a JSON blob per activity search type (good for creating landing pages). There are a limited number of very complex items, but otherwise it should not be too complex or very different from our current page in size. The list of PDF links for all languages needs to be available for all pages.
 * Our source data will be translated & stored back in Airtable. All fields have a Language attribute that's keyed to our list of languages.
 * @TODO research sources for What's Open translated data & pull into Airtable & test output with Content Design records
 * @TODO add schools, swimming pools and yoga-studios to Content Design Api for testing and validating the design of this data structure & rendering the related guidance
 * @TODO Make new web components
    * rendering the related guidance
    * rendering the language drop box
    * rendering the new accordion style
    * 
    * 
    BUILD PLAN:
    Finish aggregating the data sources into testable structure
    Build child web components without extra css in this web component scope
    Render the data from test data set
    Apply styles
    Add multilingual variants
    Add mobile variants
    Validate accessibility features

 */

const datasets = {
    "activity-business-search-data": {
        docs: activityBusinessSearchMetadata,
        data: null,
    },
    "state-industry-guidance": {
        pdf_links: null,
        industry_guidance_metadata: null,
        additional_resources: null,
    },
    "covid19-county-webpages": {

    },
    "countystatus": {

    },
    "rsho": {

    },
    "reopening-matrix-data": {

    }
}

// @TODO 
// Add api paths to data dictionary field definitions - can help with linking between CSV and JSON structures & also to make the content available for design iterations.

const reopeningRoadmapActivityData = {
    // Lookup Key: activity_search_key
    "activity-business-search-data": {
        docs: metadata,
        data: {
            '{{activity_key}}': {
                "activity_reference_key": "appliance-repair-shops",
                "activity_search_autocomplete": "Appliance repair shops",
                "activity_key": "appliance-repair-shops",
                "4 - WIDESPREAD": "Can open with modifications",
                "3 - SUBSTANTIAL": "Can open with modifications",
                "2 - MODERATE": "Can open with modifications",
                "1 - MINIMAL": "Can open with modifications",
                "RSHO": "Can open with modifications",
                "last_modified": "2021-01-15T09:40:00.000Z",
                "primary_guidance": "limited-services"
            },
        },
    },
    "state-industry-guidance": {
        '{{activity_key}}': {
            'primary_guidance': [{
                // Return each filtered set of responses, amended with null values for all fields, for the primary_guidance field.

                '{{industry_category_key}}': {
                    // This provides an optional message above the guidance.
                    guidance_metadata: {
                        "id": "rectSr3G0wRkqhI7Y",
                        "fields": {
                            "industry_category_key": "limited-services",
                            "date_last_modified": "2021-01-15T19:39:00.000Z",
                            "Language": "English",
                            "safer_economy_label": "Limited services",
                            "optional_message": null, // Airtable won't give null values so if field not found, set to null.
                        },
                        "createdTime": "2021-01-05T21:59:50.000Z"
                    },
                    // List of all guidance and checklist files returned by the API for this type of guidance.
                    guidance_pdf_links: [{
                            "id": "rec5FkNiLkuFZtyJ3",
                            "fields": {
                                "id": "checklist-limited-services--hy.pdf",
                                "filename": "checklist-limited-services--hy.pdf",
                                "git_pdf_template_type": "Checklist",
                                "industry_category_key": "limited-services",
                                "pdf_language": "Armenian",
                                "permalink": "https://files.covid19.ca.gov/pdf/checklist-limited-services--hy.pdf",
                                "git_date_updated": "2020-09-03 11:56:06 -0700", // File change, not publication date.
                                // "summary_of_changes": null,
                                // "accessibility_links": null,
                                // "pdf_publication_date": null,
                                "link_type": "PDF",
                            },
                            "createdTime": "2021-01-05T21:29:38.000Z"
                        },
                        {
                            "id": "rec5FkNiLkuFZtyJ3",
                            "fields": {
                                "id": "checklist-limited-services--hy.pdf",
                                "filename": "checklist-limited-services--hy.pdf",
                                "git_pdf_template_type": "Checklist",
                                "industry_category_key": "limited-services",
                                "pdf_language": "Armenian",
                                "permalink": "https://files.covid19.ca.gov/pdf/checklist-limited-services--hy.pdf",
                                "git_date_updated": "2020-09-03 11:56:06 -0700",
                                // "summary_of_changes": null,
                                // "accessibility_links": null,
                                // "pdf_publication_date": null,
                                "link_type": "PDF",
                            },
                            "createdTime": "2021-01-05T21:29:38.000Z"
                        },
                        {
                            "id": "recC3set9pcnseg5B",
                            "fields": {
                                "id": "checklist-limited-services--es.pdf",
                                "filename": "checklist-limited-services--es.pdf",
                                "git_pdf_template_type": "Checklist",
                                "industry_category_key": "limited-services",
                                "pdf_language": "Spanish",
                                "permalink": "https://files.covid19.ca.gov/pdf/checklist-limited-services--es.pdf",
                                "git_date_updated": "2020-09-03 11:56:06 -0700",
                                // "summary_of_changes": null,
                                // "accessibility_links": null,
                                // "pdf_publication_date": null,
                                "link_type": "PDF",
                            },
                            "createdTime": "2021-01-05T21:29:38.000Z"
                        },
                    ]
                },
                // If available, this provides an ordered list of links and/or text.
                // Render order should be sorted by order. If guidance and checklist are not correctly set, then alternatively we can render guidance, checklists and then additional-resources.
                guidance_additional_resources: [{
                    "id": "rectSr3G0wRkqhI7Y", // This is useful metadata information that can be used to traceback changes. Also default JSON output of Airtable.
                    "fields": {
                        "id": 21,
                        "related_guidance_industry_category_key": "limited-services",
                        "url": "https://www.cla-net.org/page/7-1",
                        "type": "additional-resource",
                        "file_title": "Resources for public libraries",
                        "order": 3,
                        "date_last_modified": "2021-01-15T09:44:00.000Z",
                        "message": "Example <a href=\"#\">content</a> with <strong>bold</strong> 2.\n",
                        "Language": "English"
                    },
                    "createdTime": "2021-01-05T21:59:50.000Z"
                }, ],

            }],
            'secondary_guidance': [{
                '{{industry_category_key}}': {
                    // guidance_metadata: null, // Same as primary guidance. The difference on the front end will be that guidance metadata and additional resources will be hidden. We need to review the prototype with all data to give a final confirmation that this system is good & finalize the field names.
                    guidance_pdf_links: null,
                    // guidance_additional_resources: null,
                    
                },
            }, ],
        },
    }
};





/**
 * 
covid19-industry-guidance-pdf-links.map 
by industry_category_key
return as industry_guidance_pdf_links
covid19-related-guidance-metadata.filter industry_category_keygrouped by guidance hierarchystate_guidance              messageprimary_guidance      pdf_links
          permalink          pdf_language          pdf_publication_date      guidance_metadata      additional_guidancesecondary_guidance      pdf_links      guidance_metadata      additional_guidance
> permalink> pdf_language> message > message_activity_search, message_related_guidance, message_additional_resources


 */