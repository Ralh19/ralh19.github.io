<script setup>
import { useStacksTranslation } from '@/composables/useStacksTranslation'

const { stacks, t } = useStacksTranslation()

// Updated to use highlight-color for all stacks in light mode
const stackColors = {
  'frontend': 'bg-highlight-color dark:bg-main-gui-color-darker',
  'backend': 'bg-highlight-color dark:bg-main-gui-color-darker',
  'database': 'bg-highlight-color dark:bg-main-gui-color-darker',
  'tools': 'bg-highlight-color dark:bg-main-gui-color-darker'
}

// Helper function remains the same
const getStackColor = (stackTitle) => {
  const key = Object.keys(t('stacks')).find(k => 
    k !== 'title' && t(`stacks.${k}.title`) === stackTitle
  )
  return stackColors[key] || stackColors.frontend
}
</script>

<template>
  <section id="stacks" class="py-20 bg-gray-50 dark:bg-main-background-color-dark">
    <container>
      <h2 class="mb-16 text-4xl font-bold text-center dark:text-white">
        <span class="text-highlight-color">&lt;</span>
        {{ t('stacks.title') }}
        <span class="text-highlight-color">/&gt;</span>
      </h2>

      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="stack in stacks" :key="stack.title" class="relative group">
            <!-- Category Card -->
            <div class="bg-white dark:bg-main-gui-color-dark rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <!-- Stack Header -->
              <div :class="['px-6 py-4 rounded-t-2xl flex items-center gap-3', getStackColor(stack.title)]">
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
                    <div class="relative bg-gray-50 dark:bg-main-background-color-dark rounded-xl p-4 
                              hover:bg-gray-100 dark:hover:bg-main-gui-color-darker
                              transition-all duration-300 hover:-translate-y-1">
                      <div class="flex flex-col items-center gap-3">
                        <!-- Icon Container -->
                        <div class="relative w-14 h-14 flex items-center justify-center
                                  bg-white dark:bg-main-gui-color-dark rounded-lg shadow-sm p-2">
                          <img :src="tech.path" 
                               :alt="tech.title" 
                               class="w-10 h-10 object-contain group-hover/tech:scale-110
                                     transition-transform duration-300" />
                        </div>
                        <!-- Tech Name -->
                        <span class="text-sm font-medium text-gray-700 dark:text-main-text-color-dark text-center
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