<template>
  <section id="projects" class="py-20 bg-gray-50 text-center">
    <h2 class="mb-10">
      <span class="text-highlight-color">&lt;</span>
      Projects
      <span class="text-highlight-color">/&gt;</span>

    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      <div class="bg-white rounded-lg shadow p-6" v-for="i in 3" :key="i">
        <h3 class="text-xl font-bold mb-2">Projet {{ i }}</h3>
        <p class="text-gray-600">Description rapide du projet numéro {{ i }}.</p>
      </div>
    </div>
  </section>
</template>
