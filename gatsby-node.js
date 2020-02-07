const StyleLintPlugin = require('stylelint-webpack-plugin')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      new StyleLintPlugin({
        configFile: './stylelint.config.js',
        fix: true,
      }),
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  })
}

exports.onCreateWebpackConfig = ({
  actions //, stage, getConfig, rules, loaders, 
}) => {
  actions.setWebpackConfig({
    externals: ['canvas'],
  });
}