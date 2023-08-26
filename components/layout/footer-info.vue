<template>
  <footer>
    <div
      class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-gray-900 dark:text-gray-100 hover:text-gray-300"
        >
          <span class="sr-only">{{ item.name }}</span>
          <Icon :name="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p
          class="text-center text-xs leading-5 text-gray-900 dark:text-gray-100"
        >
          <nuxt-link
            to="https://find-and-update.company-information.service.gov.uk/company/05608093"
            class="mt-8 text-base text-gray-900 dark:text-gray-100 md:order-1 md:mt-0"
            >&copy {{ new Date().getFullYear() }}
            THREENINE CONSULTING LIMITED registered in England & Wales 05608093
            VAT no. GB 900383850
          </nuxt-link>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navigation = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/threenine39',
    icon: 'fa6-brands:x-twitter',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/threenine/paybolt',
    icon: 'uil:github',
  },
  {
    name: 'Slack',
    href: 'https://threenine.slack.com/archives/C05N6R5049J',
    icon: 'uil:slack',
  },
]
</script>
