const path = require('path')

module.exports = (options, context) => ({
  extendPageData($page) {
    $page.elementTabsOptions = options
  },
  enhanceAppFiles: [
    path.resolve(__dirname, './lib/client.js')
  ],
  scss: {
    includePath: ["./lib/theme/tabs.scss"]
  },
  chainMarkdown (config) {
    config
    .plugin('@superbiger/tabs')
    .use(require('./lib/markdownItPlugin'), [options])
    .end()
  }
})