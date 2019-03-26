const { hash } = require('@vuepress/shared-utils')
const container = require('markdown-it-container')

module.exports = function tabsPlugin (md, options = {}) {
    options = options || {}

    md.use(container, 'tabs', {
        render: (tokens, idx) => {
            const token = tokens[idx]
            // const attributes = tabAttributes(token.info)

            if (token.nesting === 1) {
                return `<Tabs ${attributes}>\n`
            } else {
                return `</Tabs>\n`
            }
        }
    })

    md.use(container, 'tab', {
        render: (tokens, idx) => {
            const token = tokens[idx]
            // const attributes = tabAttributes(token.info)

            if (token.nesting === 1) {
                return `<Tab ${attributes}>\n`
            } else {
                return `</Tab>\n`
            }
        }
    })
}