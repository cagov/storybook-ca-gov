/**
 * This template is based on the California Open Data handbook metadata publishing template.
 * https://handbook.data.ca.gov/wp-content/uploads/sites/262/2019/01/Publishing-Metadata-Template.pdf
 * Converted to JS to help document pre-published APIs used in front end interfaces.
 */

const metadata = {
   "Dataset Status": "DRAFTING",
   "Title": "Reopening Roadmap Activity Data",
   "Machine Readable Title": "reopening-roadmap-activity-data",
   "Version": "2.0.0",
   "Permalink": null,
   "Description": "COVID-19 reopening activity and business data sets, with references to related guidance files.",
   /**
   * Required
   *   - This is a plain English description that will display below the name of the data table.
       - Write a summary paragraph telling us what the data table contains. The first few sentences are key.
       - Include related legislation info if applicable.
       - Include acronyms that people might look for here, but avoid acronyms in your first few sentences.
   */
   "Tags": "covid19, Industry Guidance",
   /**
   * Required 
       - Descriptive keywords or phrases that users will search for to find your data resources.
       - Separate each keyword by commas.
       - Try to include at least five descriptive tags.
       - Both general and specific terms are useful.
       - Programs and acronyms, e.g. California State Library (CSL), can make finding your data resource easier.
   */
   "Groups": "Office of Digital Innovation, State of California https://ca.gov",
   /**
    * Required
       - Also known as the publisher
       - The agency, group, department, board, or commission that publishes the data resource.
       - Choose from the drop down list.
    */
   "Topics": "Economy and Demographics, COVID-19, Government, Health & Human Services",
   /**
    * Required
    *  - Also known as Category.
       - Choose the most appropriate topic from the current list at https://data.ca.gov.
    */
   "License": "Public Domain",
   /**
    * If-Applicable
    *  - Most often Public Domain.
    *  - Any restrictions on copying, sharing, using, etc. your data must be disclosed.
    */
   "Author": "covid19.ca.gov - Office of Digital Innovation, State of California",
   /**
    * Optional
       - The agency, group, department, board, or commission that authors the data resource and has ultimate responsibility for
       the creation of the data.
       - Will often but not always be the publisher of the data.
    */
   "Spatial | Geographic Coverage": "statewide",
   /**
    * If-Applicable
       - The geographical area the data table covers (e.g. statewide versus a sub-state region like the Bay Area).
       - Specification should include a named area and may include geographic coordinates.
    */
   "Frequency": "As needed",
   /**
    * Required 
       - How often do you intend to publish or update the data resource on Data.ca.gov?
       - E.g. Annually, quarterly, monthly.
    */
   "Temporal Coverage": "Started March 2020 until current day",
   /**
    * If-Applicable
       - Start date and End date for the data in your data resource.
    */
   "Granularity": null,
   /**
    * Optional
       - Tell us the most specific that data the in your resource gets.
       - Often measured in geography (county, census track) or time (monthly or daily data).
    */
   "Data Dictionary Type": "HTML",
   /**
    * Required
       - If the link below is not an HTML file, the file type for the data dictionary (most often a PDF).
    */
   "Data Dictionary": null,
   /**
    * @TODO Get link & link to Github
    * Required
       - HTML link to the data dictionary itself.
    */
   "Program Contact Name ": null,
   /**
         * @TODO Confirm
         * 
         * Required
         * - The specific group inside the agency, department, board or commission that produces the data that can best answer
questions about the data.
         */
   "Program Contact Email": null,
   /**
    * @TODO Confirm
    * 
    * Required
       - Enter a generic e-mail address for the program referrenced above. (e.g. answers@library.ca.gov )
    */
   "Public Access Level": null,
   /**
    * @TODO Not sure the category here, it's "Pre-Public"
    * 
    * @TODO This data set is in a beta prototyping stage. It is not currently published to the Open Data portal. Current up-to-date information lives at `https://covid19.ca.gov/industry-guidance` and `https://covid19.ca.gov/safer-economy`, with links to various datasets hosted on `https://files.covid19.ca.gov/`. Please see README for a full list of all data sets used in our search tool. Once published, the data and metadata will be publicly consumed by covid19.ca.gov. 
    * 
    * Required
    - Whether this info could ever be made public. (Public, Restricted, Non-Public)
    */
   "Rights": "No restrictions on public use",
   /**
    * Required
       - If you entered anything but Public above, you must explain any use restriction on the data.
       - Additionally, you can also include usage/research/collaboration instructions: Short text or link to a document that
       describes how the data can be used, research Ideas and/or possible collaborations based on this information that may
       interest external researchers.
       - If not applicable, please enter “No restrictions on public use”.
    */
   "Homepage URL": null,
   /**
    * @TODO This could go to our handbook
    * 
    * If-Applicable
       - URL for the page on your website that has useful information about the data resource or the group that updates it. It's a webpage where the user can download this and additional pertinent information.
    */
   "Data Standard": "JSON",
   /**
    * If-Applicable
       - This is used to identify a standardized specification the dataset conforms to. It’s recommended that this be a URI that serves as a unique identifier for the standard. The URI may or may not also be a URL that provides documentation of the
       specification.
       - A technical description of the data.
       - E.g. CSV, XML standards, SHP, or JSON.
    */
   "Language": "English",
   /**
    * @TODO Update this with the multi-lingual API data.
    * If-Applicable
       - Most often English.
    */
   "Additional Information": {
      /** @TODO This applies to reopening data set, our many other datasets are different */
      "Data Methodology": "Updated as information is made available or announced by the Governor's Office",
      "Documentation Template": "https://handbook.data.ca.gov/wp-content/uploads/sites/262/2019/01/Publishing-Metadata-Template.pdf"
   },
   /**
         * Optional
            - Additional information is a field that allows you to enter free form metadata in key-value pairs: a key, which is a unique identifier for some item of data, and the value, which is the data that is identified.
            - You must include at least two keys-value pairs: one with the “Limitations” key and one with the “Data_Methodology” key.
            - Limitations/Exclusions: Must include the following required text: “Use of this data is subject to the CA.gov Conditions of Use and any copyright and proprietary notices incorporated in or accompanying the individual files.”
            - This may be followed by a brief description of any limitations on these data or of exclusions to their use not
            otherwise covered above in "Rights".
            - Data Methodology: Short text or link to a document with explanation of the data collection methodology, which may
include survey tools, post-collection methods for control and cleaning and notes on sampling response and errors. This is
where you should document any known issues in using the data. May also be uploaded as an additional PDF.
         */
   "Related Content": null,
   /**
         * @TODO
         * Structure our links and references here.
         * Also helpful to create a diagram.
         * 
         * Optional
- Enter secondary source(s) info: If your data resource is partially made from other data sources, please give descriptive
name(s), and/or URLs, of resource(s) from which the data table is derived.
         */
}