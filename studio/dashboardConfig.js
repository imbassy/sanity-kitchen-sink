export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6300326eab4f3a630ee371a5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6et52ryt',
                  apiId: 'a939ed9d-e6b1-43ab-b1a6-81ed5c75ef0f'
                },
                {
                  buildHookId: '6300326f2a41dd628cdb1956',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-et9sd37h',
                  apiId: 'f8db2a6b-42a8-4064-b706-d4aa2e2405b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/imbassy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-et9sd37h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
