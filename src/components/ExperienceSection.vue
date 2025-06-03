<script setup>
const experiences = [
    {
        title: 'Intern',
        company: 'Etudes et Solutions - Toulon',
        company_link: 'https://www.etudesetsolutions.fr/',
        period: '13/01/2025 - 15/02/2025',
        achievements: [
            'Develop a web application built with Django (Python) to replace the OpenWrt admin interface on a Raspberry Pi, featuring an interactive network scanner with real-time display of connected devices.'
        ],
        technologies: ['Django', 'Python', 'JavaScript', 'SQLite']
    },
    {
        title: 'Intern',
        company: 'Bonifay - La Garde',
        company_link: 'https://www.bonifay.fr/',
        period: '06/05/2024 - 29/06/2024',
        achievements: [
            'Develop a web application designed to optimize delivery drivers routes by automating delivery tracking and validation. Developed using Symfony (versions 3.4 and 5.4), PHP, JavaScript, Bootstrap, and MySQL.'
        ],
        technologies: ['Symfony', 'PHP', 'JavaScript', 'Bootstrap', 'MySQL']

    }
]
</script>

<template>
    <section id="experience" class="py-20 bg-white">
        <container>
            <h2 class="mb-10">
                <span class="text-highlight-color">&lt;</span>
                Experience
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

                        <div class="bg-white p-6 rounded-lg shadow-md scale-animation-sm">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900">{{ job.title }}</h3>
                                    <a :href="job.company_link" target="_blank"
                                        class="text-gray-600 hover:text-highlight-color">{{ job.company }}</a>
                                </div>
                                <span class="text-gray-500">{{ job.period }}</span>
                            </div>

                            <ul class="list-none list-inside space-y-3 text-gray-700 mb-4">
                                <li v-for="(achievement, i) in job.achievements" :key="i">
                                    {{ achievement }}
                                </li>
                            </ul>

                            <div class="flex flex-wrap gap-2">
                                <span v-for="(tech, i) in job.technologies" :key="i"
                                    class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </section>

                    <!-- Copy and modify the section above for additional experiences -->
                </div>
            </div>
        </container>
    </section>
</template>
