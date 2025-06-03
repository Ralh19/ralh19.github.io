<template>
  <section id="contact" class="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center">
    <container>
      <div class="max-w-3xl mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">
            <span class="text-highlight-color">&lt;</span>
            Contact
            <span class="text-highlight-color">/&gt;</span>
          </h2>
          <p class="text-lg text-gray-600">
            Interested in collaborating? Let's get in touch!
          </p>
        </div>

        <!-- Contact Form -->
        <form class="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <!-- Name Fields Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">First Name</label>
              <input 
                type="text" 
                placeholder="John" 
                class="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color transition-colors"
              />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Last Name</label>
              <input 
                type="text" 
                placeholder="Doe" 
                class="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color transition-colors"
              />
            </div>
          </div>

          <!-- Email Field -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              placeholder="john.doe@example.com" 
              class="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color transition-colors"
            />
          </div>

          <!-- Subject Field -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">Subject</label>
            <input 
              type="text" 
              placeholder="What is this about?" 
              class="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color transition-colors"
            />
          </div>

          <!-- Message Field -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              placeholder="Your message..." 
              rows="5"
              class="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color transition-colors resize-none"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full bg-highlight-color text-white py-4 rounded-lg hover:bg-highlight-color/90 transition-colors duration-300 font-medium text-lg scale-animation"
          >
            Send Message
          </button>
        </form>
      </div>
    </container>
  </section>
</template>
