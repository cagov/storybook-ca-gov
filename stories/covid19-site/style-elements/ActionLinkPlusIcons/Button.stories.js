import { Button } from './Button';

export default {
  title: 'Covid19/Action link with icon',
  argTypes: {
    backgroundColor: { control: 'color' }
  },
};

const Template = (args) => Button(args);

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  primary: true,
  label: 'Top',
  backgroundColor: 'blue',
  foregroundColor: 'white',
  direction: 'up'
};

export const LightBackground = Template.bind({});
LightBackground.args = {
  label: 'Down',
  backgroundColor: 'white',
  foregroundColor: 'lightblue',
  direction: 'down'
};

export const LightBackground2 = Template.bind({});
LightBackground2.args = {
  size: 'large',
  label: 'Right',
  backgroundColor: 'lightblue',
  foregroundColor: 'blue',
  direction: 'right'
};

export const DarkBackground2 = Template.bind({});
DarkBackground2.args = {
  size: 'small',
  label: 'Left',
  backgroundColor: 'purple',
  foregroundColor: 'lightblue',
  direction: 'left'
};
