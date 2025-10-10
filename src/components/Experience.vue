<script setup>
import { ref } from "vue";
import { Github, ExternalLink } from "lucide-vue-next";
import { projects } from "../data/ProjectData";
import { experiences } from "../data/ExperienceData"; // bikin file data juga

// ✅ Default tab sekarang "experience"
const activeTab = ref("experience");
</script>

<template>
  <section id="experience" class="w-11/12 max-w-6xl mx-auto py-20">
    <!-- Title -->
    <h2
      class="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
    >
      Experience & Projects
    </h2>

    <!-- Tabs -->
    <div class="flex justify-center gap-4 mb-10">
      <!-- ✅ Experience di kiri -->
      <button
        @click="activeTab = 'experience'"
        :class="[
          'px-6 py-2 rounded-full border transition',
          activeTab === 'experience'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'bg-transparent border-gray-400 text-gray-600 dark:text-gray-300',
        ]"
      >
        Experience
      </button>

      <button
        @click="activeTab = 'projects'"
        :class="[
          'px-6 py-2 rounded-full border transition',
          activeTab === 'projects'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'bg-transparent border-gray-400 text-gray-600 dark:text-gray-300',
        ]"
      >
        Projects
      </button>
    </div>

    <!-- ✅ Experience (default tampil pertama) -->
    <div v-if="activeTab === 'experience'" class="grid md:grid-cols-2 gap-6">
      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="bg-white dark:bg-gray-800 shadow rounded-xl p-5 border border-gray-500"
      >
        <h3 class="font-semibold text-lg mb-1">{{ exp.position }}</h3>
        <p class="text-sm text-gray-500">{{ exp.company }} | {{ exp.year }}</p>

        <!-- ✅ Deskripsi dengan bullet points -->
        <ul
          class="mt-3 list-disc list-inside text-sm text-gray-600 dark:text-gray-300"
        >
          <li v-for="(item, i) in exp.description" :key="i">{{ item }}</li>
        </ul>

        <!-- ✅ Tech Stack -->
        <div class="flex flex-wrap gap-2 mt-3">
          <span
            v-for="(t, i) in exp.tech"
            :key="i"
            class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
          >
            {{ t }}
          </span>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <div v-else class="flex gap-6 overflow-x-auto pb-4">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="w-125 bg-white dark:bg-gray-800 rounded-xl p-5 flex-shrink-0 border border-gray-400"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="rounded-lg mb-4 w-full h-40 object-cover"
        />
        <h3 class="font-semibold text-lg mb-2">{{ project.title }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {{ project.description }}
        </p>

        <!-- ✅ Tech Stack -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="(t, i) in project.tech"
            :key="i"
            class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
          >
            {{ t }}
          </span>
        </div>

        <div class="flex gap-4">
          <a
            :href="project.repoLink"
            target="_blank"
            class="text-gray-700 dark:text-gray-300 flex items-center gap-1"
          >
            <Github class="w-4 h-4" /> Code
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
