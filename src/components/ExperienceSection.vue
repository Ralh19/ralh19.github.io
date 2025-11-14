<script setup>
import { useTranslations } from '@/composables/useTranslations'
import Container from '@/components/Container.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

const { experience } = useTranslations()
</script>

<template>
  <section id="experience" class="py-20 bg-white dark:bg-main-background-color-dark">
    <Container>
     <SectionTitle :title="experience.title" />

      <div class="relative max-w-4xl mx-auto px-6">
        <!-- Timeline line -->
        <div class="absolute left-0 top-0 h-full w-0.5 bg-highlight-color"></div>

        <div class="space-y-12">
          <ExperienceCard
            v-for="(job, index) in experience.experiences"
            :key="index"
            :job="job"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped></style>
