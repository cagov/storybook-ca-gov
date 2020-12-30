import { withConsole, setConsoleOptions } from "@storybook/addon-console";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};

setConsoleOptions({
  panelExclude: [],
});
