<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2 class="text-4xl font-bold text-center mb-16 dark:text-white flex items-center justify-center gap-3">
    <span class="text-highlight-color bounce-left">&lt;</span>
    {{ title }}
    <span class="text-highlight-color bounce-right">/&gt;</span>
  </h2>
</template>

<style scoped>
/* Animation gauche → s’éloigne vers la gauche puis revient */
@keyframes bounceLeft {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-12px);
  }
}

/* Animation droite → s’éloigne vers la droite puis revient */
@keyframes bounceRight {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(12px);
  }
}

.bounce-left {
  display: inline-block;
  animation: bounceLeft 4s ease-in-out infinite;
}

.bounce-right {
  display: inline-block;
  animation: bounceRight 4s ease-in-out infinite;
}
</style>
