import { WebComponent } from './storybook-web-component';

export default {
  title: '@cagov/Web components/drawer',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
  decorators: []
};

const Template = (args) => WebComponent(args);

export const TestDrawer = Template.bind({});
TestDrawer.args = {
  primary: true,
  label: 'Drawer',
};
