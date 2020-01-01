const path = require('path')

console.log(path.resolve(__dirname, '../../index.js'))

module.exports = {
  base: '/vuepress-plugin-tabs/',
  title: 'element-tabs',
  description: "markdown custom container to display content in tabs",
  themeConfig: {
    repo: "https://github.com/superbiger/vuepress-plugin-tabs",
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated'
  },
  plugins: [
    path.resolve(__dirname, '../../index.js'),
  ]
}