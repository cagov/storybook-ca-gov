import { withDesign } from "storybook-addon-designs";
import { data } from './data/california.js';
import { Button } from './cagov-reopening';

let mockData = {
  Default: data
};

export default {
  title: 'covid19/cagov-reopening/web-component',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
  // component: Button,
  decorators: [withDesign]
};

const Template = (args) => Button(args);

/**
* Connect mock data
*/
Template.args = {
    data: data,
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

/**
* Connect Figma Frame
*/
Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/hX1EkAcCQ86bzJKf6ZYy9y/Untitled?node-id=1%3A2",
  },
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
