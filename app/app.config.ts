import { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'Paybolt',
    description: 'Dotnet c# Bitcoin lightning network client',
    project: {
      links: {
        github: 'https://github.com/threenine/paybolt',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: 'Blank', to: { name: 'blank' } },
            { type: 'link', title: 'Post', to: { name: 'post' } },
            { type: 'link', title: 'Test', to: { name: 'test' } },
            {
              type: 'dropdown',
              title: 'Documentations',
              children: [
                {
                  type: 'link',
                  title: 'Components',
                  to: { name: 'docs-components' },
                },
              ],
            },
            { type: 'button', title: 'Setting', to: { name: 'setting' } },
            // dynamic title
            // {
            //   type: 'button',
            //   title: (nuxt) =>
            //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            // },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Paybolt Bitcoin Lightning',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'threenine.co.uk',
      links: {
        github: 'https://github.com/threenine',
        medium: 'https://threenine.medium.com',
        website: 'https://threenine.co.uk',
      },
    },
  },
})
