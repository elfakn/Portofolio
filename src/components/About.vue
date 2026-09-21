<script setup>
import { GraduationCap, Lightbulb, Target } from "lucide-vue-next";
</script>

<template>
  <section id="about" class="w-11/12 max-w-6xl mx-auto py-16 sm:py-20">
    <div class="mb-8">
      <p class="text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">About</p>
      <h2 class="mt-2 font-display text-3xl sm:text-[32px] font-bold tracking-tight text-gray-900 dark:text-white">About me</h2>
    </div>

    <div class="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
      <div class="rounded-[1.5rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-6 shadow-sm">
        <div class="flex items-center gap-3">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
            <GraduationCap class="w-5 h-5" aria-hidden="true" />
          </span>
          <div class="min-w-0">
            <h3 class="text-[15px] font-semibold text-gray-900 dark:text-white leading-tight">Astra Polytechnic — Associate Degree</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Information Management · 2022 – 2025</p>
          </div>
        </div>
        <div class="mt-5 grid sm:grid-cols-2 gap-3">
          <div class="rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-4">
            <Lightbulb class="w-5 h-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
            <p class="mt-2 text-sm font-semibold text-gray-900 dark:text-white">Practical work</p>
            <p class="text-sm leading-5 text-gray-600 dark:text-gray-400">From CRUD features to dashboard improvements.</p>
          </div>
          <div class="rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-4">
            <Target class="w-5 h-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
            <p class="mt-2 text-sm font-semibold text-gray-900 dark:text-white">Keep learning</p>
            <p class="text-sm leading-5 text-gray-600 dark:text-gray-400">If something breaks, I read the docs and fix it.</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 text-[15px] leading-7 text-gray-600 dark:text-gray-300">
        <p>
          I'm a <span class="font-semibold text-gray-900 dark:text-white">Fullstack Developer</span> — I usually work on internal tools and web apps that need to be reliable, not fancy.
        </p>
        <p class="text-gray-600 dark:text-gray-400">
          Most of what I learned came from fixing other people's code and getting stuck on real deadlines. So I try to write code my future self can understand.
        </p>
      </div>
    </div>
  </section>
</template>
