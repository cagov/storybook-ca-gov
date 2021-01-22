import { withConsole, setConsoleOptions } from "@storybook/addon-console";
// import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import {
  configure
  // setCustomElements,
} from '@storybook/web-components'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // viewport: {
  //   viewports: MINIMAL_VIEWPORTS,
  // },
};

setConsoleOptions({
  panelExclude: [],
});

// https://github.com/storybookjs/storybook/issues/12307
// Force full reload to not reregister web components.
const req = require.context('../stories', true, /\.stories\.(js|mdx)$/)
configure(req, module)
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href
    window.history.pushState(null, null, currentLocationHref)
    window.location.reload()
  })
}