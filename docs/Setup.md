# Setting up this repository

1. Clone the repository
2. `npm install` install all of the packages.
3. `npm run storybook` to run a local instance.


# Publishing this repository
Our static [web host](https://wonderful-plant-07a82e81e-1.westus2.azurestaticapps.net) shows the content of the `/storybook-static` folder.

To update this content & check it in to github:
* `npm run build` — This runs the Storybook build process, which updates code in `/storybook-static`
* `npm run build:commit` — This runs Storybook and then saves the updates to the `/storybook-static` folder in git.

Current publishing workflow
1. TEAM: Create a new branch, run `npm run build:commit` & push changes it to the GitHub repo. Open a pull request.
2. `npm run build:commit` & push directly to `main` for a quick publishing update.

Once pushed or merge request is accepted, it will deploy to the server in a couple of minutes.

This process can be further automated as desired by editing the .yml file in .github/workflows.

Ideal
We are observing our workflows before deciding what the ideal workflow would be & then configuring that in the .yml file (which requires researching the correct build commands)

The general process would be:
* check in code to the `stories` folder with a new pull request (PR.)
* run `npm run build-storybook` on the git repository (ensuring that the global storybook build script is available to the environment) & that it can run in the Azure build pipeline.
* make sure the `storybook-static` folder is the target & that it completes its static server set up workflow. Our .yml file is set to look for that folder.


### CSS Integrations
Notes on necessary CSS configurations.
https://storybook.js.org/docs/react/get-started/setup

CONSIDERING
* Scoped CSS by project type (ca.gov, covid-19, etc)
* Storybook specific styles as needed

### Resources
* Examples of Storybooks for various companies: https://storybook.js.org/docs/react/get-started/examples