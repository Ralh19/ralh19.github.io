import { useI18n } from "vue-i18n";
import { computed } from "vue";

export function useTranslations() {
  const { t, locale } = useI18n();

  const setLocale = (newLocale) => {
    locale.value = newLocale;
  };

  const nav = computed(() => ({
    home: t("nav.home"),
    experience: t("nav.experience"),
    education: t("nav.education"),
    projects: t("nav.projects"),
    stacks: t("nav.stacks"),
    contact: t("nav.contact"),
  }));

  const hero = computed(() => ({
    greeting: t("hero.greeting"),
    description: t("hero.description"),
    hireMe: t("hero.hireMe"),
    resume: t("hero.resume"),
    scrollDown: t("hero.scrollDown"),
    location: t("hero.location"),
  }));

  const experience = computed(() => ({
    title: t("experience.title"),
    experiences: [
      {
        title: t("experience.role"),
        company: "Etudes et Solutions - Toulon",
        company_link: "https://www.etudesetsolutions.fr/",
        period: t("experience.period1"),
        achievements: [t("experience.achievement1")],
        technologies: ["Django", "Python", "JavaScript", "SQLite"],
      },
      {
        title: t("experience.role"),
        company: "Bonifay - La Garde",
        company_link: "https://www.bonifay.fr/",
        period: t("experience.period2"),
        achievements: [t("experience.achievement2")],
        technologies: ["Symfony", "PHP", "JavaScript", "Bootstrap", "MySQL"],
      },
    ],
  }));
  
  const education = computed(() => ({
    title: t("education.title"),
    previous: t("education.previous"),
    next: t("education.next"),
    close: t("education.close"),
    degrees: [
      {
        title: t("education.degree1.title"),
        school: t("education.degree1.school"),
        description: t("education.degree1.description"),
        path: "/images/degrees/comming_soon.jpg",
        date: "2025",
      },
      {
        title: t("education.degree2.title"),
        school: t("education.degree2.school"),
        description: t("education.degree2.description"),
        path: "/images/degrees/pix.jpg",
        date: "2025",
      },
      {
        title: t("education.degree3.title"),
        school: t("education.degree3.school"),
        description: t("education.degree3.description"),
        path: "/images/degrees/rgpd5.jpg",
        date: "2024",
      },
      {
        title: t("education.degree4.title"),
        school: t("education.degree4.school"),
        description: t("education.degree4.description"),
        path: "/images/degrees/anssi.jpg",
        date: "2023",
      },
      {
        title: t("education.degree5.title"),
        school: t("education.degree5.school"),
        description: t("education.degree5.description"),
        path: "/images/degrees/xamk.jpg",
        date: "2023",
      },
      {
        title: t("education.degree6.title"),
        school: t("education.degree6.school"),
        description: t("education.degree6.description"),
        path: "/images/degrees/bac.png",
        date: "2022",
      },
    ],
  }));
  const projects = computed(() => ({
    title: t("projects.title"),
    liveDemo: t("projects.liveDemo"),
    portfolioTitle: t("projects.portfolio.title"),
    items: [
      {
        title: t("projects.portfolio.title"),
        description: t("projects.portfolio.description"),
        technologies: [
          "Vue.js 3",
          "Javascript",
          "TailwindCSS",
          "NodeJS",
          "Vite",
          "Git",
        ],
        imageUrl: "/images/projects/portfolio_screen.png",
        links: { github: "https://github.com/Ralh19/ralh19.github.io" },
      },
      {
        title: t("projects.merlin.title"),
        description: t("projects.merlin.description"),
        technologies: ["Unity Engine", "C#", "Krita", "Git"],
        imageUrl: "/images/projects/merlin_screen.png",
        links: {
          github: "https://github.com/Ralh19/Merlin-s-Demon-War",
          demo: "#",
        },
      },
      {
        title: t("projects.snake.title"),
        description: t("projects.snake.description"),
        technologies: ["Unity Engine", "C#", "Krita", "Git"],
        imageUrl: "/images/projects/snake_screen.jpeg",
        links: { github: "https://github.com/Ralh19/SnakeGame", demo: "#" },
      },
      {
        title: t("projects.gsb.title"),
        description: t("projects.gsb.description"),
        technologies: ["PHP", "Javascript", "MySQL", "Bootstrap"],
        imageUrl: "/images/projects/gsb_screen.png",
        links: { github: "https://github.com/Ralh19/GSB", demo: "#" },
      },
    ],
  }));
  const stacks = computed(() => [
    {
      title: t("stacks.frontend.title"),
      technologies: [
        { title: "Javascript", path: "/images/tech/js_ico.png" },
        { title: "TypeScript", path: "/images/tech/ts_ico.png" },
        { title: "Vue.js", path: "/images/tech/vuejs_ico.png" },
        { title: "TailwindCSS", path: "/images/tech/tw_ico.png" },
        { title: "Bootstrap", path: "/images/tech/bootstrap_ico.png" },
      ],
    },
    {
      title: t("stacks.backend.title"),
      technologies: [
        { title: "Node.js", path: "/images/tech/nodejs_ico.png" },
        { title: "Symfony", path: "/images/tech/symfony_ico.png" },
        { title: "Tauri", path: "/images/tech/tauri_ico.png" },
        { title: "C#", path: "/images/tech/cs_ico.png" },
        { title: "Rust", path: "/images/tech/rust_ico.png" },
      ],
    },
    {
      title: t("stacks.database.title"),
      technologies: [
        { title: "MySQL", path: "/images/tech/mysql_ico.png" },
        { title: "SQLite", path: "/images/tech/sqlite_ico.png" },
      ],
    },
    {
      title: t("stacks.tools.title"),
      technologies: [
        { title: "Git", path: "/images/tech/git_ico.png" },
        { title: "Docker", path: "/images/tech/docker_ico.png" },
        { title: "Unity", path: "/images/tech/unity_ico.png" },
      ],
    },
  ]);
  const contact = computed(() => ({
    title: t("contact.title"),
    subtitle: t("contact.subtitle"),
    form: {
      firstName: t("contact.form.firstName"),
      lastName: t("contact.form.lastName"),
      email: t("contact.form.email"),
      subject: t("contact.form.subject"),
      message: t("contact.form.message"),
      placeholders: {
        firstName: t("contact.form.placeholders.firstName"),
        lastName: t("contact.form.placeholders.lastName"),
        email: t("contact.form.placeholders.email"),
        subject: t("contact.form.placeholders.subject"),
        message: t("contact.form.placeholders.message"),
      },
    },
    status: {
      sending: t("contact.status.sending"),
      send: t("contact.status.send"),
      success: t("contact.status.success"),
      error: t("contact.status.error"),
    },
  }));
  const footer = computed(() => t("footer"));

  return {
    locale,
    setLocale,
    nav,
    hero,
    experience,
    education,
    projects,
    stacks,
    contact,
    footer,
    t,
  };
}
