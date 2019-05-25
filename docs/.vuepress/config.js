module.exports = {
    title: 'FusionCMS 5',
    description: 'FusionCMS 5 user and developer documentation.',

    markdown: {
        toc: {
            includeLevel: [2],
        },
    },

    themeConfig: {
        sidebar: [
            {
                title: 'Prologue',
                children: [
                    '/',
                    '/licensing',
                ],
            },
            {
                title: 'Contributing',
                children: [
                    '/bug-reports',
                    '/coding-standards',
                    '/code-conventions',
                    '/documentation',
                ],
            },
            {
                title: 'Getting Started',
                children: [
                    '/installation',
                    '/updating',
                    '/homestead',
                ],
            },
            {
                title: 'The Basics',
                children: [
                    '/modes',
                    '/fieldtypes',
                ],
            },
            {
                title: 'Fieldtypes',
                children: [
                    '/address-fieldtype',
                    '/input-fieldtype',
                    '/replicator-fieldtype',
                ]
            },
            {
                title: 'Helpers',
                children: [
                    '/api-helpers',
                ],
            },
            {
                title: 'Digging Deeper',
                children: [
                    '/collections',
                ],
            },
            {
                title: 'Developing Themes',
                children: [
                    {
                        title: 'Prologue',
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
                        children: [
                            '/themes/displaying-data',
                            '/themes/if-it-exists',
                            '/themes/unescaped',
                            '/themes/javascript-frameworks',
                        ],
                    },
                    {
                        title: 'Control Structures',
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
            }
        ]
    }
}