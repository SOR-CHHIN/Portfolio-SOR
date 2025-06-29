<template>
  <nav class="h-16 flex items-center justify-between px-4 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
    <!-- Logo -->
    <div class="text-xl font-bold">SOR CHHIN</div>

    <!-- Hamburger Button (Mobile Only) -->
    <button @click="toggleMenu" class="md:hidden">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

    <!-- Navigation Items -->
    <div
      id="nav-item"
      class="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 absolute md:static bg-white md:bg-transparent left-0 right-0 top-16 md:top-0 px-4 md:px-0 transition-all duration-300"
      :class="{ hidden: !isMenuOpen && !screenIsMd, flex: isMenuOpen || screenIsMd }"
    >
      <navigation-item
        v-for="item in navItems"
        :key="item.label"
        :item="item"
        class="hover:bg-blue-100 p-2 rounded-md hover:text-blue-600 text-shadow-md"
      />
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavigationItem from './NavigationItem.vue'

// Navigation Items
const navItems = ref([
  { label: "Home", path: "/", icon: "home" },
  { label: "About Me", path: "/about", icon: "person" },
  { label: "Skills", path: "/skills", icon: "build" },
  { label: "Experience", path: "/experience", icon: "work" },
  { label: "Education", path: "/education", icon: "school" },
  { label: "Contact", path: "/contact", icon: "mail" },
])

// Menu State
const isMenuOpen = ref(false)
const screenIsMd = ref(window.innerWidth >= 768)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Watch for screen resizing to auto-show/hide menu
const updateScreenSize = () => {
  screenIsMd.value = window.innerWidth >= 768
  if (screenIsMd.value) isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>
