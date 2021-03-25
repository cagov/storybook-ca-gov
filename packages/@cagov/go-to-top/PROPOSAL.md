# Proposal

## What is the component?
An interactive, global "Go to top" component.

Convert the "go-to-top" feature of covid19.ca.gov to a shared global component.

## Features
* Generates a button
* Button with replaceable label. Example: "Top" 
* Displays on "scroll-up"
* Displays when scrolled to bottom for two seconds.

## Known issues effecting reuse
* Add options. 
    Options can include:
    * Label (needs to be translatable)
    * Target content container
* Needs instructions to import into a project
* returnTopButton.style.dipslay - spelling
* unabbreviate 

## Stories
* Generates a button
* Takes data for: Label, Selector, domain
* Test interactions
    * show on load scroll at bottom 

