export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '623b7fe02eb83300cbdf84cc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dtq74c6f',
                  apiId: '304cb54e-9fd5-4085-9f79-d7db59b3f1c8'
                },
                {
                  buildHookId: '623b7fe03863de005fe6a398',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vdr136sm',
                  apiId: 'a851ee15-6c8c-4bfb-822f-daa7a59b6fba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/byebyers/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vdr136sm.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
