<script setup>
import TechCard from './TechCard.vue'

defineProps({
  stack: {
    type: Object,
    required: true
  },
  colorClass: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="relative group">
    <div
      class="bg-white dark:bg-main-gui-color-dark rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <!-- Titre -->
      <div
        :class="['px-6 py-4 rounded-t-2xl flex items-center gap-3', colorClass]"
      >
        <h3 class="text-xl font-bold text-white">{{ stack.title }}</h3>
        <div class="h-1 flex-grow rounded-full bg-white/20"></div>
      </div>

      <!-- Technologies -->
      <div class="p-6">
        <div class="flex flex-wrap justify-center gap-6">
          <TechCard
            v-for="tech in stack.technologies"
            :key="tech.title"
            :tech="tech"
          />
        </div>
      </div>
    </div>
  </div>
</template>
