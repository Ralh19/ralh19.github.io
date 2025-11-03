<script setup>
import { Transition } from 'vue'
import { useTrollEffect } from '@/composables/useTrollEffect'
import { useTranslations } from '@/composables/useTranslations'
import ProjectCard from '@/components/ProjectCard.vue'

const { showTroll, displayTroll } = useTrollEffect()
const { projects } = useTranslations()
</script>

<template>
  <!-- Troll overlay -->
  <Transition
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-300"
    enter-from-class="opacity-0 scale-95"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="showTroll"
      class="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
    >
      <img src="/images/troll.png" alt="troll" class="w-screen h-screen object-fill" />
    </div>
  </Transition>

  <section id="projects" class="py-20 bg-gray-50 dark:bg-main-background-color-dark" v-bind="$attrs">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16 dark:text-white">
        <span class="text-highlight-color">&lt;</span>
        {{ projects.title }}
        <span class="text-highlight-color">/&gt;</span>
      </h2>

      <div class="flex flex-col gap-12">
        <ProjectCard
          v-for="(project, index) in projects.items"
          :key="project.title"
          :project="project"
          :index="index"
          :portfolioTitle="projects.portfolioTitle"
          :liveDemoText="projects.liveDemo"
          :onDisplayTroll="displayTroll"
        />
      </div>
    </div>
  </section>
</template>

