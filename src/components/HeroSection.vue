<script setup>
const handleScrollClick = (event) => {
  event.preventDefault()
  const targetId = event.currentTarget.getAttribute('href').slice(1)
  const element = document.getElementById(targetId)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <section id="home"
    class="h-screen flex justify-center items-center bg-gray-100 dark:bg-main-background-color-dark relative">
    <container>
      <div class="flex gap-8 items-center">
        <!-- Profile Photo -->
        <div class="w-1/3 aspect-square relative">
          <!-- Purple glow background -->
          <div class="absolute inset-0 rounded-full bg-highlight-color/25 dark:bg-highlight-color/30 blur-3xl scale-110"></div>
          
          <!-- Image container -->
          <div class="relative w-full h-full rounded-full overflow-hidden">
            <img 
              src="/images/hero_section/goat.png"
              class="w-full h-full object-cover scale-110"
              style="object-position: center 70%;"
              alt="Profile picture" 
            />
          </div>
        </div>

        <!-- Text content -->
        <div class="w-2/3 flex flex-col items-start">
          <h1 class="text-5xl font-bold mb-4 text-gray-900 dark:text-white">Hello, I'm <span
              class="text-highlight-color">Ruben</span> <span class="cursor-default wave-animation">👋</span></h1>
          <p class="text-xl text-gray-600 dark:text-main-text-color-dark">
            Developer passionate about creating intuitive and
            user-centric digital experiences. Focused on building modern web applications with clean architecture and
            pixel-perfect designs. Always eager to learn and embrace new challenges.
          </p>
          <div class="flex gap-6">
            <a href="#contact"
              class="text-xl mt-6 px-6 py-3 bg-highlight-color text-white rounded-lg scale-animation hover:opacity-90"
              @click="handleScrollClick">
              Hire Me
            </a>
            <a href="/docs/resume_fr.pdf" target="_blank"
              class="text-xl mt-6 px-6 py-3 bg-highlight-color text-white rounded-lg scale-animation hover:opacity-90">
              <i class="bi bi-filetype-pdf"></i>
              Resume
            </a>

            <div class="mt-6 flex items-center text-highlight-color">
              <i class="bi bi-geo-alt-fill text-3xl bounce-animation"></i>
              <span class="text-2xl ml-2 dark:text-main-text-color-dark">France</span>
            </div>
          </div>
        </div>
      </div>
    </container>

    <!-- Scroll down button -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 pb-6">
      <a href="#experience" @click="handleScrollClick"
        class="flex flex-col items-center text-gray-600 dark:text-main-text-color-dark hover:text-highlight-color dark:hover:text-highlight-color transition-colors">
        <span class="text-2xl mb-2">Scroll Down</span>
        <i class="bi bi-arrow-down-short text-4xl bounce-animation"></i>
      </a>
    </div>
  </section>
</template>

<style scoped>
img {
  filter: contrast(1.1) brightness(1.05);
}
</style>
