import { getMoreLanguages as WebComponent } from './getMoreLanguages';
import { data } from "./../../data";

export default {
  title: 'covid19/cagov-reopening/More languages/Guidance/Schools',
};

const Template = (args) => WebComponent(args);

export const AgricultureGuidance = Template.bind({});
AgricultureGuidance.args = {
  links: data["en"]["state-industry-guidance"].data["agriculture"].pdf,
  language: "en",
  type: "Guidance",
  label: "More languages"
};

export const AgricultureChecklist = Template.bind({});
AgricultureChecklist.args = {
  links: data["en"]["state-industry-guidance"].data["agriculture"].pdf,
  language: "en",
  type: "Guidance",
  label: "More languages"
};

export const NullLinks = Template.bind({});
NullLinks.args = {
  links: null,
  language: "en",
  type: "Guidance",
  label: "More languages"
};

export const EmptyLinks = Template.bind({});
EmptyLinks.args = {
  links: [],
  language: "en",
  type: "Guidance",
  label: "More languages"
};
