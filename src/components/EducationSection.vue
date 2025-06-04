<script setup>
import { ref, watch } from 'vue'

const DEGREES = [
    {
        title: '2-year Technical Degree (Higher Technician\'s Certificate)',
        school: 'Bonaparte Highschool, Toulon France',
        description: 'Technical Degree in IT Services for Organizations - Software Development Track (BTS SIO - SLAM)',
        path: '/images/degrees/',
        date: '2025'
    },
    {
        title: 'PIX Digital Skills Certificate',
        school: 'Bonaparte Highschool, Toulon France',
        description: 'Certified digital proficiency in various domains',
        path: '/images/degrees/pix.jpg',
        date: '2025'
    },
    {
        title: 'GDPR Workshop',
        school: 'National Data Protection Commission',
        description: 'Training on data privacy and General Data Protection Regulation',
        path: '/images/degrees/rgpd5.jpg',
        date: '2024'
    },
    {
        title: 'Cybersecurity MOOC',
        school: 'ANSSI (French National Cybersecurity Agency)',
        description: 'Introductory training focused on cybersecurity principles, best practices in digital safety, and risk prevention strategies for individuals and organizations.',
        path: '/images/degrees/anssi.jpg',
        date: '2023'
    },
    {
        title: 'Introduction to Game Development Certificate (25 ECTS)',
        school: 'XAMK University of Applied Sciences',
        description: 'Comprehensive course covering the fundamentals of game design and development, including game engines, programming logic, 2D/3D graphics, and gameplay mechanics.',
        path: '/images/degrees/xamk.jpg',
        date: '2023'
    },
    {
        title: 'High School Degree with a specialization in Marketing (STMG)',
        school: 'Golfe de Saint-Tropez Highschool, Gassin France',
        description: 'French Baccalauréat in Management - Marketing Major (STMG Track)',
        path: '/images/degrees/bac.png',
        date: '2022'
    },
]

const isModalOpen = ref(false)
const currentIndex = ref(0)
const slideDirection = ref('right')

const openModal = (index) => {
    currentIndex.value = index
    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
}

const showNext = () => {
    slideDirection.value = 'right'
    currentIndex.value = (currentIndex.value + 1) % DEGREES.length
}

const showPrevious = () => {
    slideDirection.value = 'left'
    currentIndex.value = (currentIndex.value - 1 + DEGREES.length) % DEGREES.length
}

// Toggle body scroll
const toggleScroll = (disable) => {
    if (disable) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

// Watch modal state to toggle scroll
watch(isModalOpen, (newValue) => {
    toggleScroll(newValue)
})

// Close modal on escape key
const handleKeydown = (e) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowRight') showNext()
    if (e.key === 'ArrowLeft') showPrevious()
}
</script>

<template>
    <section id="education" class="py-20 bg-white dark:bg-main-background-color-dark">
        <container>
            <h2 class="mb-16 text-4xl font-bold text-center">
                <span class="text-highlight-color">&lt;</span>
                Education
                <span class="text-highlight-color">/&gt;</span>
            </h2>

            <div class="max-w-6xl mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Degree Card -->
                    <div v-for="(degree, index) in DEGREES" :key="degree.title"
                        class="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer"
                        @click="openModal(index)">
                        <!-- Image -->
                        <img :src="degree.path" :alt="degree.title"
                            class="w-full h-full object-scale-down group-hover:scale-110 transition-transform duration-500" />

                        <!-- Overlay -->
                        <div
                            class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <!-- Content Container -->
                            <div
                                class="absolute inset-0 p-6 flex flex-col justify-between text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <!-- Header -->
                                <div class="space-y-4">
                                    <span
                                        class="inline-block bg-highlight-color/80 px-3 py-1 rounded-full text-sm font-medium">
                                        {{ degree.date }}
                                    </span>
                                    <h3 class="text-xl font-semibold">
                                        {{ degree.title }}
                                    </h3>
                                    <div class="font-medium text-gray-300">
                                        {{ degree.school }}
                                    </div>
                                </div>

                                <!-- Description -->
                                <p class="text-sm text-gray-300">
                                    {{ degree.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </container>

        <!-- Modal -->
        <div v-if="isModalOpen" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            @click.self="closeModal" @keydown="handleKeydown" tabindex="0">
            <div class="max-w-4xl w-full mx-4 bg-white rounded-xl overflow-hidden">
                <!-- Modal Content -->
                <div class="relative">
                    <!-- Navigation Buttons -->
                    <button @click="showPrevious"
                        class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                        <span class="sr-only">Previous</span>
                        <!-- Left arrow icon -->
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button @click="showNext"
                        class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                        <span class="sr-only">Next</span>
                        <!-- Right arrow icon -->
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <!-- Image -->
                    <div class="h-[400px] bg-gray-100 overflow-hidden">
                        <transition
                            :enter-active-class="slideDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'"
                            :leave-active-class="slideDirection === 'right' ? 'animate-slide-out-left' : 'animate-slide-out-right'"
                            mode="out-in">
                            <img :key="currentIndex" :src="DEGREES[currentIndex].path"
                                :alt="DEGREES[currentIndex].title" class="w-full h-full object-contain" />
                        </transition>
                    </div>

                    <!-- Content -->
                    <div class="p-8 space-y-6">
                        <transition
                            :enter-active-class="slideDirection === 'right' ? 'animate-fade-in-right' : 'animate-fade-in-left'"
                            :leave-active-class="slideDirection === 'right' ? 'animate-fade-out-left' : 'animate-fade-out-right'"
                            mode="out-in">
                            <div :key="currentIndex" class="space-y-6">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-2xl font-bold text-gray-900">
                                        {{ DEGREES[currentIndex].title }}
                                    </h3>
                                    <span
                                        class="bg-highlight-color/10 text-highlight-color px-3 py-1 rounded-full text-sm font-medium">
                                        {{ DEGREES[currentIndex].date }}
                                    </span>
                                </div>

                                <div class="text-lg font-medium text-gray-600">
                                    {{ DEGREES[currentIndex].school }}
                                </div>

                                <p class="text-gray-600">
                                    {{ DEGREES[currentIndex].description }}
                                </p>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>

            <!-- Close button -->
            <button @click="closeModal"
                class="absolute top-4 right-4 text-white hover:text-highlight-color transition-colors">
                <span class="sr-only">Close</span>
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </section>
</template>

<style scoped>
.grid {
    animation: fadeIn 0.6s ease-out;
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

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutLeft {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(-100%);
        opacity: 0;
    }
}

@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

.animate-slide-in-right {
    animation: slideInRight 0.3s ease-out;
}

.animate-slide-out-left {
    animation: slideOutLeft 0.3s ease-out;
}

.animate-slide-in-left {
    animation: slideInLeft 0.3s ease-out;
}

.animate-slide-out-right {
    animation: slideOutRight 0.3s ease-out;
}

.animate-fade-in-right {
    animation: slideInRight 0.4s ease-out;
}

.animate-fade-out-left {
    animation: slideOutLeft 0.4s ease-out;
}

.animate-fade-in-left {
    animation: slideInLeft 0.4s ease-out;
}

.animate-fade-out-right {
    animation: slideOutRight 0.4s ease-out;
}
</style>
