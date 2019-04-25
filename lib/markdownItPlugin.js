const { hash } = require('@vuepress/shared-utils')
const container = require('markdown-it-container')

module.exports = function tabsPlugin (md, options = {}) {
    options = options || {}
    
    md.use(container, 'tabs', {
        render: (tokens, idx) => {
            const token = tokens[idx]
            const attributes = getTabsAttributes(token.info)

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
            const attributes = getTabAttributes(token.info)

            if (token.nesting === 1) {
                return `<Tab ${attributes}>\n`
            } else {
                return `</Tab>\n`
            }
        }
    })
}

function getTabsAttributes(info) {
    var arr = info.split(' ')
    var result = ''
    if(arr.length > 2) {
        arr.forEach(item => {
            if(item !== '' && item !== 'tabs') {
                var attribute = item.split(':')
                result += `${attribute[0]}="${attribute[1]}" `
            }
        });
    } else {
        result = `type="border-card"`
    }
    return result
}

function getTabAttributes(info) {
    var arr = info.split(' ')
    if(arr.length == 3) {
        return `label="${arr[2].trim()}"`
    }
    if(arr.length == 4) {
        return `label=${arr[2].trim()} ${arr[3].trim()}`
    }
    return ''
}