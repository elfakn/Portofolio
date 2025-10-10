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
  <div
    class="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300"
  >
    <!-- Navbar selalu fixed di atas -->
    <Navbar />
    <main>
      <!-- Konten utama -->
      <Header />
      <About />
      <Skill />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
