// composables/useNavigation.js
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export function useNavigation(navItems) {
  const isMobileMenuOpen = ref(false)
  const activeSection = ref(navItems[0]?.id || '')

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const handleNavClick = async (id) => {
    isMobileMenuOpen.value = false
    await nextTick()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const updateActiveSection = () => {
    const scrollY = window.scrollY
    const offset = 80

    for (let i = navItems.length - 1; i >= 0; i--) {
      const el = document.getElementById(navItems[i].id)
      if (el && scrollY + offset >= el.offsetTop) {
        activeSection.value = navItems[i].id
        break
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return {
    isMobileMenuOpen,
    activeSection,
    toggleMobileMenu,
    handleNavClick
  }
}
