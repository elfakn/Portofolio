<script setup>
import {
  Code,
  Monitor,
  Server,
  Database,
  GitBranch,
  Terminal,
  Wrench,
  PenTool,
} from 'lucide-vue-next'

const categories = [
  {
    title: 'What I code in',
    description: 'PHP, Java, JavaScript, C# — whatever fits the job',
    icon: Code,
  },
  {
    title: 'Frontend',
    description: 'Vue.js most days, some React, vanilla HTML/CSS, Tailwind',
    icon: Monitor,
  },
  {
    title: 'Backend & tools',
    description: 'Laravel, Spring Boot, CodeIgniter, .NET Core',
    icon: Server,
  },
  {
    title: 'Databases',
    description: 'MySQL, SQL Server — a bit of indexing and query tuning',
    icon: Database,
  },
]

const tools = [
  { name: 'VS Code', icon: Terminal },
  { name: 'Git', icon: GitBranch },
  { name: 'Figma', icon: PenTool },
  { name: 'Postman', icon: Wrench },
]
</script>

<template>
  <section id="skills" class="w-11/12 max-w-6xl mx-auto py-16">
    <div class="flex flex-wrap items-baseline justify-between gap-3 mb-8">
      <h2
        class="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        Skills & Tools
      </h2>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        A practical stack for building end-to-end products
      </p>
    </div>

    <div class="grid sm:grid-cols-2 gap-4 sm:gap-5">
      <article
        v-for="(cat, i) in categories"
        :key="i"
        class="group rounded-[1.25rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-5 flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300 dark:hover:border-white/15 transition"
      >
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900"
        >
          <component :is="cat.icon" class="w-5 h-5" aria-hidden="true" />
        </div>
        <div class="min-w-0">
          <h3 class="text-[15px] font-semibold text-gray-900 dark:text-white">{{ cat.title }}</h3>
          <p class="mt-1 text-sm leading-5 text-gray-600 dark:text-gray-400">
            {{ cat.description }}
          </p>
        </div>
      </article>
    </div>

    <div
      class="mt-10 rounded-[1.25rem] border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.03] p-5 sm:p-6"
    >
      <h3 class="text-sm font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
        Tools I use
      </h3>
      <div class="mt-4 flex flex-wrap gap-2.5">
        <span
          v-for="(t, idx) in tools"
          :key="idx"
          class="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3.5 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm"
        >
          <span
            class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900"
          >
            <component :is="t.icon" class="w-3.5 h-3.5" aria-hidden="true" />
          </span>
          {{ t.name }}
        </span>
      </div>
    </div>
  </section>
</template>
