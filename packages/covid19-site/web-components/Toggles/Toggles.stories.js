import { Toggles } from './Toggles';

export default {
  title: 'Covid19/Web components/Toggles'
};

const Template = (args) => Toggles(args);

export const Big = Template.bind({});
Big.args = {
  primary: true,
  topsize: 'large-tabs',
  itemsize: 'large-tab'
};

export const Small = Template.bind({});
Small.args = {
  topsize: '',
  itemsize: 'small-tab'

};
