const path = require('path')

module.exports = {
    enhanceAppFiles: [
        path.resolve(__dirname, './lib/client.js')
    ],

    chainMarkdown (config) {
        config
            .plugin('@superbiger/tabs')
            .use(require('./lib/markdownItPlugin'))
    }
}