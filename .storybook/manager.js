import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import storybookTheme from './cagov.theme';

// addons.setConfig({
//   theme: themes.dark,
// });

addons.setConfig({
  theme: storybookTheme,
});