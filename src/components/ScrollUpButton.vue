<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showThreshold = 500
const isVisible = ref(false)

const checkScroll = () => {
  isVisible.value = window.scrollY > showThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => window.addEventListener('scroll', checkScroll))
onUnmounted(() => window.removeEventListener('scroll', checkScroll))
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300 ease-in-out"
    leave-active-class="transition-opacity duration-300 ease-in-out"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-3 bg-white dark:bg-main-gui-color-dark 
             rounded-full shadow-lg hover:shadow-xl z-50 group 
             transition-all duration-300 scale-animation"
      aria-label="Scroll to top"
    >
      <svg
        class="w-6 h-6 text-highlight-color transform transition-transform duration-300 
               group-hover:-translate-y-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.scale-animation:active {
  transform: scale(0.95);
}
</style>
