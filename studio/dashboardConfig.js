export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60cbb3c99d073500c0d0c524',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-rg3w8jbe',
                  apiId: '5842f661-4cfe-45d7-89ac-53dad253c734'
                },
                {
                  buildHookId: '60cbb3c98f51470099a14e21',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-um2euyis',
                  apiId: 'b7e9f5d5-dfc5-43f0-9144-4fdaa9399928'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Justinator/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-um2euyis.netlify.app', category: 'apps'}
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
