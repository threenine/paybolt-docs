export interface NuxtPayBoltAppConfig {
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

  /** author config */
  author?: {
    /** author name */
    name?: string
    /** author links */
    links?: {
      /** author github link */
      github?: string
      /** author medium link */
      nostr?: string
      /** author website link */
      website?: string
    }
  }
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    paybolt?: NuxtPayBoltAppConfig
  }
}
