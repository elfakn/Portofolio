<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { Menu, X, Sun, Moon } from "lucide-vue-next";

const isScroll = ref(false);
const isOpen = ref(false);
const isDark = ref(false);
const active = ref("top");

const links = [
  { id: "top", label: "Home", href: "#top" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

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

const closeMenu = () => {
  isOpen.value = false;
};

const onKeydown = (e) => {
  if (e.key === "Escape") closeMenu();
};

let observer;
watch(isOpen, (v) => {
  document.body.style.overflow = v ? "hidden" : "";
  if (v) document.addEventListener("keydown", onKeydown);
  else document.removeEventListener("keydown", onKeydown);
});

onMounted(() => {
  if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  const ids = ["top", "about", "skills", "experience", "contact"];
  const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) active.value = visible.target.id;
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
  );
  els.forEach((el) => observer.observe(el));
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
  if (observer) observer.disconnect();
});
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b"
    :class="isScroll
      ? 'bg-white/75 dark:bg-gray-900/70 backdrop-blur-xl shadow-sm border-gray-200/60 dark:border-white/10'
      : 'bg-transparent border-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
      <a
        href="#top"
        @click="active = 'top'"
        class="text-[15px] font-bold tracking-tight text-gray-900 dark:text-white focus-visible:outline-none"
        aria-label="Go to homepage"
      >
        <span class="inline-flex items-center gap-2">
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600 text-white text-xs font-extrabold">EK</span>
          Elfa Khoirun Nissa
        </span>
      </a>

      <nav class="hidden md:flex items-center gap-1" aria-label="Primary">
        <a
          v-for="l in links"
          :key="l.id"
          :href="l.href"
          :aria-current="active === l.id ? 'page' : undefined"
          @click="active = l.id"
          class="px-3 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none"
          :class="active === l.id
            ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'"
        >
          {{ l.label }}
        </a>
        <button
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          class="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 transition focus-visible:outline-none"
        >
          <Sun v-if="isDark" class="w-4 h-4 text-yellow-500" aria-hidden="true" />
          <Moon v-else class="w-4 h-4 text-gray-700" aria-hidden="true" />
        </button>
      </nav>

      <div class="flex md:hidden items-center gap-2">
        <button
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-white/15 bg-white/80 dark:bg-white/5"
        >
          <Sun v-if="isDark" class="w-4 h-4 text-yellow-500" aria-hidden="true" />
          <Moon v-else class="w-4 h-4 text-gray-700" aria-hidden="true" />
        </button>
        <button
          @click="isOpen = true"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mobile-drawer"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900"
        >
          <Menu class="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div
      v-show="isOpen"
      @click="closeMenu"
      class="fixed inset-0 bg-gray-900/40 backdrop-blur-sm md:hidden z-40"
      aria-hidden="true"
    />

    <aside
      id="mobile-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      class="fixed top-0 right-0 h-[100dvh] w-[82%] max-w-[320px] bg-white dark:bg-gray-900 shadow-2xl flex flex-col md:hidden z-50 transition-transform duration-300 will-change-transform"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-white/10">
        <span class="text-sm font-semibold text-gray-900 dark:text-white">Menu</span>
        <button
          @click="closeMenu"
          aria-label="Close menu"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200"
        >
          <X class="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
      <nav class="flex flex-col p-3 gap-1" aria-label="Mobile">
        <a
          v-for="l in links"
          :key="l.id"
          :href="l.href"
          @click="active = l.id; closeMenu()"
          class="px-4 py-3 rounded-xl text-[15px] font-medium transition"
          :class="active === l.id
            ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10'"
        >
          {{ l.label }}
        </a>
        <p class="px-4 pt-6 text-xs text-gray-400 dark:text-gray-500">© {{ new Date().getFullYear() }} Elfa Khoirun Nissa</p>
      </nav>
    </aside>
  </header>
</template>
