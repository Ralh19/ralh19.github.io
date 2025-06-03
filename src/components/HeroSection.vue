<template>
  <section id="home" class="h-screen flex justify-center items-center bg-gray-100 relative">
    <container>
      <div class="flex gap-8 items-center">
        <!-- GOATS's Photo -->
        <div class="w-1/3 flex flex-col items-center gap-4">
          <div class="aspect-square bg-gray-300 rounded-lg w-full"></div>

        </div>

        <!-- Text content -->
        <div class="w-2/3 flex flex-col items-start">
          <h1 class="text-5xl font-bold mb-4">Hello, I'm <span class="text-highlight-color">Ruben</span> <span
              class="cursor-default wave-animation">👋</span></h1>
          <p class="text-xl text-gray-600">
            Frontend Developer passionate about creating intuitive and
            user-centric digital experiences. Focused on building modern web applications with clean architecture and
            pixel-perfect designs. Always eager to learn and embrace new challenges.
          </p>
          <div class="flex gap-6">
            <a href="#contact" class="mt-6 px-6 py-3 bg-highlight-color text-white rounded-lg scale-animation">
              Contact Me
            </a>
            <a href="#" class="mt-6 px-6 py-3 bg-highlight-color text-white rounded-lg scale-animation">
              <i class="bi bi-filetype-pdf"></i>
              Resume
            </a>

            <div class="mt-6 flex items-center text-highlight-color">
              <i class="bi bi-geo-alt-fill text-3xl"></i>
              <span class="text-2xl ml-2">France</span>
            </div>
          </div>

        </div>
      </div>
    </container>

    <!-- Scroll down button -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 pb-6">
      <a href="#projects" class="flex flex-col items-center text-gray-600 hover:text-highlight-color transition-colors">
        <span class="text-2xl mb-2">Scroll Down</span>
        <i class="bi bi-arrow-down-short text-4xl bounce-animation"></i>
      </a>
    </div>
  </section>
</template>
