<template>
  <div
    class="bg-white p-6 rounded-lg shadow-md"
    :data-aos="'fade-up'"
    :data-aos-delay="delay"
  >
    <h3 class="text-xl font-semibold">{{ title }}</h3>
    <p class="text-gray-600">{{ date }}<span v-if="role"> | {{ role }}</span></p>
    <ul class="list-disc pl-6 mt-2">
      <li v-for="(item, idx) in details" :key="idx">{{ item }}</li>
    </ul>
    <div class="flex space-x-4 mt-4">
      <base-butthon v-if="demoLink">Demo</base-butthon>
      <base-butthon v-if="codeLink">GitHub</base-butthon>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  date: String,
  role: String,
  details: Array,
  demoLink: String,
  codeLink: String,
  delay: Number,
});
</script>
