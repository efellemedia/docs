module.exports = {
    title: 'FusionCMS 5',
    description: 'FusionCMS 5 user and developer documentation.',

    configureWebpack: {
        resolve: {
            alias: {
                '@images': '../img',
            },
        },
    },

    markdown: {
        toc: {
            includeLevel: [2],
        },
    },

    themeConfig: {
        sidebar: [
            {
                title: 'Prologue',
                collapsable: true,
                children: [
                    '/',
                    '/licensing',
                ],
            },
            {
                title: 'Contributing',
                collapsable: true,
                children: [
                    '/bug-reports',
                    '/coding-standards',
                    '/code-conventions',
                    '/documentation',
                ],
            },
            {
                title: 'Getting Started',
                collapsable: true,
                children: [
                    '/installation',
                    '/updating',
                    '/homestead',
                ],
            },
            {
                title: 'The Basics',
                collapsable: true,
                children: [
                    '/basics/environments',
                    '/basics/fieldtypes',
                    '/basics/mail',
                    '/basics/modes',
                ],
            },
            {
                title: 'Fieldtypes',
                collapsable: true,
                children: [
                    '/address-fieldtype',
                    '/input-fieldtype',
                    '/replicator-fieldtype',
                ]
            },
            {
                title: 'Helpers',
                collapsable: true,
                children: [
                    '/api-helpers',
                ],
            },
            {
                title: 'Reference',
                collapsable: true,
                children: [
                    '/reference/collections',
                    '/reference/fontawesome',
                    '/reference/glide',
                    '/reference/seo',
                ],
            },
            {
                title: 'Developing Themes',
                collapsable: true,
                children: [
                    {
                        title: 'Prologue',
                        collapsable: true,
                        children: [
                            '/themes/introduction',
                            '/themes/directory-structure',
                            '/themes/screenshot',
                            '/themes/manifest',
                            '/themes/blueprints',
                            '/themes/view-composers',
                        ]
                    },
                    {
                        title: 'Blade',
                        collapsable: true,
                        children: [
                            '/themes/blade',
                            '/themes/defining-a-layout',
                            '/themes/extending-a-layout',
                            '/themes/components-and-slots',
                            '/themes/including-views',
                            '/themes/stacks',
                            '/themes/overloading-modules',
                        ],
                    },
                    {
                        title: 'Displaying Data',
                        collapsable: true,
                        children: [
                            '/themes/displaying-data',
                            '/themes/if-it-exists',
                            '/themes/unescaped',
                            '/themes/javascript-frameworks',
                        ],
                    },
                    {
                        title: 'Control Structures',
                        collapsable: true,
                        children: [
                            '/themes/if-statements',
                            '/themes/loops',
                            '/themes/loop-variable',
                            '/themes/comments',
                            '/themes/php',
                        ],
                    },
                ]
            },
            {
                title: 'Developing Modules',
                collapsable: true,
            }
        ]
    }
}