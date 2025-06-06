<template>
  <header>
    <NavBar portfolioName="ALMEIDA ALHADA Ruben" />
  </header>
  <main class="pt-16 scroll-smooth dark:bg-main-background-color-dark">
    <ScrollUpButton/>
    <HeroSection id="home" />
    <ExperienceSection id="experience" />
    <EducationSection id="education" />
    <ProjectsSection id="projects" />
    <StacksSection id="stacks" />
    <!-- <ContactSection id="contact" /> -->
    <Footer/>
  </main>
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
import Footer from './components/Footer.vue'
import ScrollUpButton from './components/ScrollUpButton.vue'


</script>
