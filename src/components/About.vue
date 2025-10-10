<script setup>
import { GraduationCap } from "lucide-vue-next";
</script>

<template>
  <section id="about" class="w-11/12 max-w-6xl mx-auto py-20">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10">
      About
    </h2>

    <!-- Grid Content -->
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <!-- Left -->
      <div class="flex flex-col gap-6">
        <div class="grid gap-4">
          <div
            class="p-4 rounded-2xl shadow-md border border-gray-400 bg-white dark:bg-gray-800 flex items-center gap-3"
          >
            <GraduationCap class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <div>
              <h4 class="text-lg font-semibold text-gray-800 dark:text-white">
                Astra Polytechnic, Associate Degree in Information Management
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                2022 – 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
        <p>
          I am passionate about creating impactful digital solutions, and I
          enjoy transforming complex ideas into applications that are both
          scalable and intuitive. I actively seek opportunities to learn from
          challenges and embrace innovative approaches, believing that
          adaptability is key to long-term success.
        </p>
      </div>
    </div>
  </section>
</template>
