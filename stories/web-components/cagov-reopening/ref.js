import { withDesign } from "storybook-addon-designs";
import { data } from './data/context/california.json';

let mockData = {
  Default: data
};

export default {
  title: "Components/CollectData",
  component: CollectData,
  decorators: [withDesign]
};

export const Default = (args) => <CollectData {...args} />;

/**
* Connect Figma Frame
*/
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/DJFMzbITEjgEaEDQOVbRd2/Final-A.Frame-Site?node-id=5575%3A32501",
  },
};

/**
* Connect mock data
*/
Default.args = {
  clientContext: {
    isScrolled: false,
    isMobile: true,
    heroHeight: 550,
    isIE: false,
  },
  context: {
    isAmp: false,
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",
    location: "/",
    // route: {
    //   path: ["/", "/?*"],
    //   component: null,
    //   fetchInitialData: null,
    // },
    path: "/",
    url: "/",
    data: data,
  },
};
