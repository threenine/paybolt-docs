<script lang="ts" setup>
import Navbar from '~/components/layout/navbar.vue'
import FooterInfo from '~/components/layout/footer-info.vue'
</script>

<template>
  <div class="max-w-full">
    <navbar />
    <slot />
    <footer-info />
  </div>
</template>
