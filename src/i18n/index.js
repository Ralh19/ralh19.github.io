import { createI18n } from 'vue-i18n'

export const messages = {
  en: {
    nav: {
      home: 'Home',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      stacks: 'My Stacks',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hello, I'm",
      description: "Developer passionate about creating intuitive and user-centric digital experiences. Focused on building modern web applications with clean architecture and pixel-perfect designs. Always eager to learn and embrace new challenges.",
      hireMe: "Hire Me",
      resume: "Resume",
      scrollDown: "Scroll Down",
      location: "France"
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
    },
    hero: {
      greeting: "Bonjour, je suis",
      description: "Développeur passionné par la création d'expériences numériques intuitives et centrées sur l'utilisateur. Focalisé sur la construction d'applications web modernes avec une architecture propre et des designs précis. Toujours désireux d'apprendre et de relever de nouveaux défis.",
      hireMe: "Me Recruter",
      resume: "CV",
      scrollDown: "Défiler vers le bas",
      location: "France"
    }
  }
}

export const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'en',
  fallbackLocale: 'en',
  messages
})