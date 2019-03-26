module.exports = {
    title: '@superbiger/vuepress-plugin-tabs',
    description: "markdown custom container to display content in tabs",
    themeConfig: {
        repo: "https://github.com/superbiger/vuepress-plugin-tabs",
        editLinks: true,
        docsDir: 'docs',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated'
    },
    plugins: [
        require('../../index'),
        [
            '@vuepress/pwa', {
                serviceWorker: true,
                updatePopup: {
                    message: "New content is available.",
                    buttonText: "Refresh"
                }
            }
        ]
    ]
}