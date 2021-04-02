import { withConsole, setConsoleOptions } from "@storybook/addon-console";
// import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import {
  configure,
  // setCustomElements,
} from "@storybook/web-components";

import { themes } from "@storybook/theming";
import storybookTheme from "./cagov.theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // viewport: {
  //   viewports: MINIMAL_VIEWPORTS,
  // },
  docs: {
    theme: themes.light,
    // theme: storybookTheme,
  },
  options: {
    storySort: {
      order: [
        "Intro",
        "@cagov",
        "Covid19",
        "d3-charts",
        ["Intro", "Web components", ["cagov-county-map", ["Intro", "Chart"]]],
      ],
    },
  },
};

setConsoleOptions({
  panelExclude: [],
});

// https://github.com/storybookjs/storybook/issues/12307
// Force full reload to not reregister web components.
// This will only build packages in development.
// When package is ready to publish it should replace its folder in `packages`.
// You can also remove the packages version & update the package.json version & copy from node_modules to make sure they are synced. npm points at packages folder, so it should always be a perfect match with the npm version.
// Development version can be the next point release & unfinished. 
// We will do a separate build of the development folder to a development web site for anything that's not ready but still needs to be versioned. If doing more extensive testing, we can do that in staging to not block new development or interfere with production releases.
// @TODO rename packages to `dist` - any published packages may be cleaned up at some point.

const req = require.context("../packages", true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
