// src/composables/useModal.js
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

export function useModal(items) {
  const isModalOpen = ref(false)
  const currentIndex = ref(0)
  const slideDirection = ref('right')

  const openModal = (index) => {
    currentIndex.value = index
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
  }

  const showNext = () => {
    slideDirection.value = 'right'
    currentIndex.value = (currentIndex.value + 1) % items.length
  }

  const showPrevious = () => {
    slideDirection.value = 'left'
    currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
  }

  const toggleScroll = (disable) => {
    document.body.style.overflow = disable ? 'hidden' : ''
  }

  const handleKeydown = (e) => {
    if (!isModalOpen.value) return
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowRight') showNext()
    if (e.key === 'ArrowLeft') showPrevious()
  }

  watch(isModalOpen, (val) => {
    toggleScroll(val)
  })

  onMounted(() => window.addEventListener('keydown', handleKeydown))
  onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))

  return {
    isModalOpen,
    currentIndex,
    slideDirection,
    openModal,
    closeModal,
    showNext,
    showPrevious,
  }
}
