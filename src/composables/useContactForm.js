import { ref } from 'vue'
import emailjs from '@emailjs/browser'

export function useContactForm() {
  const form = ref(null)
  const isLoading = ref(false)
  const showSuccess = ref(false)
  const showError = ref(false)
  const messageLength = ref(0)

  const MESSAGE_MIN_LENGTH = 20
  const MESSAGE_MAX_LENGTH = 1000

  const hideNotification = () => {
    setTimeout(() => {
      showSuccess.value = false
      showError.value = false
    }, 3000)
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
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      showSuccess.value = true
      hideNotification()
      form.value.reset()
      messageLength.value = 0
    } catch (error) {
      console.error('FAILED...', error?.text || error)
      showError.value = true
      hideNotification()
    } finally {
      isLoading.value = false
    }
  }

  const updateMessageLength = (e) => {
    messageLength.value = e.target.value.length
  }

  return {
    form,
    isLoading,
    showSuccess,
    showError,
    messageLength,
    MESSAGE_MIN_LENGTH,
    MESSAGE_MAX_LENGTH,
    sendEmail,
    updateMessageLength,
  }
}
