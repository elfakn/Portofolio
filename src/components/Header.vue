<script setup>
import { Download } from "lucide-vue-next";
import profileImg from "../assets/Untitled.jpeg"
</script>

<template>
<section
  class="w-11/12 max-w-6xl mx-auto py-30 flex flex-col lg:flex-row items-center gap-12"
>

    <!-- Kiri - Gambar Profil -->
    <div
      v-motion
      :initial="{ opacity: 0, x: -50, scale: 0.9 }"
      :enter="{ opacity: 1, x: 0, scale: 1 }"
      :transition="{ duration: 800 }"
      class="flex justify-center"
    >
      <img
        :src="profileImg"
        alt="Profile"
        class="rounded-full w-64 lg:w-80 shadow-lg object-cover"
      />
    </div>

    <!-- Kanan - Teks -->
    <div class="text-center lg:text-left flex flex-col gap-4">
      <!-- Intro -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800, delay: 300 }"
      >
        <h3
          class="flex items-end gap-2 text-xl md:text-2xl mb-3 font-semibold text-gray-800 dark:text-white"
        >
          Hi I'm <span class="font-bold">Elfa Khoirun Nissa</span>
        </h3>
      </div>

      <!-- Title -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 900, delay: 500 }"
      >
        <h1
          class="text-3xl sm:text-5xl lg:text-[60px] font-bold text-gray-900 dark:text-white leading-tight"
        >
          Passionate
          <span class="text-blue-600 dark:text-blue-400">
            Fullstack Developer
          </span>
          & Software Engineer.
        </h1>
      </div>

      <!-- Deskripsi -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 900, delay: 700 }"
      >
        <p class="max-w-xl text-gray-700 dark:text-gray-300">
          I am a
          <span class="text-blue-600 dark:text-blue-400">
            Fullstack Developer
          </span>
          and Software Engineer with a strong passion for designing and
          developing scalable web applications.
        </p>
      </div>

      <!-- Tombol -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 900, delay: 1000 }"
        class="flex justify-center lg:justify-start mt-6"
      >
        <a
          href="/CV_Elfa_Khoirun_Nissa.pdf"
          download
          class="px-8 py-3 border rounded-full border-gray-400 flex items-center gap-2 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-md"
        >
          <Download class="w-5 h-5" />
          Get My Resume
        </a>
      </div>
    </div>
  </section>
</template>
