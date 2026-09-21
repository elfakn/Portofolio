<script setup>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white antialiased transition-colors duration-300">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gray-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">Skip to content</a>
    <Navbar />
    <main id="main-content">
      <Header />
      <About />
      <Skill />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
