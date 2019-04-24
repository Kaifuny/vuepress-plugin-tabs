const { hash } = require('@vuepress/shared-utils')
const container = require('markdown-it-container')

module.exports = function tabsPlugin (md, options = {}) {
    options = options || {}
    
    md.use(container, 'tabs', {
        render: (tokens, idx) => {
            const token = tokens[idx]

            if (token.nesting === 1) {
                return `<Tabs type="card">\n`
            } else {
                return `</Tabs>\n`
            }
        }
    })

    md.use(container, 'tab', {
        render: (tokens, idx) => {
            const token = tokens[idx]
            if (token.nesting === 1) {
                const label = token.info.split(" ")[2]
                console.log(token.info)
                console.log(label)
                return `<Tab label="${label}">\n`
            } else {
                return `</Tab>\n`
            }
        }
    })
}