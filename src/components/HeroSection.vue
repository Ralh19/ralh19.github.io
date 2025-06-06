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
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <!-- Profile Photo - Full width on mobile, 1/3 on desktop -->
        <div class="w-2/3 md:w-1/3 aspect-square relative">
          <!-- Purple glow background -->
          <div
            class="absolute inset-0 rounded-full bg-highlight-color/25 dark:bg-highlight-color/30 blur-3xl scale-110">
          </div>

          <!-- Image container -->
          <div class="relative w-full h-full rounded-full overflow-hidden">
            <img src="/images/hero_section/goat2.png"
              class="w-full h-full object-cover scale-125 transform translate-x-16 -translate-y-11"
              alt="Profile picture" />
          </div>
        </div>

        <!-- Text content - Full width on mobile, 2/3 on desktop -->
        <div class="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            {{ t('hero.greeting') }} <span class="text-highlight-color">Ruben</span>
            <span class="cursor-default wave-animation">👋</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-600 dark:text-main-text-color-dark">
            {{ t('hero.description') }}
          </p>

          <!-- Buttons row on mobile and desktop -->
          <div class="flex flex-row gap-4 w-full justify-center md:justify-start">
            <a href="#contact"
              class="text-lg md:text-xl mt-6 px-6 py-3 bg-highlight-color text-white rounded-lg scale-animation hover:opacity-90 flex-1 md:flex-none text-center"
              @click="handleScrollClick">
              {{ t('hero.hireMe') }}
            </a>
            <a href="/docs/resume_fr.pdf" target="_blank"
              class="text-lg md:text-xl mt-6 px-6 py-3 bg-highlight-color text-white rounded-lg scale-animation hover:opacity-90 flex-1 md:flex-none text-center">
              <i class="bi bi-filetype-pdf"></i>
              {{ t('hero.resume') }}
            </a>
          </div>

          <!-- Location stacked below buttons -->
          <div class="mt-6 flex items-center text-highlight-color">
            <i class="bi bi-geo-alt-fill text-2xl md:text-3xl bounce-animation"></i>
            <span class="text-xl md:text-2xl ml-2 dark:text-main-text-color-dark">{{ t('hero.location') }}</span>
          </div>

          <!-- Mobile scroll button -->
          <div class="md:hidden mt-6">
            <a href="#experience" @click="handleScrollClick"
              class="flex flex-col items-center text-gray-600 dark:text-main-text-color-dark hover:text-highlight-color dark:hover:text-highlight-color transition-colors">
              <span class="text-xl mb-2">{{ t('hero.scrollDown') }}</span>
              <i class="bi bi-arrow-down-short text-3xl bounce-animation"></i>
            </a>
          </div>
        </div>
      </div>
    </container>

    <!-- Desktop scroll button -->
    <div class="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 pb-6">
      <a href="#experience" @click="handleScrollClick"
        class="flex flex-col items-center text-gray-600 dark:text-main-text-color-dark hover:text-highlight-color dark:hover:text-highlight-color transition-colors">
        <span class="text-xl md:text-2xl mb-2">{{ t('hero.scrollDown') }}</span>
        <i class="bi bi-arrow-down-short text-3xl md:text-4xl bounce-animation"></i>
      </a>
    </div>
  </section>
</template>

<style scoped>
img {
  filter: contrast(1.1) brightness(1.05);
}
</style>
