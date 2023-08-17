export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-headlessui',
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  headlessui: {
    prefix: 'Headless',
  },
  runtimeConfig: {
    public: {
      fathom_analytics_id: process.env.fathom_analytics_id,
      siteUrl: 'https://paybolt.dev',
    },
  },
})
