<script setup>
import { Github, Linkedin, Mail } from "lucide-vue-next";

const year = new Date().getFullYear();

const socials = [
  {
    icon: Github,
    link: "https://github.com/elfakn", // ganti dengan profil kamu
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/elfa-khoirun-nissa/ ", // ganti dengan profil kamu
  },
  {
    icon: Mail,
    link: "mailto:elfa.khoirunissa@gmail.com", // ganti dengan email kamu
  },
];
</script>

<template>
  <footer
    class="w-full border-t border-gray-300 dark:border-gray-700 py-6 mt-20 bg-gray-50 dark:bg-gray-900"
  >
    <div class="w-11/12 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <!-- Left -->
      <p class="text-gray-600 dark:text-gray-400 text-sm text-center sm:text-left">
        © {{ year }} <span class="font-semibold text-gray-800 dark:text-white">Elfa Khoirun Nissa</span>. All rights reserved.
      </p>

      <!-- Right -->
      <div class="flex gap-5">
        <a
          v-for="(social, index) in socials"
          :key="index"
          :href="social.link"
          target="_blank"
          class="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <component :is="social.icon" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
</template>
