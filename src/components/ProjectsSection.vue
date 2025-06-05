<script setup>
const projects = [
  {
    title: 'PORTFOLIO',
    description: 'Personal portfolio website built with Vue.js 3 and TailwindCSS for the styling, featuring responsive design, project showcase, and modern UI components. Demonstrates proficiency in frontend development.',
    technologies: ['Vue.js 3', 'Javascript', 'TailwindCSS', 'NodeJS', 'Vite', 'Git'],
    imageUrl: '/images/projects/gainz.png',
    links: {
      github: 'https://github.com/Ralh19/ralh19.github.io',
    }
  },
  {
    title: 'Merlin\'s Demon War',
    description: 'Interactive web application that simulates sorting algorithms with visual representation. Helps students learn algorithm complexity and behavior.',
    technologies: ['Unity Engine', 'C#', 'Krita', 'Git'],
    imageUrl: '/images/projects/merlin_screen.png',
    links: {
      github: 'https://github.com/Ralh19/Merlin-s-Demon-War',
      demo: '#'
    }
  },
  {
    title: 'Mobile Snake Game',
    description: 'A React Native/Expo mobile app for fitness tracking and social networking. Features RESTful API on AWS with API Gateway and Lambda functions.',
    technologies: ['Unity Engine', 'C#', 'Krita', 'Git'],
    imageUrl: '/images/projects/snake_screen.jpeg',
    links: {
      github: 'https://github.com/Ralh19/SnakeGame',
      demo: '#'
    }
  },
  {
    title: 'The Return',
    description: 'A React Native/Expo mobile app for fitness tracking and social networking. Features RESTful API on AWS with API Gateway and Lambda functions.',
    technologies: ['Unity Engine', 'C#', 'Git'],
    imageUrl: '/images/projects/return_screen.png',
    links: {
      github: 'https://github.com/Ralh19/TheReturn',
      demo: '#'
    }
  },
  {
    title: 'GSB',
    description: 'A React Native/Expo mobile app for fitness tracking and social networking. Features RESTful API on AWS with API Gateway and Lambda functions.',
    technologies: ['React Native', 'TypeScript', 'Python', 'AWS', 'Clerk', 'Tamagui'],
    imageUrl: '/images/projects/gsb_screen.png',
    links: {
      github: 'https://github.com/Ralh19/GSB',
      demo: '#'
    }
  }
]
</script>


<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-main-background-color-dark">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16 dark:text-white">
        <span class="text-highlight-color">&lt;</span>
        Projects
        <span class="text-highlight-color">/&gt;</span>
      </h2>

      <div class="flex flex-col gap-12">
        <div v-for="(project, index) in projects" :key="project.title"
          class="bg-white dark:bg-main-gui-color-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <!-- Project Container -->
          <div class="flex flex-col lg:flex-row" :class="{ 'lg:flex-row-reverse': index % 2 === 1 }">
            <!-- Project Content -->
            <div class="flex-1 p-8 flex flex-col justify-center">
              <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-main-text-color-dark">
                {{ project.title }}
              </h3>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech"
                  class="px-3 py-1 bg-gray-100 dark:bg-main-background-color-dark text-gray-700 dark:text-main-text-color-dark rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>

              <p class="text-gray-600 dark:text-main-text-color-dark mb-6">
                {{ project.description }}
              </p>

              <!-- Project Links -->
              <div class="flex gap-4">
                <a v-if="project.links.github" 
                   :href="project.links.github" 
                   target="_blank"
                   class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-main-gui-color-darker text-white rounded-lg hover:bg-gray-800 dark:hover:bg-main-background-color-dark transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  Github
                </a>
                <a v-if="project.links.demo" 
                   :href="project.links.demo" 
                   target="_blank"
                   class="inline-flex items-center gap-2 px-4 py-2 bg-highlight-color text-white rounded-lg hover:bg-highlight-color/90 transition-colors">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>

            <!-- Project Image -->
            <div class="lg:w-1/2 relative h-[400px] overflow-hidden dark:bg-main-gui-color-darker">
              <img 
                :src="project.imageUrl" 
                :alt="project.title" 
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.grid {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
