# ca.gov Storybook

An instance of [Storybook JS](https://storybook.js.org/) intended for developing & documenting reusable web components for ca.gov projects.

* [ca.gov Storybook](https://wonderful-plant-07a82e81e.azurestaticapps.net)
* [The California Design Handbook](https://cagov.github.io/covid19.ca.gov-site-handbook/)

## Projects

These projects come from our current covid19.ca.gov team projects:

* Updating the `covid19.ca.gov/safer-economy` search component to use a new data source & initiate a redesign effort.
* Convert d3 charts from `covid19.ca.gov/equity` into reusable components & use this tool as a reference for teaching how to generate performant, accessible & translatable SVG-based interactive charts using d3.

### covid19.ca.gov

* `cagov-accordion` — A re-usable, accessible, performant accordion component.
* `cagov-reopening` — An prototype of an interface for the covid19.ca.gov page.

### d3 Charts

Performant, translatable & accessible charts with d3.js

* `hello-chart` — A simple instance of d3 code in a web component.
* `cagov-county-map` — A web component for a fully configured chart with county regions highlighted, multilingual datasets and chart labels.

## About Storybook
"Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient."

"Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

Use Storybook to build small atomic components and complex pages in your web application. If it's a UI, you can build it with Storybook.

Storybook helps you document components for reuse and automatically visually test your components to prevent bugs. Extend Storybook with an ecosystem of addons that help you do things like fine tune responsive layouts or verify accessibility.

Storybook integrates with most popular JavaScript UI frameworks and (experimentally) supports server-rendered component frameworks such as Ruby on Rails.
"

## How we are using Storybook
Storybook is a tool that allows developers to share, test and document web components.

Storybook add-ons allow:

* unit testing of variations
* a11y accessibility checks

Storybook encourages a few development practices which can be beneficial for public coding:

1. Sharing the story up-front.
2. Setting up and declaring inputs and outputs early in the process.
3. Connecting and documenting data sources.
4. Describing variants based on interaction states (e.g. toggle buttons or component responses to interaction, such as selecting a county.)
5. Integrated with a test framework: demonstrate & test web component variants in a transparent way for teams.

## About this version of Storybook
This instance of Storybook is an intial pilot into using Storybook for ca.gov web efforts.

We will begin with a few current projects to configure the tool & then will decide on how we version development of the components as needed.

This instance of Storybook support _*web components*_.

## Learn more about Storybook

* [About using Storybook web-components](https://storybook.js.org/docs/web-components/get-started/introduction)
* [Component Driven User Interfaces](https://www.componentdriven.org/)

## Data documentation and content modelling
An example of building data for Storybook stories can be found in the [API Notebook](https://github.com/cagov/storybook-ca-gov/stories/web-components/cagov-reopening/api-notebook/README.md) for our redesign effort for the search tool on the covid19.ca.gov [Safer Economy](https://covid19.ca.gov/safer-economy) page. This includes our in-progress development work with metadata and data dictionary templates, along with building multilingual test data. Additional information about this approach will live in [The California Design Handbook](https://cagov.github.io/covid19.ca.gov-site-handbook/).

## Configuration notes
This instance of Storybook is configured with the following:

* Core [@storybook/web-components](https://www.npmjs.com/package/@storybook/web-components) 6.1.11

### Add-ons

* storybook-addon-designs
* @storybook/addon-a11y
* @storybook/addon-viewport
* @storybook/addon-storyshots

Next: [Setup](SETUP.md)
