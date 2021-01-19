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
}

