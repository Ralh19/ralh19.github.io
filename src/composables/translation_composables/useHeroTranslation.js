import { useI18n } from 'vue-i18n'

export function useHeroTranslation() {
  const { t } = useI18n()
  
  return {
    t
  }
}