import { WebComponent } from './web-component-container';

export default {
  title: '@cagov/accordion',
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
