// composables/useTrollEffect.js
import { ref, onUnmounted } from 'vue'

export function useTrollEffect(duration = 3000) {
  const showTroll = ref(false)
  let trollTimer = null

  const displayTroll = () => {
    showTroll.value = true

    // Clear any existing timer
    if (trollTimer) {
      clearTimeout(trollTimer)
    }

    // Hide troll after specified duration
    trollTimer = setTimeout(() => {
      showTroll.value = false
    }, duration)
  }

  onUnmounted(() => {
    if (trollTimer) {
      clearTimeout(trollTimer)
    }
  })

  return {
    showTroll,
    displayTroll
  }
}
