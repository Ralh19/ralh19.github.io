<template>
  <div>
    <NavBar portfolioName="ALMEIDA ALHADA Ruben" />

    <main class="pt-16 scroll-smooth">
      <HeroSection id="home" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
      <SkillsSection id="skills" />
      <ContactSection id="contact" />
    </main>
  </div>
</template>

<script setup>
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
</script>

