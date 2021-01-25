import { ArrowLink } from './ArrowLink';

export default {
  title: 'Covid19/Arrow Links'
};

const Template = (args) => ArrowLink(args);


export const DarkBackground = Template.bind({});
DarkBackground.args = {
  primary: true,
  label: 'link',
  backgroundColor: 'blue',
  foregroundColor: 'white'
};

export const LightBackground = Template.bind({});
LightBackground.args = {
  label: 'link',
  backgroundColor: 'white',
  foregroundColor: 'lightblue'
};

export const LightBackground2 = Template.bind({});
LightBackground2.args = {
  size: 'large',
  label: 'link',
  backgroundColor: 'lightblue',
  foregroundColor: 'blue'
};

export const DarkBackground2 = Template.bind({});
DarkBackground2.args = {
  size: 'small',
  label: 'link',
  backgroundColor: 'purple',
  foregroundColor: 'lightblue'
};
