module.exports = {
  // Commented out to allow full page reload configuration in preview.js to work (and not conflict)
  // "stories": [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-designs"
  ],
  watch: true,
  watchOptions: {
    ignored: "/node_modules/"
  },
  // Handle re-rendering of story component https://github.com/storybookjs/storybook/issues/12578
  babel: async (options) => {
    Object.assign(options.plugins.find((plugin) => plugin[0].includes('plugin-proposal-decorators'))[1], {
      decoratorsBeforeExport: true,
      legacy: false
    })
    return options;
  }
}

