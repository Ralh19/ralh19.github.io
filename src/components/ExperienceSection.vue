<script setup>
import { useExperienceTranslation } from '@/composables/translation_composables/useExperienceTranslation'

const { experiences, t } = useExperienceTranslation()
</script>

<template>
    <section id="experience" class="py-20 bg-white dark:bg-main-background-color-dark">
        <container>
            <h2 class="mb-10 dark:text-white">
                <span class="text-highlight-color">&lt;</span>
                {{ t('experience.title') }}
                <span class="text-highlight-color">/&gt;</span>
            </h2>

            <div class="relative max-w-4xl mx-auto px-6">
                <!-- Timeline line -->
                <div class="absolute left-0 top-0 h-full w-0.5 bg-highlight-color"></div>

                <div class="space-y-12">
                    <!-- Experience Item -->
                    <section v-for="(job, index) in experiences" :key="index" class="relative pl-8">
                        <!-- Timeline dot -->
                        <div class="absolute left-[-6px] top-2 w-3 h-3 bg-highlight-color rounded-full"></div>

                        <div class="bg-white dark:bg-main-gui-color-dark p-6 rounded-lg shadow-md scale-animation-sm">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 dark:text-main-text-color-dark">
                                        {{ job.title }}
                                    </h3>
                                    <a :href="job.company_link" 
                                       target="_blank"
                                       class="text-gray-600 dark:text-main-text-color-dark hover:text-highlight-color">
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
                                <span v-for="(tech, i) in job.technologies" :key="i"
                                    class="px-3 py-1 bg-gray-100 dark:bg-main-background-color-dark text-gray-700 dark:text-main-text-color-dark rounded-full text-sm">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </container>
    </section>
</template>
