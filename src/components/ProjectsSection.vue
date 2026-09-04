<script setup>
import { onBeforeUnmount, onMounted, ref, Transition } from 'vue'
import { useTrollEffect } from '@/composables/useTrollEffect'
import { useTranslations } from '@/composables/useTranslations'
import ProjectCard from '@/components/ProjectCard.vue'
import SectionTitle from './SectionTitle.vue'

const { showTroll, displayTroll } = useTrollEffect()
const { projects } = useTranslations()
const selectedVideoUrl = ref('')

const displayVideo = (videoUrl) => {
  selectedVideoUrl.value = videoUrl
  document.body.style.overflow = 'hidden'
}

const closeVideo = () => {
  selectedVideoUrl.value = ''
  document.body.style.overflow = ''
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && selectedVideoUrl.value) {
    closeVideo()
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
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

  <div
    v-if="selectedVideoUrl"
    class="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80"
    role="dialog"
    aria-modal="true"
    @click.self="closeVideo"
  >
    <div class="relative w-full sm:w-[75vw] aspect-video bg-black">
      <iframe
        :src="selectedVideoUrl"
        title="Project video demo"
        class="absolute inset-0 h-full w-full"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <button
      type="button"
      aria-label="Close video"
      class="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/70 text-2xl text-white transition-colors hover:bg-highlight-color"
      @click="closeVideo"
    >
      <i class="bi bi-x-lg" aria-hidden="true"></i>
    </button>
  </div>

  <section id="projects" class="py-20 bg-gray-50 dark:bg-main-background-color-dark" v-bind="$attrs">
    <div class="max-w-7xl mx-auto px-4">
      <SectionTitle :title="projects.title" />

      <div class="flex flex-col gap-12">
        <ProjectCard
          v-for="(project, index) in projects.items"
          :key="project.title"
          :project="project"
          :index="index"
          :portfolioTitle="projects.portfolioTitle"
          :liveDemoText="projects.liveDemo"
          :onDisplayTroll="displayTroll"
          :onDisplayVideo="displayVideo"
        />
      </div>
    </div>
  </section>
</template>

