<script setup>
import { Mail, Linkedin, Github } from "lucide-vue-next";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "Send me an email", // ganti dengan email kamu
    link: "mailto:elfa.khoirunissa@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me professionally", // ganti dengan profil kamu
    link: "hhttps://www.linkedin.com/in/elfa-khoirun-nissa/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my repositories and open source contributions", // ganti dengan profil kamu
    link: "https://github.com/elfakn",
  },
];
</script>

<template>
  <section id="contact" class="w-11/12 max-w-4xl mx-auto py-20 text-center">
    <h2
      class="text-3xl font-bold text-gray-900 dark:text-white mb-6"
    >
      Contact Me
    </h2>
    <p class="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
      Feel free to reach out for collaboration, opportunities, or just to say
      hello!
    </p>

    <!-- Contact Cards -->
    <div class="flex flex-col sm:flex-row justify-center gap-6">
      <a
        v-for="(item, index) in contacts"
        :key="index"
        :href="item.link"
        target="_blank"
        class="flex items-center gap-3 bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-4"
      >
        <component :is="item.icon" class="w-6 h-6 text-blue-500" />
        <div class="text-left">
          <p class="font-medium text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400 truncate max-w-[200px]">
            {{ item.value }}
          </p>
        </div>
      </a>
    </div>
  </section>
</template>
