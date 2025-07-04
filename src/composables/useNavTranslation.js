import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useNavTranslation() {
  const { t } = useI18n()

  const navItems = computed(() => [
    { id: 'home', name: t('nav.home') },
    { id: 'experience', name: t('nav.experience') },
    { id: 'education', name: t('nav.education') },
    { id: 'projects', name: t('nav.projects') },
    { id: 'stacks', name: t('nav.stacks') },
    { id: 'contact', name: t('nav.contact') }
  ])

  return {
    navItems
  }
}