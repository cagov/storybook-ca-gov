import { WebComponent } from './web-component-container';

export default {
  title: '@cagov/dropdown',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
  decorators: []
};

const Template = (args) => WebComponent(args);

export const TestDropdown = Template.bind({});
TestDropdown.args = {
  primary: true,
  label: 'Dropdown',
};
