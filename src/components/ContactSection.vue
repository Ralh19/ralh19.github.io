<template>
  <section id="contact" class="py-20 bg-gray-50 text-center h-screen">
    <h2 class="text-3xl font-semibold mb-6">
      <span class="text-highlight-color">&lt;</span>
      Contact
      <span class="text-highlight-color">/&gt;</span>
    </h2>
    <p class="mb-6 text-gray-700">Tu veux discuter ou collaborer ? Envoie-moi un message !</p>
    <form class="max-w-md mx-auto space-y-4">
      <input type="text" placeholder="Votre nom" class="w-full p-3 border rounded-md" />
      <input type="email" placeholder="Votre email" class="w-full p-3 border rounded-md" />
      <textarea placeholder="Votre message" class="w-full p-3 border rounded-md h-32"></textarea>
      <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
        Envoyer
      </button>
    </form>
  </section>
</template>
