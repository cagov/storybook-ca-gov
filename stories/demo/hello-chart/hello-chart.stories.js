import { Chart } from './hello-chart';

export default {
  title: 'Demo/Hello-Chart',
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => Chart(args);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Chart Label',
};
