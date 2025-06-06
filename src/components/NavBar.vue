<script setup>
// Import des fonctions Vue nécessaires
import { useDarkMode } from '@/composables/useDarkMode'
import { useNavigation } from '@/composables/useNavigation'
import { useNavTranslation } from '@/composables/useNavTranslation'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { isDark, toggleDark } = useDarkMode()
const { navItems } = useNavTranslation()

// Définition des props reçues par le composant
// Ici on attend un nom de portfolio, avec une valeur par défaut
const props = defineProps({
  portfolioName: {
    type: String,
    default: 'ALMEIDA ALHADA Ruben'
  }
})

// Liste des items du menu, avec un id qui correspond à l'id des sections de la page
const {
  isMobileMenuOpen,
  activeSection,
  toggleMobileMenu,
  handleNavClick
} = useNavigation(navItems.value)
</script>

<template>
  <!-- Navbar with responsive classes -->
  <nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-main-gui-color-dark/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
      <!-- Portfolio name - responsive text size -->
      <div class="font-extrabold text-xl sm:text-2xl max-sm:text-sm text-highlight-color cursor-default  max-w-[200px] sm:max-w-none">
        {{ portfolioName }}
      </div>

      <!-- Desktop Menu - hidden on mobile -->
      <div class="hidden md:flex space-x-3 lg:space-x-6">
        <a v-for="item in navItems" 
           :key="item.id" 
           @click.prevent="handleNavClick(item.id)"
           class="cursor-pointer relative text-base lg:text-lg text-gray-700 dark:text-main-text-color-dark hover:text-highlight-color dark:hover:text-highlight-color transition duration-300"
           :class="{ 'text-highlight-color dark:text-highlight-color': activeSection === item.id }">
          {{ item.name }}
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-highlight-color scale-x-0 group-hover:scale-x-100 transition-transform"
                :class="{ 'scale-x-100': activeSection === item.id }">
          </span>
        </a>
      </div>

      <!-- Icons container -->
      <div class="flex items-center space-x-2 sm:space-x-4">
        <LanguageSwitcher />
        <!-- Theme toggle button -->
        <button 
          class="p-1.5 sm:p-2 text-gray-500 dark:text-main-text-color-dark hover:text-highlight-color dark:hover:text-highlight-color transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-main-background-color-dark"
          aria-label="Toggle theme" 
          @click="toggleDark()">
          <div class="relative w-5 h-5 sm:w-6 sm:h-6">
            <!-- Sun icon -->
            <svg 
              class="absolute inset-0 transition-transform duration-500"
              :class="isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <!-- Moon icon -->
            <svg 
              class="absolute inset-0 transition-transform duration-500"
              :class="isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          </div>
        </button>

        <!-- Mobile menu button -->
        <button class="md:hidden p-1.5 sm:p-2 text-gray-700 dark:text-main-text-color-dark" @click="toggleMobileMenu">
          <svg v-if="!isMobileMenuOpen" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu dropdown -->
    <div v-if="isMobileMenuOpen" 
         class="md:hidden px-4 pb-4 pt-2 bg-white dark:bg-main-gui-color-dark shadow dark:shadow-main-background-color-dark">
      <a v-for="item in navItems" 
         :key="item.id" 
         @click.prevent="handleNavClick(item.id)"
         class="block py-2.5 text-base sm:text-lg text-gray-700 dark:text-main-text-color-dark hover:text-highlight-color dark:hover:text-highlight-color transition duration-300"
         :class="{ 'text-highlight-color dark:text-highlight-color': activeSection === item.id }">
        {{ item.name }}
      </a>
    </div>
  </nav>
</template>
