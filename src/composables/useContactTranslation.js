import { useI18n } from 'vue-i18n'

export function useContactTranslation() {
  const { t } = useI18n()
  
  return {
    t
  }
}