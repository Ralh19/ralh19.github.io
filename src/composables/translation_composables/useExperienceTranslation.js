import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useExperienceTranslation() {
  const { t } = useI18n()

  const experiences = computed(() => [
    {
      title: t('experience.intern'),
      company: 'Etudes et Solutions - Toulon',
      company_link: 'https://www.etudesetsolutions.fr/',
      period: t('experience.period1'),
      achievements: [
        t('experience.achievement1')
      ],
      technologies: ['Django', 'Python', 'JavaScript', 'SQLite']
    },
    {
      title: t('experience.intern'),
      company: 'Bonifay - La Garde',
      company_link: 'https://www.bonifay.fr/',
      period: t('experience.period2'),
      achievements: [
        t('experience.achievement2')
      ],
      technologies: ['Symfony', 'PHP', 'JavaScript', 'Bootstrap', 'MySQL']
    }
  ])

  return {
    experiences,
    t
  }
}