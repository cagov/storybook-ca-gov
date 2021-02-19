# Reopening Roadmap Activity Data, Developer Cheat Sheet

## Links & Urls

* [Storybook](https://wonderful-plant-07a82e81e.azurestaticapps.net/?path=/story/covid19-cagov-reopening-intro--page)

---

## Development
TBD

### Working Branch

* `2021-02-08/reopening`

---

## Content

### Edit markup

* [Safer Economy page in Wordpress]()
* [Industry Guidance page in Wordpress]()

### Content
TBD

### Translations
TBD

### Web component embed code

We insert this code snippet on Wordpress pages.

* The code snippet can be updated on page markup to provide translated strings.
* A `data-json` object is also passed into the component. 

```
  data: data['en']



`

```
    <cagov-reopening 
      data-json=${JSON.stringify(data)}
    >
      <ul>
        <li data-label="presetValueCounty"></li>
        <li data-label="presetValueActivity"></li>
        <li data-label="title">Find the status for activities in your county</li>
        <li data-label="activityLabel">Activity</li>
        <li data-label="activityPlaceholder">Enter a business or activity</li>
        <li data-label="countyLabel">County</li>
        <li data-label="countyPlaceholder">Enter county</li>
        <li data-label="buttonText">Get latest risk levels</li>
        <li data-label="clearText">Clear</li>
        <li data-label="seeGuidanceText">See guidance for</li>
        <li data-label="countyRestrictionsAdvice">Counties can restrict further.</li>
        <li data-label="countyRestrictionsCountyWebsiteLabel">Check <span data-attribute="county"></span>’s COVID-19 website</li>
        <li data-label="understandTheData">Understand the data.</li>
        <li data-label="understandTheDataLink">#county-status</li>
        <li data-label="regionLabel">Region:</li>
        <li data-label="seeStateIndustryGuidanceLabel">See state industry guidance</li>
        <li data-label="guidanceTemplate"><span data-attribute="activityLabel"></span> must follow guidance for <span data-attribute="guidances"></span></li>
        <li data-label="industryGuidancePdfLabel">Industry guidance for <span data-attribute="activityLabel"></span></li>
        <li data-label="industryGuidancePdfLabel">Industry guidance for <span data-attribute="activityLabel"></span></li>
        <li data-label="checklistPdfLabel">Checklist for <span data-attribute="activityLabel"></span></li>
        <li data-label="additionalGuidanceLabel">Depending on your business operations, other guidance may apply</span></li>
        <li data-label="emptySearchError">No County or Activity Selected</li>
        <li data-label="enterMoreCharacters">Type 2 or more characters for results.</li>
      </ul>
    </cagov-reopening>
```

---

## Data

### Web component configuration

---

## Design

### Design Files

### Which design is which web component?

### Web components

---

## Data 

### Data source

### Update frequency

### Who to contact if the data breaks?

### Datasets

### `meta`

### Review data & process

### Data suppression policy

### Data Methodology & Processing Notes

### Data pipeline

### Data Dictionary

### Databases

### Queries

### Fields

