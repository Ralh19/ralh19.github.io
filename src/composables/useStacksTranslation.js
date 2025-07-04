import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useStacksTranslation() {
  const { t } = useI18n()

  const stacks = computed(() => [
    {
      title: t('stacks.frontend.title'),
      technologies: [
        { title: 'Javascript', path: '/images/tech/js_ico.png' },
        { title: 'TypeScript', path: '/images/tech/ts_ico.png' },
        { title: 'Vue.js', path: '/images/tech/vuejs_ico.png' },
        { title: 'TailwindCSS', path: '/images/tech/tw_ico.png' },
        { title: 'Bootstrap', path: '/images/tech/bootstrap_ico.png' }
      ]
    },
    {
      title: t('stacks.backend.title'),
      technologies: [
        { title: 'Node.js', path: '/images/tech/nodejs_ico.png' },
        { title: 'Symfony', path: '/images/tech/symfony_ico.png' },
        { title: 'Tauri', path: '/images/tech/tauri_ico.png' },
        { title: 'C#', path: '/images/tech/cs_ico.png' },
        { title: 'Rust', path: '/images/tech/rust_ico.png' }
      ]
    },
    {
      title: t('stacks.database.title'),
      technologies: [
        { title: 'MySQL', path: '/images/tech/mysql_ico.png' },
        { title: 'SQLite', path: '/images/tech/sqlite_ico.png' }
      ]
    },
    {
      title: t('stacks.tools.title'),
      technologies: [
        { title: 'Git', path: '/images/tech/git_ico.png' },
        { title: 'Docker', path: '/images/tech/docker_ico.png' },
        { title: 'Unity', path: '/images/tech/unity_ico.png' }
      ]
    }
  ])

  return {
    stacks,
    t
  }
}