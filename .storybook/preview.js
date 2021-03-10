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
const req = require.context("../packages", true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
