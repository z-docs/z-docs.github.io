// vuepress configuration

module.exports = {
    title: 'Z Service',
    description: 'Documentation for zcp, zdb, zmon including manual and source code sample',
    base: '/',
    port: 5000,
    markdown: {
        config: md => {
            md.use(require('markdown-it-anchor'));
            md.use(require('markdown-it-table-of-contents'), {
                "includeLevel": [1, 2, 3,4]
            });
        },
        lineNumbers: true
    },
    themeConfig: {
        repo: 'z-docs/z-docs.github.io',
        editLinks: true,
        lastUpdated: 'Last Updated',
        docsDir: 'docs',
        nav: [
            { text: 'ZCP', link: '/zcp/' },
            { text: 'ZDB', link: '/zdb/' },
            { text: 'ZMON', link: '/zmon/' }
        ],
        sidebar: {
            '/zcp/' : [
                ['/zcp/','ZCP'],
                {
                    title: 'CICD',
                    collapsable: true,
                    children: [
                        ['/zcp/cicd/','Overview'],
                        '/zcp/cicd/step01',
                        '/zcp/cicd/step02',
                        '/zcp/cicd/step03',
                        '/zcp/cicd/step04',
                        '/zcp/cicd/jenkins',
                    ]
                },
                {
                    title: 'Logging',
                    collapsable: true,
                    children: [
                        ['/zcp/logging/','Overview'],
                        '/zcp/logging/step01',
                    ]
                },
            ],
            '/zdb/': [
                ['/zdb/',"ZDB"]
            ],
            '/zmon/': [
                {
                    title: 'ZMON',
                    collapsable: true,
                    children: [
                        ['/zmon/','Overview'],
                        ['/zmon/step01','Hands-on']
                    ]
                },
            ]
        }
    }
}