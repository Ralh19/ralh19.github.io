import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      stacks: 'My Stacks',
      contact: 'Contact'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      experience: 'Expérience',
      education: 'Formation',
      projects: 'Projets',
      stacks: 'Mes Stacks',
      contact: 'Contact'
    }
  }
}

export const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'en',
  fallbackLocale: 'en',
  messages
})