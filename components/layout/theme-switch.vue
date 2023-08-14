<template>
  <div>
    <Icon
      name="uil:sun"
      v-show="colorMode.preference === 'light'"
      class="
       theme-icon text-typography_primary_light dark:text-typography_primary_dark text-3xl"
      @click="toggleTheme"
    />
    <Icon
      name="uil:moon"
      v-show="colorMode.preference === 'dark'"
      class="theme-icon text-typography_primary_light dark:text-typography_primary_dark text-3xl"
      @click="toggleTheme"
    />
  </div>
</template>
<script setup>
const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>
<style scoped>
.theme-icon {
  @apply w-7 h-7 cursor-pointer transition-transform duration-100;
}
.theme-icon:hover {
  @apply scale-125;
}
</style>
