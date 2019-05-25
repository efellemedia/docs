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
            },
            {
                title: 'Developing Modules',
            }
        ]
    }
}