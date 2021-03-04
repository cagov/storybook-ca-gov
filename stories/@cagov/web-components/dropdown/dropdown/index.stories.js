import { WebComponent } from './storybook-web-component';

export default {
  title: '@cagov/Web components/dropdown',
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
  data: [
    {
      link: "#",
      language: "en"
    }
  ]
};
