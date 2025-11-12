<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useTranslations } from '@/composables/useTranslations'
import Container from '@/components/Container.vue'

const { hero } = useTranslations()

// Gestion du scroll smooth
const handleScrollClick = (event) => {
  event.preventDefault()
  const targetId = event.currentTarget.getAttribute('href').slice(1)
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Gestion du menu déroulant (FR / EN)
const isMenuOpen = ref(false)
const menuRef = ref(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const openPdf = (lang) => {
  const pdfs = {
    fr: '/docs/resume_fr.pdf',
    en: '/docs/resume_en.pdf'
  }
  window.open(pdfs[lang], '_blank')
  isMenuOpen.value = false
}

const handleClickOutside = (e) => {
  if (menuRef.value && !menuRef.value.contains(e.target)) {
    isMenuOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <section
    id="home"
    class="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-main-gui-color-darker relative py-20 md:py-0"
  >
    <Container>
      <div class="flex flex-col items-start justify-center w-full max-w-8xl mx-auto relative">
        <div
          class="absolute z-10 flex flex-col items-start w-full max-w-7xl left-1/2 top-1/2 
                 -translate-y-1/2 -translate-x-1/2"
          style="pointer-events: auto;"
        >
          <!-- Halo -->
          <div class="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <div
              class="w-[900px] h-[400px] md:w-[1300px] md:h-[500px] rounded-full 
                     bg-highlight-color/25 dark:bg-highlight-color/30 blur-[100px] scale-110"
            ></div>
          </div>

          <!-- Contenu principal -->
          <div class="relative z-10 w-full">
            <h1
              class="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white 
                     leading-tight max-w-7xl"
            >
              {{ hero.greeting }} <span class="text-highlight-color">Ruben</span>
              <span class="cursor-default wave-animation text-4xl md:text-6xl">👋</span>
            </h1>

            <p
              class="text-xl md:text-2xl text-gray-600 dark:text-main-text-color-dark mb-10 
                     max-w-5xl"
            >
              {{ hero.description }}
            </p>

            <div
              class="flex flex-col md:flex-row gap-4 md:gap-8 mb-10 items-stretch 
                     md:items-center w-full"
            >
              <!-- Bouton "Hire Me" -->
              <a
                href="#contact"
                @click="handleScrollClick"
                class="text-2xl px-10 py-5 bg-highlight-color text-white rounded-2xl 
                       shadow-md hover:shadow-lg scale-animation hover:opacity-90 text-center transition-all"
              >
                {{ hero.hireMe }}
              </a>

              <!-- Bouton PDF + Dropdown -->
              <div ref="menuRef" class="relative inline-block text-left">
                <button
                  @click.stop="toggleMenu"
                  class="flex items-center justify-center gap-3 text-2xl px-10 py-5 
                         bg-highlight-color text-white rounded-2xl shadow-md hover:shadow-lg 
                         scale-animation hover:opacity-90 transition-all"
                >
                  <i class="bi bi-filetype-pdf text-2xl md:text-3xl"></i>
                  {{ hero.resume }}
                  <i class="bi bi-chevron-down text-xl transition-transform duration-300"
                     :class="{ 'rotate-180': isMenuOpen }"></i>
                </button>

                <transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="opacity-0 -translate-y-2 scale-95"
                  enter-to-class="opacity-100 translate-y-0 scale-100"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="opacity-100 translate-y-0 scale-100"
                  leave-to-class="opacity-0 -translate-y-2 scale-95"
                >
                  <div
                    v-if="isMenuOpen"
                    class="absolute left-0 mt-3 w-full bg-white dark:bg-main-gui-color-dark 
                           border border-gray-200 dark:border-main-background-color-dark 
                           rounded-2xl shadow-xl z-50 overflow-hidden backdrop-blur-sm"
                  >
                    <button
                      @click="openPdf('fr')"
                      class="w-full text-left px-6 py-4 text-gray-800 dark:text-main-text-color-dark 
                             hover:bg-highlight-color/10 dark:hover:bg-highlight-color/20 
                             flex items-center gap-3 text-lg transition-colors duration-200"
                    >
                      🇫🇷 <span>FR</span>
                    </button>

                    <div class="h-[1px] bg-gray-100 dark:bg-main-background-color-dark mx-4"></div>

                    <button
                      @click="openPdf('en')"
                      class="w-full text-left px-6 py-4 text-gray-800 dark:text-main-text-color-dark 
                             hover:bg-highlight-color/10 dark:hover:bg-highlight-color/20 
                             flex items-center gap-3 text-lg transition-colors duration-200"
                    >
                      🇬🇧 <span>EN</span>
                    </button>
                  </div>
                </transition>
              </div>

              <!-- Localisation -->
              <div
                class="flex items-center text-highlight-color mb-2 md:mb-0 justify-center 
                       md:justify-start max-sm:w-full"
              >
                <i class="bi bi-geo-alt-fill text-2xl md:text-4xl bounce-animation"></i>
                <span
                  class="text-2xl md:text-2xl ml-2 md:ml-3 dark:text-main-text-color-dark 
                         font-bold text-center"
                >
                  {{ hero.location }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Down -->
      <div class="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 pb-6">
        <a
          href="#experience"
          @click="handleScrollClick"
          class="flex flex-col items-center text-2xl md:text-3xl text-gray-600 
                 dark:text-main-text-color-dark hover:text-highlight-color 
                 dark:hover:text-highlight-color transition-colors"
        >
          <span class="text-2xl md:text-3xl mb-2">{{ hero.scrollDown }}</span>
          <i class="bi bi-arrow-down-short text-5xl md:text-6xl bounce-animation"></i>
        </a>
      </div>

      <div
        class="md:hidden absolute left-1/2 bottom-4 -translate-x-1/2 w-full flex justify-center 
               z-20 mt-10"
      >
        <a
          href="#experience"
          @click="handleScrollClick"
          class="flex flex-col items-center text-2xl text-gray-600 
                 dark:text-main-text-color-dark hover:text-highlight-color 
                 dark:hover:text-highlight-color transition-colors"
        >
          <span class="text-2xl mb-2">{{ hero.scrollDown }}</span>
          <i class="bi bi-arrow-down-short text-5xl bounce-animation"></i>
        </a>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.scale-animation:active {
  transform: scale(0.95);
}

img {
  filter: contrast(1.1) brightness(1.05);
}
</style>
