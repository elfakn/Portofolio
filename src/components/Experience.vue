<script setup>
import { ref } from "vue";
import { Github, ArrowUpRight, BriefcaseBusiness, Boxes } from "lucide-vue-next";
import { projects } from "../data/ProjectData";
import { experiences } from "../data/ExperienceData";

const activeTab = ref("experience");

const setTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <section id="experience" class="w-11/12 max-w-6xl mx-auto py-16 sm:py-20">
    <div class="text-center mb-8">
      <p class="text-xs font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">Work</p>
      <h2 class="mt-2 font-display text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Experience & Projects</h2>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Real-world delivery across internal systems and personal builds</p>
    </div>

    <div class="flex justify-center mb-8" role="tablist" aria-label="Experience and projects">
      <div class="inline-flex items-center gap-1 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-1.5 shadow-sm">
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'experience'"
          @click="setTab('experience')"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition focus-visible:outline-none"
          :class="activeTab === 'experience'
            ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'"
        >
          <BriefcaseBusiness class="w-4 h-4" aria-hidden="true" />
          Experience
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="activeTab === 'projects'"
          @click="setTab('projects')"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition focus-visible:outline-none"
          :class="activeTab === 'projects'
            ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'"
        >
          <Boxes class="w-4 h-4" aria-hidden="true" />
          Projects
        </button>
      </div>
    </div>

    <div v-if="activeTab === 'experience'" class="grid md:grid-cols-2 gap-4 sm:gap-5" role="tabpanel" :key="'exp'">
      <article
        v-for="(exp, index) in experiences"
        :key="index"
        class="rounded-[1.25rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-6 shadow-sm hover:shadow-md transition"
      >
        <div class="flex items-start justify-between gap-3">
          <h3 class="text-[15px] font-semibold text-gray-900 dark:text-white leading-tight">{{ exp.position }}</h3>
          <span class="shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 text-xs font-semibold">{{ exp.year }}</span>
        </div>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ exp.company }}</p>
        <ul class="mt-4 space-y-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
          <li v-for="(item, i) in exp.description" :key="i" class="flex gap-2.5">
            <span aria-hidden="true" class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <div class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="(t, i) in exp.tech"
            :key="i"
            class="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200"
          >{{ t }}</span>
        </div>
      </article>
    </div>

    <div v-else class="grid sm:grid-cols-2 gap-4 sm:gap-5" role="tabpanel" :key="'proj'">
      <article
        v-for="(project, index) in projects"
        :key="index"
        class="group overflow-hidden rounded-[1.25rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] shadow-sm hover:shadow-lg transition"
      >
        <div class="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-white/10 dark:via-white/5 dark:to-transparent">
          <img
            :src="project.image"
            :alt="project.title + ' preview'"
            loading="lazy"
            decoding="async"
            class="w-full h-44 sm:h-48 object-cover transition duration-500 group-hover:scale-[1.02]"
            @error="$event.target.style.display='none'"
          />
          <span class="absolute left-4 top-4 rounded-full bg-white/90 dark:bg-gray-950/70 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10">{{ index === 0 ? "Featured" : "Personal" }}</span>
        </div>
        <div class="p-5 sm:p-6">
          <h3 class="font-display text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ project.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="(t, i) in project.tech"
              :key="i"
              class="px-2.5 py-1 text-xs font-medium rounded-full bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-100 border border-brand-100 dark:border-brand-500/20"
            >{{ t }}</span>
          </div>
          <div class="flex items-center gap-3 mt-5">
            <a
              :href="project.repoLink"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 text-xs font-semibold hover:opacity-90 transition focus-visible:outline-none"
            >
              <Github class="w-3.5 h-3.5" aria-hidden="true" /> Code
            </a>
            <a
              v-if="project.demoLink"
              :href="project.demoLink"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition focus-visible:outline-none"
            >
              Live demo <ArrowUpRight class="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
