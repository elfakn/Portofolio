<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { socials } from '../data/SocialData'
</script>

<template>
  <section id="contact" class="w-11/12 max-w-6xl mx-auto py-16 sm:py-20">
    <div class="mb-8">
      <p class="text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">
        Contact
      </p>
      <h2
        class="mt-2 font-display text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        Let's work together
      </h2>
      <p class="mt-3 mx-auto max-w-2xl text-[15px] leading-6 text-gray-600 dark:text-gray-400">
        I'm open to collaboration, freelance projects, and new opportunities — feel free to reach
        out through any channel below.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 gap-6 mt-10">
      <a
        v-for="(social, index) in socials"
        :key="index"
        :href="social.link"
        target="_blank"
        rel="noreferrer"
        class="group relative overflow-hidden rounded-[1.25rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] px-6 py-6 shadow-sm hover:shadow-md transition focus-visible:outline-none"
      >
        <div class="flex items-start gap-4">
          <span
            class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm"
          >
            <component :is="social.icon" class="w-5 h-5" aria-hidden="true" />
          </span>
          <div class="min-w-0 flex-1">
            <p class="text-[15px] font-semibold text-gray-900 dark:text-white">
              {{ social.label }}
            </p>
            <p class="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400 line-clamp-2">
              {{ social.value }}
            </p>
          </div>
          <ArrowUpRight
            class="w-4 h-4 shrink-0 text-gray-300 dark:text-gray-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-700 dark:group-hover:text-gray-200"
            aria-hidden="true"
          />
        </div>
        <span
          aria-hidden="true"
          class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 transition group-hover:opacity-100"
        ></span>
      </a>
    </div>
  </section>
</template>
