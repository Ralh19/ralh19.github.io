<script setup>
const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="relative pl-8">
    <!-- Timeline dot -->
    <div class="absolute left-[-6px] top-2 w-3 h-3 bg-highlight-color rounded-full"></div>

    <div class="bg-white dark:bg-main-gui-color-dark p-6 rounded-lg shadow-md scale-animation-sm">
      <div class="flex justify-between items-start mb-4">
        <div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-main-text-color-dark">
            {{ job.title }}
          </h3>
          <a
            :href="job.company_link"
            target="_blank"
            class="text-gray-600 dark:text-main-text-color-dark hover:text-highlight-color underline underline-offset-4"
          >
            {{ job.company }}
          </a>
        </div>
        <span class="text-gray-500 dark:text-main-text-color-dark">{{ job.period }}</span>
      </div>

      <ul class="list-none list-inside space-y-3 text-gray-700 dark:text-main-text-color-dark mb-4">
        <li v-for="(achievement, i) in job.achievements" :key="i">
          {{ achievement }}
        </li>
      </ul>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="(tech, i) in job.technologies"
          :key="i"
          class="px-3 py-1 bg-gray-100 dark:bg-main-background-color-dark text-gray-700 dark:text-main-text-color-dark rounded-full text-sm"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </section>
</template>
