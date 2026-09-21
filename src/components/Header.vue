<script setup>
import { Download, ArrowUpRight, MapPin } from "lucide-vue-next";
import profileImg from "../assets/Untitled.jpeg"
</script>

<template>
  <section id="top" class="relative overflow-hidden">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"></div>
      <div class="absolute -top-24 right-[-15%] h-[420px] w-[620px] rounded-full bg-brand-100/70 blur-3xl dark:bg-brand-500/10"></div>
      <div class="absolute top-[18%] left-[-10%] h-[360px] w-[360px] rounded-full bg-violet-100/60 blur-3xl dark:bg-violet-500/10"></div>
    </div>

    <div class="w-11/12 max-w-6xl mx-auto pt-28 pb-16 sm:pt-32 sm:pb-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
      <div class="flex justify-center shrink-0">
        <div class="relative">
          <div aria-hidden="true" class="absolute -inset-3 rounded-[2.2rem] bg-white dark:bg-white/5 shadow-xl ring-1 ring-black/5 dark:ring-white/10"></div>
          <img
            :src="profileImg"
            alt="Portrait of Elfa Khoirun Nissa"
            width="320"
            height="320"
            loading="eager"
            decoding="async"
            class="relative rounded-[1.7rem] w-[220px] h-[220px] sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] shadow-lg object-cover ring-1 ring-black/5 dark:ring-white/10"
          />
          <div class="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 px-3 py-2 flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
            <span class="text-xs font-semibold text-gray-700 dark:text-gray-200">Available for work</span>
          </div>
        </div>
      </div>

      <div class="text-center lg:text-left flex flex-col gap-4 min-w-0 flex-1">
        <div class="flex flex-wrap justify-center lg:justify-start gap-2">
          <span class="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm">
            <MapPin class="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" aria-hidden="true" /> Based in Indonesia
          </span>
          <span class="inline-flex items-center rounded-full bg-brand-600 text-white px-3 py-1.5 text-xs font-semibold shadow-sm">Fullstack Developer</span>
        </div>

        <div>
          <p class="text-sm font-semibold tracking-wide text-brand-700 dark:text-brand-300">Hi, I'm <span class="text-gray-900 dark:text-white">Elfa Khoirun Nissa</span> —</p>
          <h1 class="mt-2 font-display text-[30px] sm:text-5xl lg:text-[48px] font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
            Fullstack Developer
            <span class="block text-gray-500 dark:text-gray-400 text-[22px] sm:text-2xl font-medium mt-1">based in Indonesia.</span>
          </h1>
        </div>

        <p class="mx-auto lg:mx-0 max-w-xl text-[15px] leading-6 text-gray-600 dark:text-gray-300">
          I build web apps from backend to frontend. Mostly Vue, Laravel, and a lot of debugging in between.
        </p>

        <div class="flex flex-wrap justify-center lg:justify-start gap-3 mt-2">
          <a
            href="/CV_Elfa_Khoirun_Nissa.pdf"
            download
            class="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-black dark:hover:bg-gray-100 transition focus-visible:outline-none"
          >
            <Download class="w-4 h-4" aria-hidden="true" />
            Get My Resume
          </a>
          <a
            href="#experience"
            class="inline-flex items-center gap-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition focus-visible:outline-none"
          >
            View work
            <ArrowUpRight class="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition focus-visible:outline-none"
          >
            Contact
          </a>
        </div>

        <div class="flex flex-wrap justify-center lg:justify-start gap-2 pt-2 text-xs text-gray-500 dark:text-gray-400">
          <span class="rounded-full bg-gray-100 dark:bg-white/10 px-3 py-1 font-medium">Vue.js</span>
          <span class="rounded-full bg-gray-100 dark:bg-white/10 px-3 py-1 font-medium">Laravel</span>
          <span class="rounded-full bg-gray-100 dark:bg-white/10 px-3 py-1 font-medium">Tailwind CSS</span>
          <span class="rounded-full bg-gray-100 dark:bg-white/10 px-3 py-1 font-medium">REST API</span>
        </div>
      </div>
    </div>
  </section>
</template>
