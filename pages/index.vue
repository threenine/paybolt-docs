<script lang="ts" setup>
definePageMeta({ layout: 'default' })


const features = [
  {
    name: 'Dotnet',
    description:
      'Develop Lightning Network based apps in C#. Provides a common abstraction supporting many implementations.',
    icon: 'simple-icons:dotnet',
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: 'heroicons:lock-closed'
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: 'heroicons:server',
  },
]
</script>

<template>
    <div class="overflow-hidden py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 text-orange-600">Bitcoin</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-orange sm:text-4xl">PayBolt</p>
              <p class="mt-6 text-lg leading-8 dark:text-gray-200 text-gray-600">Lightning Network Client</p>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-800 dark:text-gray-100 lg:max-w-none">
                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                  <dt class="inline font-semibold text-orange">
                    <Icon :name="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-orange" aria-hidden="true" />
                    {{ feature.name }}
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ feature.description }}</dd>
                </div>
              </dl>
            </div>
          </div>
          <img src="/PayBolt.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
        </div>
      </div>
    </div>
  </template>




<style scoped></style>
