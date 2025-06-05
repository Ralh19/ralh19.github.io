<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref(null)
const isLoading = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

// Add these constants
const MESSAGE_MIN_LENGTH = 20
const MESSAGE_MAX_LENGTH = 1000

// Add new ref for message length
const messageLength = ref(0)

const hideNotification = () => {
  setTimeout(() => {
    showSuccess.value = false
    showError.value = false
  }, 3000) // Notifications will disappear after 3 seconds
}

const sendEmail = async (e) => {
  e.preventDefault()
  isLoading.value = true
  showSuccess.value = false
  showError.value = false

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.value,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
    showSuccess.value = true
    hideNotification()
    form.value.reset()
  } catch (error) {
    console.error('FAILED...', error.text)
    showError.value = true
    hideNotification()
  } finally {
    isLoading.value = false
  }
}

// Add function to update message length
const updateMessageLength = (e) => {
  messageLength.value = e.target.value.length
}
</script>

<template>
  <section id="contact" class="py-20 bg-white dark:bg-main-background-color-dark min-h-screen flex items-center">
    <container>
      <div class="max-w-3xl mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4 dark:text-white">
            <span class="text-highlight-color">&lt;</span>
            Contact
            <span class="text-highlight-color">/&gt;</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-main-text-color-dark">
            Interested in collaborating ? Let's get in touch!
          </p>
        </div>

        <!-- Contact Form -->
        <form ref="form" @submit.prevent="sendEmail" 
              class="bg-white dark:bg-main-gui-color-dark rounded-2xl shadow-lg p-8 space-y-6">
          <!-- Name Fields Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-main-text-color-dark">
                First Name
              </label>
              <input type="text" name="first_name" required placeholder="John"
                class="w-full p-3 bg-gray-50 dark:bg-main-background-color-dark border border-gray-200 dark:border-gray-700 
                       rounded-lg focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color transition-colors
                       text-gray-900 dark:text-main-text-color-dark placeholder-gray-400 dark:placeholder-gray-500" />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-main-text-color-dark">
                Last Name
              </label>
              <input type="text" name="last_name" required placeholder="Doe"
                class="w-full p-3 bg-gray-50 dark:bg-main-background-color-dark border border-gray-200 dark:border-gray-700 
                       rounded-lg focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color transition-colors
                       text-gray-900 dark:text-main-text-color-dark placeholder-gray-400 dark:placeholder-gray-500" />
            </div>
          </div>

          <!-- Email Field -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-main-text-color-dark">
              Email
            </label>
            <input type="email" name="email" required placeholder="john.doe@example.com"
              class="w-full p-3 bg-gray-50 dark:bg-main-background-color-dark border border-gray-200 dark:border-gray-700 
                     rounded-lg focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color transition-colors
                     text-gray-900 dark:text-main-text-color-dark placeholder-gray-400 dark:placeholder-gray-500" />
          </div>

          <!-- Subject Field -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-main-text-color-dark">
              Subject
            </label>
            <input type="text" name="subject" required placeholder="What is this about ?"
              class="w-full p-3 bg-gray-50 dark:bg-main-background-color-dark border border-gray-200 dark:border-gray-700 
                     rounded-lg focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color transition-colors
                     text-gray-900 dark:text-main-text-color-dark placeholder-gray-400 dark:placeholder-gray-500" />
          </div>

          <!-- Message Field -->
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <label class="block text-sm font-medium text-gray-700 dark:text-main-text-color-dark">
                Message
              </label>
              <span class="text-sm text-gray-500 dark:text-main-text-color-dark">
                {{ messageLength }}/{{ MESSAGE_MAX_LENGTH }}
              </span>
            </div>
            <textarea name="message" required 
                      :minlength="MESSAGE_MIN_LENGTH" 
                      :maxlength="MESSAGE_MAX_LENGTH"
                      placeholder="Your message..." 
                      rows="5" 
                      @input="updateMessageLength"
                      class="w-full p-3 bg-gray-50 dark:bg-main-background-color-dark 
                             border border-gray-200 dark:border-gray-700 rounded-lg 
                             focus:ring-2 focus:ring-highlight-color/20 
                             focus:border-highlight-color transition-colors resize-none
                             text-gray-900 dark:text-main-text-color-dark 
                             placeholder-gray-400 dark:placeholder-gray-500">
            </textarea>
          </div>

          <!-- Status Messages -->
          <div v-if="showSuccess" class="text-green-600 dark:text-green-400 text-center">
            Message sent successfully!
          </div>
          <div v-if="showError" class="text-red-600 dark:text-red-400 text-center">
            Failed to send message. Please try again.
          </div>

          <!-- Submit Button -->
          <button type="submit" 
                  :disabled="isLoading"
                  class="w-full bg-highlight-color text-white py-4 rounded-lg 
                         hover:bg-highlight-color/90 transition-colors duration-300 
                         font-medium text-lg scale-animation disabled:opacity-50">
            {{ isLoading ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </container>
  </section>
</template>
