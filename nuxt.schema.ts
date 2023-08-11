import { NuxtAwesomeAppConfig } from './app.config'

export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: 'Paybolt',
      description: 'Dotnet C# Bitcoin Lightning network client',
      project: {
        links: {
          github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
        },
      },
      layout: {
        page: {
          navbar: {
            menus: [],
          },
        },
        footer: {
          year: 2023,
        },
        welcome: {
          title: 'Paybolt',
          disableInfoReplaceIndexInWelcomePage: true,
        },
      },
      author: {
        name: 'threenine.co.uk',
        links: {
          github: 'https://github.com/threenine',
          twitter: 'https://twitter/threenine39',
          website: 'https://threenine.co.uk',
        },
      },
    } as NuxtAwesomeAppConfig,
  },
})
