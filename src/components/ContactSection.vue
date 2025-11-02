<script setup>
import { useContactForm } from '@/composables/useContactForm'
import { useTranslations } from '@/composables/useTranslations'

const { form, isLoading, showSuccess, showError, messageLength, MESSAGE_MIN_LENGTH, MESSAGE_MAX_LENGTH, sendEmail, updateMessageLength } = useContactForm()
const { t, contact } = useTranslations()
</script>

<template>
  <section id="contact" class="py-20 bg-white dark:bg-main-background-color-dark min-h-screen flex items-center">
    <container>
      <div class="max-w-3xl mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4 dark:text-white">
            <span class="text-highlight-color">&lt;</span>
            {{ t('contact.title') }}
            <span class="text-highlight-color">/&gt;</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-main-text-color-dark">
            {{ t('contact.subtitle') }}
          </p>
        </div>

        <!-- Contact Form -->
        <form ref="form" @submit.prevent="sendEmail"
          class="bg-white dark:bg-main-gui-color-dark rounded-2xl shadow-lg p-8 space-y-6">
          <!-- Name Fields Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-main-text-color-dark">
                {{ t('contact.form.firstName') }}
              </label>
              <input type="text" name="first_name" required :placeholder="t('contact.form.placeholders.firstName')"
                class="w-full p-3 bg-gray-50 dark:bg-main-background-color-dark border border-gray-200 dark:border-gray-700 
                rounded-lg outline-none focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color 
                transition-colors text-gray-900 dark:text-main-text-color-dark 
                placeholder-gray-400 dark:placeholder-gray-500" />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-main-text-color-dark">
                {{ t('contact.form.lastName') }}
              </label>
              <input type="text" name="last_name" required :placeholder="t('contact.form.placeholders.lastName')" class="w-full p-3 bg-gray-50 dark:bg-main-background-color-dark border border-gray-200 dark:border-gray-700 
                rounded-lg outline-none focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color 
                transition-colors text-gray-900 dark:text-main-text-color-dark 
                placeholder-gray-400 dark:placeholder-gray-500" />
            </div>
          </div>

          <!-- Email Field -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-main-text-color-dark">
              {{ t('contact.form.email') }}
            </label>
            <input type="email" name="email" required :placeholder="t('contact.form.placeholders.email')" class="w-full p-3 bg-gray-50 dark:bg-main-background-color-dark border border-gray-200 dark:border-gray-700 
              rounded-lg outline-none focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color 
              transition-colors text-gray-900 dark:text-main-text-color-dark 
              placeholder-gray-400 dark:placeholder-gray-500" />
          </div>

          <!-- Subject Field -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-main-text-color-dark">
              {{ t('contact.form.subject') }}
            </label>
            <input type="text" name="subject" required :placeholder="t('contact.form.placeholders.subject')" class="w-full p-3 bg-gray-50 dark:bg-main-background-color-dark border border-gray-200 dark:border-gray-700 
              rounded-lg outline-none focus:ring-2 focus:ring-highlight-color/20 focus:border-highlight-color 
              transition-colors text-gray-900 dark:text-main-text-color-dark 
              placeholder-gray-400 dark:placeholder-gray-500" />
          </div>

          <!-- Message Field -->
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <label class="block text-sm font-medium text-gray-700 dark:text-main-text-color-dark">
                {{ t('contact.form.message') }}
              </label>
              <span class="text-sm text-gray-500 dark:text-main-text-color-dark">
                {{ messageLength }}/{{ MESSAGE_MAX_LENGTH }}
              </span>
            </div>
            <textarea name="message" required :minlength="MESSAGE_MIN_LENGTH" :maxlength="MESSAGE_MAX_LENGTH"
              :placeholder="t('contact.form.placeholders.message')" rows="5" @input="updateMessageLength" class="w-full p-3 bg-gray-50 dark:bg-main-background-color-dark border border-gray-200 dark:border-gray-700 
              rounded-lg focus:ring-2 focus:ring-highlight-color/20 outline-none focus:border-highlight-color 
              transition-colors resize-none text-gray-900 dark:text-main-text-color-dark 
              placeholder-gray-400 dark:placeholder-gray-500">
            </textarea>
          </div>

          <!-- Status Messages -->
          <div v-if="showSuccess" class="text-green-600 dark:text-green-400 text-center">
            {{ t('contact.status.success') }}
          </div>
          <div v-if="showError" class="text-red-600 dark:text-red-400 text-center">
            {{ t('contact.status.error') }}
          </div>

          <!-- Submit Button -->
          <button type="submit" :disabled="isLoading" class="w-full bg-highlight-color text-white py-4 rounded-lg hover:bg-highlight-color/90 
            transition-colors duration-300 font-medium text-lg scale-animation disabled:opacity-50">
            {{ isLoading ? t('contact.status.sending') : t('contact.status.send') }}
          </button>
        </form>
      </div>
    </container>
  </section>
</template>
