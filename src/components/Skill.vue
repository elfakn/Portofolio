<script setup>
import {
  Code,
  Monitor,
  Server,
  Database,
  GitBranch,
  PackageCheck,
  Terminal,
  Wrench,
  Box,
  PenTool,
} from "lucide-vue-next";

const categories = [
  { title: "Languages", description: "PHP, Java, JavaScript, C#", icon: Code },
  {
    title: "Frontend",
    description: "HTML, CSS, jQuery, React.js",
    icon: Monitor,
  },
  {
    title: "Backend",
    description: "Laravel, CodeIgniter, Spring, .NET Core",
    icon: Server,
  },
  { title: "Database", description: "SQL Server, MySQL", icon: Database },
];

const tools = [
  { name: "VS Code", icon: Terminal },
  { name: "Git", icon: GitBranch },
  { name: "Figma", icon: PenTool },
  { name: "Postman", icon: Wrench },
];
</script>

<template>
  <section id="skills" class="w-11/12 max-w-6xl mx-auto py-16">
    <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-10">
      Skills & Tools
    </h2>

    <!-- Cards grid -->
    <div class="grid sm:grid-cols-2 gap-6">
      <article
        v-for="(cat, i) in categories"
        :key="i"
        class="p-6 rounded-2xl border border-gray-400 bg-white dark:bg-gray-900 flex items-start gap-4"
      >
        <!-- Icon -->
        <div
          class="flex items-center justify-center p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
          style="min-width: 56px; min-height: 56px"
        >
          <component :is="cat.icon" class="w-6 h-6" aria-hidden="true" />
        </div>

        <!-- Text -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">
            {{ cat.title }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ cat.description }}
          </p>
        </div>
      </article>
    </div>

    <!-- Tools -->
    <div class="mt-12">
      <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Tools I use
      </h4>
      <div class="flex flex-wrap gap-3">
        <button
          v-for="(t, idx) in tools"
          :key="idx"
          class="flex items-center gap-3 px-4 py-2 rounded-xl border border-gray-400 bg-white dark:bg-gray-900"
          :title="t.name"
        >
          <div
            class="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
          >
            <component :is="t.icon" class="w-5 h-5" />
          </div>
          <span class="text-sm text-gray-700 dark:text-gray-200 font-medium">
            {{ t.name }}
          </span>
        </button>
      </div>
    </div>
  </section>
</template>
