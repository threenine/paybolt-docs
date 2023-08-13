export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [ '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/color-mode',  'nuxt-headlessui'],
  // module::color-mode
  colorMode: {
    classSuffix: '',
  },
})
