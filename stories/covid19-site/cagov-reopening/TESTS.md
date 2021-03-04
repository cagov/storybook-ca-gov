# Test plan for `cagov-reopening`

Outline of core features to test & extra unit tests that would be good for testing a web component from Storybook using Storybook compatible testing framework. 

## "Happy tests"
Tests that show that the component renders as expected.

* Can look up information about your county.
* Can look up activity or business search data.
* Schools content loads
* Tier status content loads
* Related State Industry  loads
* Translated PDF State Industry Guidance loads

## "Bad data tests"
Tests that feed problematic data into the component to make sure that pipeline & data structure changes do not break the component, Javascript or produce other consequences.

* Wrong or missing county data
* Missing tier data
* Wrong or missing search autocomplete activity data
* Wrong or missing schools data
* Wrong or missing state industry guidance data 

## Tips
* [How To Test a Web Component](https://medium.com/@pietmichal/how-to-test-a-web-component-b5d64d5e8bb0)

