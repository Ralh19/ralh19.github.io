<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const currentYear = new Date().getFullYear()

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/Ralh19',
        icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ruben-almeida-alhada-0b449435a/?original_referer=',
        icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    }
]
</script>

<template>
    <footer id="footer" class="py-8 bg-white dark:bg-main-gui-color-dark border-t border-gray-200 dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <!-- Copyright -->
                <div class="flex text-gray-600 dark:text-main-text-color-dark gap-2">
                    © {{ currentYear }} ALMEIDA ALHADA Ruben | {{ t('footer.builtWith') }}
                    <img src="/images/footer/heart.png" :alt="t('footer.undertaleHeart')" class="w-4 object-scale-down">
                </div>

                <!-- Social Links -->
                <div class="flex space-x-4">
                    <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank"
                        rel="noopener noreferrer"
                        class="text-gray-600 dark:text-main-text-color-dark hover:text-highlight-color dark:hover:text-highlight-color transition-colors">
                        <span class="sr-only">{{ link.name }}</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path :d="link.icon" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>