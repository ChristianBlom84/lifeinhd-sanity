export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ec264822723aadf24a5ea86',
                  title: 'Sanity Studio',
                  name: 'lifeinhd-sanity-studio',
                  apiId: '7a55fa6b-dd2a-4b4f-90e7-6b7b72f8a290'
                },
                {
                  buildHookId: '5ec26482496fb5c6351e2076',
                  title: 'Portfolio Website',
                  name: 'lifeinhd-sanity',
                  apiId: 'f83c6dbd-68f2-47ea-9cdf-5376dd7abec9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChristianBlom84/lifeinhd-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://lifeinhd-sanity.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
