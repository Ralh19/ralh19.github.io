<template>
  <div>
    <NavBar portfolioName="ALMEIDA ALHADA Ruben" />

    <main class="pt-16 scroll-smooth">
      <HeroSection id="home" />
      <ExperienceSection id="experience" />
      <EducationSection id="education" />
      <ProjectsSection id="projects" />
      <StacksSection id="stacks" />
      <ContactSection id="contact" />
    </main>
  </div>
</template>

<script setup>
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import StacksSection from './components/StacksSection.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'

</script>

