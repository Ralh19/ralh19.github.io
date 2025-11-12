<script setup>
defineProps({
  tech: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="group/tech w-[140px]"
  >
    <div
      class="relative bg-gray-50 dark:bg-main-background-color-dark rounded-xl p-4 
             hover:bg-gray-100 dark:hover:bg-main-gui-color-darker
             transition-all duration-300 hover:-translate-y-1"
    >
      <div class="flex flex-col items-center gap-3">
        <div
          class="relative w-14 h-14 flex items-center justify-center
                 bg-white dark:bg-main-gui-color-dark rounded-lg shadow-sm p-2"
        >
          <img
            :src="tech.path"
            :alt="tech.title"
            class="w-10 h-10 object-contain group-hover/tech:scale-110 transition-transform duration-300"
          />
        </div>

        <span
          class="text-sm font-medium text-gray-700 dark:text-main-text-color-dark text-center
                 group-hover/tech:text-highlight-color transition-colors"
        >
          {{ tech.title }}
        </span>
      </div>
    </div>
  </div>
</template>
