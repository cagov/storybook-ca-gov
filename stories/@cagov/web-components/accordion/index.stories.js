import { WebComponent } from './storybook-web-component';

export default {
  title: '@cagov/Web components/accordion',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
  decorators: []
};

const Template = (args) => WebComponent(args);

export const TestAccordion = Template.bind({});
TestAccordion.args = {
  primary: true,
  label: 'Accordion',
};
