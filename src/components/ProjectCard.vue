<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  portfolioTitle: {
    type: String,
    required: true
  },
  liveDemoText: {
    type: String,
    required: true
  },
  onDisplayTroll: {
    type: Function,
    required: false
  }
})
</script>

<template>
  <div
    class="bg-white dark:bg-main-gui-color-dark rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div class="flex flex-col lg:flex-row" :class="{ 'lg:flex-row-reverse': index % 2 === 1 }">
      <div class="flex-1 p-8 flex flex-col justify-center">
        <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-main-text-color-dark">
          {{ project.title }}
        </h3>

        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-3 py-1 bg-gray-100 dark:bg-main-background-color-dark text-gray-700 dark:text-main-text-color-dark rounded-full text-sm"
          >
            {{ tech }}
          </span>
        </div>

        <p class="text-gray-600 dark:text-main-text-color-dark mb-6">
          {{ project.description }}
        </p>

        <div class="flex gap-4">
          <a
            v-if="project.links.github"
            :href="project.links.github"
            target="_blank"
            class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-main-gui-color-darker text-white rounded-lg hover:bg-gray-800 dark:hover:bg-main-background-color-dark transition-colors"
          >
            <i class="bi bi-github text-xl"></i> Github
          </a>

          <button
            v-if="project.title === portfolioTitle"
            @click="onDisplayTroll && onDisplayTroll()"
            class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-highlight-color text-white rounded-lg hover:bg-highlight-color/90 transition-colors"
          >
            <i class="bi bi-file-earmark-play text-xl"></i> {{ liveDemoText }}
          </button>

          <a
            v-else-if="project.links.demo"
            :href="project.links.demo"
            target="_blank"
            class="inline-flex items-center gap-2 px-4 py-2 bg-highlight-color text-white rounded-lg hover:bg-highlight-color/90 transition-colors"
          >
            <i class="bi bi-file-earmark-play text-xl"></i> {{ liveDemoText }}
          </a>
        </div>
      </div>

      <div class="lg:w-1/2 relative h-[400px] overflow-hidden dark:bg-main-gui-color-darker">
        <img
          :src="project.imageUrl"
          :alt="project.title"
          class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
    </div>
  </div>
</template>
