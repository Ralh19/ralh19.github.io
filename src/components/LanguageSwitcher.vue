<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

const { locale } = useI18n()

onMounted(() => {
  const savedLocale = localStorage.getItem('language')
  if (savedLocale) {
    locale.value = savedLocale
  }
})

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'fr' : 'en'
  localStorage.setItem('language', locale.value)
}
</script>

<template>
  <button @click="toggleLanguage" 
          class="p-1.5 sm:p-2 text-gray-500 dark:text-main-text-color-dark 
                 hover:text-highlight-color dark:hover:text-highlight-color 
                 transition-colors rounded-full 
                 hover:bg-gray-100 dark:hover:bg-main-background-color-dark">
    {{ locale === 'en' ? 'EN' : 'FR' }}
  </button>
</template>