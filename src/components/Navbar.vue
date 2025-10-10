<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Menu, X, Sun, Moon } from "lucide-vue-next";

const isScroll = ref(false);
const isOpen = ref(false);
const isDark = ref(false);

const handleScroll = () => {
  isScroll.value = window.scrollY > 50;
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  // Set tema awal
  if (localStorage.getItem("theme") === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }

  // Pasang event scroll
  window.addEventListener("scroll", handleScroll);
});


onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="
      isScroll
        ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-sm'
        : 'bg-transparent'
    "
  >
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="/"
        class="text-xl font-bold text-gray-800 dark:text-white transition-colors"
      >
        Elfa Khoirun Nissa
      </a>

      <!-- Menu (Desktop) -->
      <nav class="hidden md:flex items-center gap-8">
        <a
          href="#top"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          About
        </a>
        <a
          href="#skills"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Skill
        </a>
        <a
          href="#experience"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Experience
        </a>
        <a
          href="#contact"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Contact
        </a>

        <!-- Tombol Dark / Light -->
        <button
          @click="toggleTheme"
          class="ml-4 p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Sun v-if="isDark" class="w-5 h-5 text-yellow-400" />
          <Moon v-else class="w-5 h-5 text-gray-900 dark:text-gray-100" />
        </button>
      </nav>

      <!-- Hamburger (Mobile) -->
      <button
        @click="isOpen = true"
        class="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
      >
        <Menu class="w-6 h-6" />
      </button>
    </div>

    <!-- Overlay (Mobile) -->
    <div
      v-show="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 bg-black/40 md:hidden z-40"
    />

    <!-- Side Menu (Mobile) -->
    <aside
      class="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 md:hidden z-50"
      :class="[isOpen ? 'translate-x-0' : 'translate-x-full']"
    >
      <!-- Tombol Close -->
      <div class="flex justify-end p-4">
        <button
          @click="isOpen = false"
          class="text-gray-700 dark:text-gray-200"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Menu List -->
      <nav class="flex flex-col gap-4 px-6">
        <a
          @click="isOpen = false"
          href="#top"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Home
        </a>
        <a
          @click="isOpen = false"
          href="#about"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          About
        </a>
        <a
          @click="isOpen = false"
          href="#skills"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Skill
        </a>
        <a
          @click="isOpen = false"
          href="#project"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Project
        </a>
        <a
          @click="isOpen = false"
          href="#contact"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Contact
        </a>
      </nav>
    </aside>
  </header>
</template>
