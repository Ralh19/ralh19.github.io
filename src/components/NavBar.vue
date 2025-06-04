<script setup>
// Import des fonctions Vue nécessaires
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// Définition des props reçues par le composant
// Ici on attend un nom de portfolio, avec une valeur par défaut
const props = defineProps({
  portfolioName: {
    type: String,
    default: 'ALMEIDA ALHADA Ruben'
  }
})

// Variable réactive pour savoir si le menu mobile est ouvert ou fermé
const isMobileMenuOpen = ref(false)

// Variable réactive pour suivre la section active visible à l'écran
const activeSection = ref('home')

// Liste des items du menu, avec un id qui correspond à l'id des sections de la page
const navItems = [
  { id: 'home', name: 'Home' },
  { id: 'experience', name: 'Experience' },
  { id: 'education', name: 'Education' },
  { id: 'projects', name: 'Projects' },
  { id: 'stacks', name: 'My Stacks' },
  { id: 'contact', name: 'Contact' }
]

// Fonction qui inverse l'état du menu mobile (ouvre ou ferme)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Fonction qui gère le clic sur un élément de navigation
// Elle ferme le menu mobile, puis fait défiler la page vers la section ciblée en douceur
const handleNavClick = async (id) => {
  // Fermer le menu mobile (utile pour les petits écrans)
  isMobileMenuOpen.value = false

  // nextTick attend que Vue ait appliqué les changements DOM avant de continuer
  // Cela garantit que le menu est bien fermé avant de scroller
  await nextTick()

  // On récupère l'élément HTML correspondant à la section demandée
  const el = document.getElementById(id)

  // Si cet élément existe, on fait défiler la page vers lui avec animation
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Fonction qui met à jour la section active en fonction du scroll actuel
const updateActiveSection = () => {
  const scrollY = window.scrollY  // Position verticale actuelle du scroll
  const offset = 80               // Décalage pour prendre en compte la hauteur de la navbar fixe

  // On parcourt la liste des sections à l'envers
  // Cela permet de détecter la dernière section visible quand on descend dans la page
  for (let i = navItems.length - 1; i >= 0; i--) {
    const el = document.getElementById(navItems[i].id)  // Récupère la section HTML
    // Si la position de scroll + offset dépasse le début de la section,
    // on considère cette section comme active
    if (el && scrollY + offset >= el.offsetTop) {
      activeSection.value = navItems[i].id
      break // On arrête la boucle dès qu'on trouve la section active
    }
  }
}

// Lors du montage du composant (quand il est ajouté à la page), on ajoute un listener au scroll
// Ce listener appelle updateActiveSection à chaque fois qu'on défile
onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
})

// Lors du démontage du composant (quand il est retiré de la page), on enlève le listener
// C'est important pour éviter les fuites de mémoire et les erreurs
onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>


<template>
  <!-- Barre de navigation fixe en haut de la page -->
  <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">

    <!-- Conteneur de la nav avec max-width et padding -->
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

      <!-- Nom du portfolio / logo -->
      <div class="font-extrabold text-2xl text-highlight-color cursor-default">{{ portfolioName }}</div>

      <!-- Menu Desktop (visible uniquement sur md et plus grands écrans) -->
      <div class="hidden md:flex space-x-6">
        <!-- Boucle sur les items de navigation -->

        <!-- Intercepte le clic, empêche le comportement par défaut (href), et appelle handleNavClick -->
        <!-- Texte bleu si c'est la section active -->
        <a v-for="item in navItems" :key="item.id" @click.prevent="handleNavClick(item.id)"
          class="cursor-pointer relative text-lg text-gray-700 hover:text-highlight-color transition"
          :class="{ 'text-highlight-color': activeSection === item.id }">
          {{ item.name }}

          <!-- Petit trait bleu sous l'item actif (animation avec scale-x) -->
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-highlight-color scale-x-0 group-hover:scale-x-100 transition-transform"
            :class="{ 'scale-x-100': activeSection === item.id }"></span>
        </a>
      </div>

      <!-- Bouton menu mobile (visible uniquement en dessous de md) -->
      <button class="md:hidden" @click="toggleMobileMenu">
        <!-- Icone hamburger quand menu fermé -->
        <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <!-- Icone croix quand menu ouvert -->
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

    </div>

    <!-- Menu mobile déroulant -->
    <div v-if="isMobileMenuOpen" class="md:hidden px-4 pb-4 pt-2 bg-white shadow">
      <!-- Items de navigation mobile, fonctionnent comme en desktop -->

      <!-- Quand on clique, on scroll vers la section et ferme le menu -->
      <a v-for="item in navItems" :key="item.id" @click.prevent="handleNavClick(item.id)"
        class="block py-2 text-gray-700 hover:text-highlight-color"
        :class="{ 'text-highlight-color': activeSection === item.id }">
        {{ item.name }}
      </a>
    </div>
  </nav>
</template>
