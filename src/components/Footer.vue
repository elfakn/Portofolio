<script setup>
import { Github, Linkedin, Mail } from "lucide-vue-next";

const year = new Date().getFullYear();

const socials = [
  { icon: Github, link: "https://github.com/elfakn", label: "GitHub" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/elfa-khoirun-nissa/", label: "LinkedIn" },
  { icon: Mail, link: "mailto:elfa.khoirunissa@gmail.com", label: "Email" },
];
</script>

<template>
  <footer class="w-full border-t border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-gray-950/60">
    <div class="w-11/12 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
      <p class="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left">
        © {{ year }} <span class="font-semibold text-gray-800 dark:text-white">Elfa Khoirun Nissa</span>. All rights reserved.
      </p>
      <div class="flex items-center gap-2">
        <a
          v-for="(social, index) in socials"
          :key="index"
          :href="social.link"
          :aria-label="social.label"
          target="_blank"
          rel="noreferrer"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-brand-600 hover:border-brand-200 dark:hover:text-brand-300 dark:hover:border-brand-500/30 transition focus-visible:outline-none"
        >
          <component :is="social.icon" class="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
</template>
