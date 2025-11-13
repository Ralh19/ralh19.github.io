<script setup>
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()
</script>

<template>
  <button
    class="p-1.5 sm:p-2 text-gray-500 dark:text-main-text-color-dark 
           hover:text-highlight-color dark:hover:text-highlight-color 
           transition-colors rounded-full hover:bg-gray-100 
           dark:hover:bg-main-background-color-dark"
    aria-label="Toggle theme"
    @click="toggleDark()"
  >
    <div class="relative w-5 h-5 sm:w-6 sm:h-6">
      <!-- Sun icon -->
      <svg
        class="absolute inset-0 transition-transform duration-500"
        :class="isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      <!-- Moon icon -->
      <svg
        class="absolute inset-0 transition-transform duration-500"
        :class="isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </div>
  </button>
</template>
