# CA.GOV Storybook

An instance of [Storybook](https://storybook.js.org/) intended for developing sharable web components.

[Staging site](https://wonderful-plant-07a82e81e.azurestaticapps.net)

## Projects

### Covid19
* CaGovReopening

### Charts - Performant, translatable & accessible charts with d3
* TBD

## About Storybook
"Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient."

Storybook is a tool that allows developers to show a web component in different 'states'. 
This can act as a review tool, documentation. 

Storybook add-ons allow for unit testing integration as well as tracing back to Figma design references, and some automatic a11y checks. 

As needed the Storybook environment can be further extended to act as progressively enhanceable documentation - from simple utilitarian documentation, to references with mock data samples that are helpful for long-term maintenance, to full on design narratives with in-line examples.

Additionally, Storybook encourages a few development practices which can be beneficial for public coding. 

1. Sharing the story up-front.
2. Setting up and declaring inputs and outputs.
3. Connecting and documenting data sources.
4. Describing variants based on interaction states (e.g. toggle buttons or component responses to interaction, such as selecting a county.)
5. Integrate with a test framework: demonstrate & test all those variants (in an organized & easier way)!

## About this git repository

This instance of Storybook is an intial pilot into using this for ca.gov. 

We will begin with a few current projects to configure the tool & then will decide on how we version development of the components as needed (through submodules with a naming convention pattern we agree on.)

NOTE: This instance is built to support web components (as opposed to React or Angular projects.)

[About using Storybook web-components](https://storybook.js.org/docs/web-components/get-started/introduction)

"Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

Use Storybook to build small atomic components and complex pages in your web application. If it's a UI, you can build it with Storybook.

Storybook helps you document components for reuse and automatically visually test your components to prevent bugs. Extend Storybook with an ecosystem of addons that help you do things like fine tune responsive layouts or verify accessibility.

Storybook integrates with most popular JavaScript UI frameworks and (experimentally) supports server-rendered component frameworks such as Ruby on Rails.
"

[Component Driven User Interfaces](https://www.componentdriven.org/)

These projects come from our current covid19.ca.gov team projects:
* Updating the `covid19.ca.gov/safer-economy` search component to use a new data source & initiate a redesign effort.
* Convert d3 charts from `covid19.ca.gov/equity` into reusable components & use this tool as a reference for teaching how to generate performant, accessible & translatable SVG based charts using d3.


## Configuration notes
This instance of Storybook is configured with the following.
* Core [@storybook/web-components](https://www.npmjs.com/package/@storybook/web-components) 6.1.11


### Add ons
* storybook-addon-designs
* @storybook/addon-a11y
* @storybook/addon-viewport
* @storybook/addon-storyshots

