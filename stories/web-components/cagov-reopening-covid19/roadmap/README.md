# `CAGovReopening` Web Component Redesign

* Version: 2.0.0
* Status: Prototype

## Goal
Make it easier to find current guidance about how Californians can stay safe in their activities and businesses.

## Parts
1. Create a data & communication system to power an improved API to help publish & track State guidance about how Californians can stay safe in their activities and businesses.
2. Update the interface to the search tool we provide to help Californians find their guidance. In our user research, we learned that many businesses were struggling to find the guidance they needed, and we have prepared some new designs for improving how the search interface works.

### 1. County Status
`/src/js/roadmap/countystatus.json`
`/docs/countystatus.json`

### 2. NEW: Reopening Roadmap Activity Data, v2.0.0


### 3. NEW: Activity & Business data keys


### 4 NEW: County Public Health Department Covid-19 Webpages
`county-covid19-webpages.json`

### 5. Safer Economy Language Labels
`pubData[language.id].saferEconomyLang.Table1[0] | dump | escape` 

`/pages/wordpress-posts/reopening-roadmap-activity-data.json`
`safer-economy-lang.json`


### 6. countyregions
`pages/_data/countyRegion.json`
`/docs/countyregions.json`

### 7. regionsclosed
`pages/wordpress-posts/rsho.json`
`/docs/regionsclosed.json`

### 8. statusdescriptors
`/pages/wordpress-posts/reopening-matrix-data.json`
`/docs/statusdescriptors.json`

### 9. schools-may-reopen
`/pages/wordpress-posts/schools-may-reopen-in-these-counties.json`
`/docs/schools-may-reopen.json`
'schoolsList.Table1'

### 10. reopening activities
Streamlined version of reopening activities
`/pages/wordpress-posts/reopening-roadmap-activity-data.json`
`/docs/reopening-activities.json`

### 11. Tableau maps
@TODO disable for development

### 12. Markup page: `https://covid19.ca.gov/safer-economy`
: "What's open" page. Other colloquial names: "Safer Economy", "Roadmap", "Dimmer switch", "Blueprint"

### Page history
Started initially as a "What's Open" page, with statuses of business being "Open" or "Closed" by the Covid-19 web response team, part of the State of California's Office of Digital Innovation.

Over the course of the pandemic, the page has evolved to include search for businesses and activities, tier modifications, maps, supplementary industry guidance, and information about the Regional Stay at Home order.

Location in covid19 git repository
: /pages/wordpress-posts/safer-economy.html

