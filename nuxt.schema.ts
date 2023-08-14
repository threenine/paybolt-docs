import { NuxtPayBoltAppConfig } from './types/PayBoltConfig'

export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: 'PayBolt',
      description:
        'Dotnet C# Bitcoin Lightning Network Payment Client',
      project: {
        links: {
          github: 'https://github.com/threenine/paybolt',
        },
      },
      layout: {
        page: {
          navbar: {
            menus: [],
          },
        },
      },
      author: {
        name: 'threenine.co.uk',
        links: {
          github: 'https://github.com/threenine',
          nostr: 'https://viandwi24.medium.com',
          website: 'https://threeine.co.uk',
        },
      },
    } as NuxtPayBoltAppConfig,
  },
})
