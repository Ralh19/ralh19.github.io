<script setup>
import { useTranslations } from '@/composables/useTranslations'
import Container from '@/components/Container.vue'
import StackCategory from '@/components/StackCategory.vue'

const { stacks, t } = useTranslations()

const stackColors = {
  frontend: 'bg-highlight-color dark:bg-main-gui-color-darker',
  backend: 'bg-highlight-color dark:bg-main-gui-color-darker',
  database: 'bg-highlight-color dark:bg-main-gui-color-darker',
  tools: 'bg-highlight-color dark:bg-main-gui-color-darker'
}

const getStackColor = (stackTitle) => {
  const key = ['frontend', 'backend', 'database', 'tools'].find(k =>
    t(`stacks.${k}.title`) === stackTitle
  )
  return stackColors[key] || stackColors.frontend
}
</script>

<template>
  <section id="stacks" class="py-20 bg-gray-50 dark:bg-main-background-color-dark">
    <Container>
      <h2 class="mb-16 text-4xl font-bold text-center dark:text-white">
        <span class="text-highlight-color">&lt;</span>
        {{ t('stacks.title') }}
        <span class="text-highlight-color">/&gt;</span>
      </h2>

      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StackCategory
            v-for="stack in stacks"
            :key="stack.title"
            :stack="stack"
            :color-class="getStackColor(stack.title)"
          />
        </div>
      </div>
    </Container>
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
