<script setup>
import { computed } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'
import { useNavigation } from '@/composables/useNavigation'
import { useTranslations } from '@/composables/useTranslations'
import LanguageSwitcher from './LanguageSwitcher.vue'
import DarkModeSwitcher from './DarkModeSwitcher.vue'

const { isDark, toggleDark } = useDarkMode()
const { nav } = useTranslations()

const navItems = computed(() => Object.entries(nav.value).map(([key, name]) => ({ id: key, name })))

const props = defineProps({
  portfolioName: {
    type: String,
    default: 'ALMEIDA ALHADA Ruben'
  }
})

const { isMobileMenuOpen, activeSection, toggleMobileMenu, handleNavClick } = useNavigation(navItems.value)

</script>

<template>
  <!-- Navbar with responsive classes -->
  <nav
    class="fixed top-0 w-full z-50 bg-white/80 dark:bg-main-gui-color-dark/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
      <!-- Portfolio name - responsive text size -->
      <div
        class="font-extrabold text-xl sm:text-2xl max-sm:text-sm text-highlight-color cursor-default  max-w-[200px] sm:max-w-none">
        {{ portfolioName }}
      </div>

      <!-- Desktop Menu - hidden on mobile -->
      <div class="hidden md:flex space-x-3 lg:space-x-6">
        <a v-for="item in navItems" :key="item.id" @click.prevent="handleNavClick(item.id)"
          class="cursor-pointer relative text-base lg:text-lg text-gray-700 dark:text-main-text-color-dark hover:text-highlight-color dark:hover:text-highlight-color transition duration-300"
          :class="{ 'text-highlight-color dark:text-highlight-color': activeSection === item.id }">
          {{ item.name }}
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-highlight-color scale-x-0 group-hover:scale-x-100 transition-transform"
            :class="{ 'scale-x-100': activeSection === item.id }">
          </span>
        </a>
      </div>

      <!-- Icons container -->
      <div class="flex items-center space-x-2 sm:space-x-4">
        <LanguageSwitcher />
        <DarkModeSwitcher/>
        

        <!-- Mobile menu button -->
        <button class="md:hidden p-1.5 sm:p-2 text-gray-700 dark:text-main-text-color-dark" @click="toggleMobileMenu">
          <svg v-if="!isMobileMenuOpen" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
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
      <a v-for="item in navItems" :key="item.id" @click.prevent="handleNavClick(item.id)"
        class="block py-2.5 text-base sm:text-lg text-gray-700 dark:text-main-text-color-dark hover:text-highlight-color dark:hover:text-highlight-color transition duration-300"
        :class="{ 'text-highlight-color dark:text-highlight-color': activeSection === item.id }">
        {{ item.name }}
      </a>
    </div>
  </nav>
</template>
