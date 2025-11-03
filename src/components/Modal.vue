<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  currentIndex: { type: Number, default: 0 },
  totalItems: { type: Number, default: 1 },
  disableScroll: { type: Boolean, default: true },
  closeOnClickOutside: { type: Boolean, default: true },
})

const emits = defineEmits(['close', 'next', 'prev'])

const slideDirection = ref('right')

// Gestion du scroll
const toggleScroll = (disable) => {
  if (!props.disableScroll) return
  document.body.style.overflow = disable ? 'hidden' : ''
}

// Gestion clavier
const handleKeydown = (e) => {
  if (!props.isOpen) return
  if (e.key === 'Escape') emits('close')
  if (e.key === 'ArrowRight') emits('next')
  if (e.key === 'ArrowLeft') emits('prev')
}

watch(() => props.isOpen, (val) => {
  toggleScroll(val)
})

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-black/80"
      @click="closeOnClickOutside && emits('close')"
    ></div>

    <!-- Modal Content -->
    <div class="relative z-10 w-full max-w-4xl mx-4 bg-white dark:bg-main-gui-color-dark rounded-xl overflow-hidden">
      
      <!-- Navigation Left -->
      <button
        v-if="totalItems > 1"
        @click.stop="emits('prev'); slideDirection.value = 'left'"
        class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-main-background-color-dark/80 p-2 rounded-full hover:bg-white dark:hover:bg-main-gui-color-dark transition-colors"
      >
        <span class="sr-only">Previous</span>
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Navigation Right -->
      <button
        v-if="totalItems > 1"
        @click.stop="emits('next'); slideDirection.value = 'right'"
        class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-main-background-color-dark/80 p-2 rounded-full hover:bg-white dark:hover:bg-main-gui-color-dark transition-colors"
      >
        <span class="sr-only">Next</span>
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Close Button -->
      <button
        @click="emits('close')"
        class="absolute top-4 right-4 text-white hover:text-highlight-color transition-colors z-10"
      >
        <span class="sr-only">Close</span>
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Slot for actual content -->
      <slot :slideDirection="slideDirection"></slot>
    </div>
  </div>
</template>
