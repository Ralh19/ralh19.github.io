<script setup>
import { Transition } from 'vue'
import { useTrollEffect } from '@/composables/useTrollEffect'
import { useTranslations } from '@/composables/useTranslations'

const { showTroll, displayTroll } = useTrollEffect()
const { projects } = useTranslations()
</script>

<template>
  <!-- Troll overlay -->
  <Transition 
    enter-active-class="transition-all duration-300" 
    leave-active-class="transition-all duration-300"
    enter-from-class="opacity-0 scale-95" 
    leave-to-class="opacity-0 scale-95">
    <div v-if="showTroll" class="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      <img src="/images/troll.png" alt="troll" class="w-screen h-screen object-cover" />
    </div>
  </Transition>

  <section id="projects" class="py-20 bg-gray-50 dark:bg-main-background-color-dark">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16 dark:text-white">
        <span class="text-highlight-color">&lt;</span>
        {{ projects.title }}
        <span class="text-highlight-color">/&gt;</span>
      </h2>

      <div class="flex flex-col gap-12">
        <div v-for="(project, index) in projects.items" :key="project.title"
          class="bg-white dark:bg-main-gui-color-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="flex flex-col lg:flex-row" :class="{ 'lg:flex-row-reverse': index % 2 === 1 }">
            <div class="flex-1 p-8 flex flex-col justify-center">
              <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-main-text-color-dark">
                {{ project.title }}
              </h3>

              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech"
                  class="px-3 py-1 bg-gray-100 dark:bg-main-background-color-dark text-gray-700 dark:text-main-text-color-dark rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>

              <p class="text-gray-600 dark:text-main-text-color-dark mb-6">
                {{ project.description }}
              </p>

              <div class="flex gap-4">
                <a v-if="project.links.github" :href="project.links.github" target="_blank"
                  class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-main-gui-color-darker text-white rounded-lg hover:bg-gray-800 dark:hover:bg-main-background-color-dark transition-colors">
                  Github
                </a>

                <button v-if="project.title === projects.portfolioTitle" @click="displayTroll"
                  class="inline-flex items-center gap-2 px-4 py-2 bg-highlight-color text-white rounded-lg hover:bg-highlight-color/90 transition-colors">
                  {{ projects.liveDemo }}
                </button>

                <a v-else-if="project.links.demo" :href="project.links.demo" target="_blank"
                  class="inline-flex items-center gap-2 px-4 py-2 bg-highlight-color text-white rounded-lg hover:bg-highlight-color/90 transition-colors">
                  {{ projects.liveDemo }}
                </a>
              </div>
            </div>

            <div class="lg:w-1/2 relative h-[400px] overflow-hidden dark:bg-main-gui-color-darker">
              <img :src="project.imageUrl" :alt="project.title"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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
