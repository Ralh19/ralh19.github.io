import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useEducationTranslation() {
  const { t } = useI18n()

  const degrees = computed(() => [
    {
      title: t('education.degree1.title'),
      school: t('education.degree1.school'),
      description: t('education.degree1.description'),
      path: '/images/degrees/comming_soon.jpg',
      date: '2025'
    },
    {
      title: t('education.degree2.title'),
      school: t('education.degree2.school'),
      description: t('education.degree2.description'),
      path: '/images/degrees/pix.jpg',
      date: '2025'
    },
    {
      title: t('education.degree3.title'),
      school: t('education.degree3.school'),
      description: t('education.degree3.description'),
      path: '/images/degrees/rgpd5.jpg',
      date: '2024'
    },
    {
      title: t('education.degree4.title'),
      school: t('education.degree4.school'),
      description: t('education.degree4.description'),
      path: '/images/degrees/anssi.jpg',
      date: '2023'
    },
    {
      title: t('education.degree5.title'),
      school: t('education.degree5.school'),
      description: t('education.degree5.description'),
      path: '/images/degrees/xamk.jpg',
      date: '2023'
    },
    {
      title: t('education.degree6.title'),
      school: t('education.degree6.school'),
      description: t('education.degree6.description'),
      path: '/images/degrees/bac.png',
      date: '2022'
    }
  ])

  return {
    degrees,
    t
  }
}