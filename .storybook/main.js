module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
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
  // webpackFinal: async (config, { configType }) => {
  //   console.log(config);
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   // Make whatever fine-grained changes you need
  //   // config.module.rules.push({
  //   //   test: /\.scss$/,
  //   //   use: ['style-loader', 'css-loader', 'sass-loader'],
  //   //   include: path.resolve(__dirname, '../'),
  //   // });

  //   // config.module.rules.push({
  //   //   test: /\.js$/,
  //   //   // use: [],
  //   //   include: path.resolve(__dirname, '../'),
  //   // });
  //   // config.plugins.HotModuleReplacementPlugin.options = {};

  //   // Return the altered config
  //   return config;
  // },
}
