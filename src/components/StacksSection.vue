<script setup>
const STACKS = [
  {
    title: 'Frontend',
    technologies: [
      {
        title: 'Javascript',
        path: '/images/tech/js_ico.png'
      },
      {
        title: 'TypeScript',
        path: '/images/tech/ts_ico.png'
      },
      {
        title: 'Vue.js',
        path: '/images/tech/vuejs_ico.png'
      },
      {
        title: 'TailwindCSS',
        path: '/images/tech/tw_ico.png'
      },
      {
        title: 'Bootstrap',
        path: '/images/tech/bootstrap_ico.png'
      }
    ]
  },
  {
    title: 'Backend',
    technologies: [
      {
        title: 'Node.js',
        path: '/images/tech/nodejs_ico.png'
      },
      {
        title: 'Symfony',
        path: '/images/tech/symfony_ico.png'
      },
      {
        title: 'Tauri',
        path: '/images/tech/tauri_ico.png'
      },
      {
        title: 'C#',
        path: '/images/tech/cs_ico.png'
      },
      {
        title: 'Rust',
        path: '/images/tech/rust_ico.png'
      }
    ]
  },
  {
    title: 'Database',
    technologies: [
      {
        title: 'MySQL',
        path: '/images/tech/mysql_ico.png'
      },
      {
        title: 'SQLite',
        path: '/images/tech/sqlite_ico.png'
      }
    ]
  },
  {
    title: 'Tools',
    technologies: [
      {
        title: 'Git',
        path: '/images/tech/git_ico.png'
      },
      {
        title: 'Docker',
        path: '/images/tech/docker_ico.png'
      },
      {
        title: 'Unity',
        path: '/images/tech/unity_ico.png'
      }
    ]
  }
];

const stackColors = {
  'Frontend': 'bg-stack-blue',
  'Backend': 'bg-stack-green',
  'Database': 'bg-stack-yellow',
  'Tools': 'bg-stack-purple'
}
</script>

<template>
  <section id="STACKS" class="py-20 bg-gray-50 dark:bg-main-background-color-dark">
    <container>
      <h2 class="mb-16 text-4xl font-bold text-center">
        <span class="text-highlight-color">&lt;</span>
        My Stacks
        <span class="text-highlight-color">/&gt;</span>
      </h2>

      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="stack in STACKS" :key="stack.title" class="relative group">
            <!-- Category Card -->
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <!-- Stack Header -->
              <div :class="['px-6 py-4 rounded-t-2xl flex items-center gap-3', stackColors[stack.title]]">
                <h3 class="text-xl font-bold text-white">{{ stack.title }}</h3>
                <div class="h-1 flex-grow rounded-full bg-white/20"></div>
              </div>

              <!-- Tech Grid -->
              <div class="p-6">
                <div class="flex flex-wrap justify-center gap-6">
                  <div v-for="tech in stack.technologies" 
                       :key="tech.title" 
                       class="group/tech w-[140px]">
                    <!-- Tech Item -->
                    <div class="relative bg-gray-50 rounded-xl p-4 hover:bg-gray-100
                                transition-all duration-300 hover:-translate-y-1">
                      <div class="flex flex-col items-center gap-3">
                        <!-- Icon Container -->
                        <div class="relative w-14 h-14 flex items-center justify-center
                                  bg-white rounded-lg shadow-sm p-2">
                          <img :src="tech.path" 
                               :alt="tech.title" 
                               class="w-10 h-10 object-contain group-hover/tech:scale-110
                                     transition-transform duration-300" />
                        </div>
                        <!-- Tech Name -->
                        <span class="text-sm font-medium text-gray-700 text-center
                                   group-hover/tech:text-highlight-color transition-colors">
                          {{ tech.title }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </section>
</template>

<style scoped>
.grid {
  animation: fadeIn 0.4s ease-out;
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