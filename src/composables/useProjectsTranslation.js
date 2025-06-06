import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useProjectsTranslation() {
  const { t } = useI18n()

  const projects = computed(() => [
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      technologies: ['Vue.js 3', 'Javascript', 'TailwindCSS', 'NodeJS', 'Vite', 'Git'],
      imageUrl: '/images/projects/portfolio_screen.png',
      links: {
        github: 'https://github.com/Ralh19/ralh19.github.io',
      }
    },
    {
      title: t('projects.merlin.title'),
      description: t('projects.merlin.description'),
      technologies: ['Unity Engine', 'C#', 'Krita', 'Git'],
      imageUrl: '/images/projects/merlin_screen.png',
      links: {
        github: 'https://github.com/Ralh19/Merlin-s-Demon-War',
        demo: '#'
      }
    },
    {
      title: t('projects.snake.title'),
      description: t('projects.snake.description'),
      technologies: ['Unity Engine', 'C#', 'Krita', 'Git'],
      imageUrl: '/images/projects/snake_screen.jpeg',
      links: {
        github: 'https://github.com/Ralh19/SnakeGame',
        demo: '#'
      }
    },
    {
      title: t('projects.return.title'),
      description: t('projects.return.description'),
      technologies: ['Unity Engine', 'C#', 'Git'],
      imageUrl: '/images/projects/return_screen.png',
      links: {
        github: 'https://github.com/Ralh19/TheReturn',
        demo: '#'
      }
    },
    {
      title: t('projects.gsb.title'),
      description: t('projects.gsb.description'),
      technologies: ['PHP', 'Javascript', 'MySQL', 'Bootstrap'],
      imageUrl: '/images/projects/gsb_screen.png',
      links: {
        github: 'https://github.com/Ralh19/GSB',
        demo: '#'
      }
    }
  ])

  return {
    projects,
    t
  }
}