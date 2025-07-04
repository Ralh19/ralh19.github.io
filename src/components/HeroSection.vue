<script setup>
import { useHeroTranslation } from '@/composables/translation_composables/useHeroTranslation'

const { t } = useHeroTranslation()

const handleScrollClick = (event) => {
  event.preventDefault()
  const targetId = event.currentTarget.getAttribute('href').slice(1)
  const element = document.getElementById(targetId)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <section id="home"
    class="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-main-gui-color-darker relative py-20 md:py-0">
    <container>
      <div class="flex flex-col items-start justify-center w-full max-w-8xl mx-auto relative">
        <!-- Hero content -->
        <div
          class="absolute z-10 flex flex-col items-start w-full max-w-7xl left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
          style="pointer-events: auto;">
          <!-- Purple glow background directly behind hero content -->
          <div class="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <div
              class="w-[900px] h-[400px] md:w-[1300px] md:h-[500px] rounded-full bg-highlight-color/25 dark:bg-highlight-color/30 blur-[100px] scale-110">
            </div>
          </div>
          <!-- Hero content foreground -->
          <div class="relative z-10 w-full">
            <h1 class="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight max-w-7xl">
              {{ t('hero.greeting') }} <span class="text-highlight-color">Ruben</span>
              <span class="cursor-default wave-animation text-4xl md:text-6xl">👋</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 dark:text-main-text-color-dark mb-10 max-w-5xl">
              {{ t('hero.description') }}
            </p>
            <div class="flex flex-col md:flex-row gap-4 md:gap-8 mb-10 items-stretch md:items-center w-full">
              <a href="#contact"
                class="text-2xl px-10 py-5 bg-highlight-color text-white rounded-xl scale-animation hover:opacity-90 text-center"
                @click="handleScrollClick">
                {{ t('hero.hireMe') }}
              </a>
              <a href="/docs/resume_fr.pdf" target="_blank"
                class="text-2xl px-10 py-5 bg-highlight-color text-white rounded-xl scale-animation hover:opacity-90 text-center">
                <i class="bi bi-filetype-pdf text-2xl md:text-3xl"></i>
                {{ t('hero.resume') }}
              </a>
              <div class="flex items-center text-highlight-color mb-2 md:mb-0 justify-center md:justify-start max-sm:w-full">
                <i class="bi bi-geo-alt-fill text-2xl md:text-4xl bounce-animation"></i>
                <span
                  class="text-2xl md:text-2xl ml-2 md:ml-3 dark:text-main-text-color-dark font-bold text-center">{{ t('hero.location') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Desktop scroll button -->
      <div class="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 pb-6">
        <a href="#experience" @click="handleScrollClick"
          class="flex flex-col items-center text-2xl md:text-3xl text-gray-600 dark:text-main-text-color-dark hover:text-highlight-color dark:hover:text-highlight-color transition-colors">
          <span class="text-2xl md:text-3xl mb-2">{{ t('hero.scrollDown') }}</span>
          <i class="bi bi-arrow-down-short text-5xl md:text-6xl bounce-animation"></i>
        </a>
      </div>
      <!-- Mobile scroll button absolutely at the bottom -->
      <div class="md:hidden absolute left-1/2 bottom-4 -translate-x-1/2 w-full flex justify-center z-20 mt-10">
        <a href="#experience" @click="handleScrollClick"
          class="flex flex-col items-center text-2xl text-gray-600 dark:text-main-text-color-dark hover:text-highlight-color dark:hover:text-highlight-color transition-colors">
          <span class="text-2xl mb-2">{{ t('hero.scrollDown') }}</span>
          <i class="bi bi-arrow-down-short text-5xl bounce-animation"></i>
        </a>
      </div>
    </container>
  </section>
</template>

<style scoped>
img {
  filter: contrast(1.1) brightness(1.05);
}
</style>
