import type { RouteLocationRaw } from 'vue-router'
import {
  AwesomeLayoutPageNavbarMenu,
  AwesomeLayoutPageNavbarMenuDropdownItem,
} from './types'
import { NuxtApp } from '#app'

export interface NuxtAwesomeAppConfig {
  /** title name */
  name?: string
  /** description */
  description?: string

  /** project config */
  project?: {
    /** links */
    links?: {
      /** project github link */
      github?: string
    }
  }

  /** layout config */
  layout?: {
    /** page layout */
    page?: {
      /** navbar */
      navbar?: {
        /** menus in navbar */
        menus?: AwesomeLayoutPageNavbarMenu[]
      }
    }
    /** footer */
    footer?: {
      /** footer year */
      year?: number
    }
    /** welcome component page */
    welcome?: {
      title?: string
      disableInfoReplaceIndexInWelcomePage?: boolean
      primaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
      secondaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
    }
  }

  /** author config */
  author?: {
    /** author name */
    name?: string
    /** author links */
    links?: {
      /** author github link */
      github?: string
      /** author medium link */
      medium?: string
      /** author website link */
      website?: string
    }
  }

  /** author config */
  disableInfoReplaceIndexInWelcomePage?: boolean
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    awesome?: NuxtAwesomeAppConfig
  }
}

export default defineAppConfig({
  awesome: {
    name: 'PayBolt',
    description: 'C# Bitcoin Lightning Network Client',
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
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Paybolt',
        disableInfoReplaceIndexInWelcomePage: true,
        primaryActionButton: {
          title: 'Paybolt',
          to: 'Paybolt',
        },
        secondaryActionButton: {
          title: 'Github',
          to: 'https://github.com/threenine/paybolt',
        },
      },
    },
    author: {
      name: 'threenine.co.uk',
      links: {
        github: 'https://github.com/threenine',
        website: 'https://threenine.co.uk',
      },
    },
    disableInfoReplaceIndexInWelcomePage: false,
  } as NuxtAwesomeAppConfig,
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em',
  },
})
