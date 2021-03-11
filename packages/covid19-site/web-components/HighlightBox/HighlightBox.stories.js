import { HighlightBox } from './HighlightBox';

export default {
  title: 'Covid19/Web components/Highlight box'
};

const Template = (args) => HighlightBox(args);

export const Highlight = Template.bind({});
Highlight.args = {
  primary: true,
  classname: 'highlight'
};