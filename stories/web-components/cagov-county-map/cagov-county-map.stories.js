import { WebComponent } from './web-component-container';
import { data } from './data/all-data.js';
export default {
  title: 'd3-charts/cagov-county-map/web-component',
  argTypes: {
    onClick: { action: 'onClick' },
  },
  decorators: []
};

const Template = (args) => WebComponent(args);

export const CountyMapEnglish = Template.bind({});
CountyMapEnglish.storyName = "County Map (English API data)";
CountyMapEnglish.args = {
  data: data["en"],
};

// NOTE: These variations currently have English text. Can grab existing translated data if it exists.
export const CountyMapSpanish = Template.bind({});
CountyMapSpanish.storyName = "County Map (Spanish API data)";
CountyMapSpanish.args = {
  data: data["es"],
};

// NOTE: These variations currently have English text. Can grab existing translated data if it exists.
export const CountyMapTagalog = Template.bind({});
CountyMapTagalog.storyName = "County Map (Tagalog API data)";
CountyMapTagalog.args = {
  data: data["tl"],
};

