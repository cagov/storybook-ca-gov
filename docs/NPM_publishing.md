# Publishing components to `npm`

All component projects: 
https://airtable.com/shrzSSmy6PPfMtH2F

## Maintainers
People working with the Office of Digital Innovation team who publish packages to our [@cagov](https://www.npmjs.com/org/cagov) repository to [npm](https://www.npmjs.com/).

* [Aaron Hans](https://www.npmjs.com/~aaronhans)
* [Chach Sikes](https://www.npmjs.com/~chacha-california)
* Konstantin Koryaka
* Jim Bumgardner

## What is npm?
* `npm` is the world's largest software registry.
* [npmjs.com](https://npmjs.com)

## Creating an npm account

1. Create an [account](https://docs.npmjs.com/creating-a-new-npm-user-account) on to npmjs.com
2. Set up two-factor authentication
3. Tell Aaron (or Chach? @TODO check permissions) and we will add you to the organization.
4. Do a test publish to our "test" component. @TODO make/name a test component. This won't impact other projects.
5. Join our Airtable Base for tracking Web component projects https://airtable.com/invite/l?inviteId=invX8K4464v79qofP&inviteToken=b24564978198dea36da847ad2e2a5177a7ebe15905acadffe8ff20d2dbb46e5d. You will need "Editor" access to make changes.

## Publishing checklist
(requirements) - currently being explored in Airtable.

## Publishing methods

### Update in Storybook
1. Make sure your code is ready-to-publish.
2. Make sure the code is committed to the `main` branch of [storybook-ca-gov](https://github.com/cagov/storybook-ca-gov)


### Publish to npm

1. In terminal, navigate to the root of package you would like to publish. 
```cd /path/to/package```
2. Login to npm in terminal.
```npm login```
3. Authenticate with your npm username, email, npm password and two-factor authentication code.
4. To push code to npm:
```npm publish --access public```
This will upload a .zipped file to the npm package registry.
5. Confirm the package is updated on the npm page.
6. Notify any known package subscribers of the update. [How to subscribe to notifications]()
7. Logout when done!

### Publishing Notes 

* [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
* You cannot undo or unpublish a package. 
* To correct a mistake or error, you will need to fix the mistake and then "bump up" the version number one point. For example, if your package version was `v1.0.8`, you would bump it to `v1.0.9`.
* [npm-publish](https://docs.npmjs.com/cli/v7/commands/npm-publish)

## Installing a package on a project

* To use your new package in a project folder, you will need to install it in `package.json`.
* To find out when packages are updated: [check-dependencies](https://www.npmjs.com/package/check-dependencies).


## Versioning

* Start brand new components at `v0.0.1`. 
* Use this until the component meets desired publishing goals.