<template>
  <nav class="h-16 flex items-center   shadow-md justify-between">
    <div id="nav-item" class="flex items-center m-auto gap-12 ">
      <navigation-item class="hover:bg-blue-100 p-3 rounded-md "
      v-for="item in navItems" 
      :key="item.label" 
      :item="item">
      </navigation-item>
    </div>
    <!-- <div id="nav-item" class="flex items-center m-auto gap-12">
        <navigation-item :item="{label:'Login', path: '/login', icon: 'login'}"></navigation-item>
    </div> -->
  </nav>
</template>

<script setup>
    import NavigationItem from "./NavigationItem.vue";
    import { ref } from 'vue';
   const navItems = ref([
  { label: "Home", path: "/", icon: "home" },
  { label: "About", path: "/about", icon: "person" },
  { label: "Skills", path: "/skills", icon: "build" },
  { label: "Experience", path: "/experience", icon: "work" },
  { label: "Education", path: "/education", icon: "school" },
  { label: "Contact", path: "/contact", icon: "mail" },
]);

</script>