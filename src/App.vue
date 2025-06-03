<template>
  <div >
    <NavBar portfolioName="ALMEIDA ALHADA Ruben" />

    <main class="pt-16 scroll-smooth">
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <SkillsSection id="skills" />
      <ContactSection id="contact" />
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

