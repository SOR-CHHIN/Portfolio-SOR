<template>
  <section id="experience" class="py-16 bg-gray-100  bg-gradient-to-r from-[#4a2a6f] via-[#6b46c1] to-[#4c51bf]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-down" data-aos-delay="200">
        Experience
      </h2>

      <div class="space-y-8">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="bg-white p-6 rounded-lg shadow-md"
          data-aos="fade-up"
          :data-aos-delay="400 + index * 200"
        >
          <h3 class="text-xl font-semibold">{{ exp.title }}</h3>
          <p class="text-gray-600">
            {{ exp.date }}
            <span v-if="exp.role"> | {{ exp.role }}</span>
          </p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li v-for="(task, tIndex) in exp.details" :key="tIndex">{{ task }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const experiences = ref([
  {
    title: 'Visual Company One (POS System)',
    date: 'Feb 25, 2025 - May 2, 2025',
    role: 'Git Manager',
    details: [
      'Controlled GitHub repository and developed code.',
      'Designed UI using Figma.',
      'Built front-end with HTML, CSS, JavaScript, and Bootstrap; back-end with PHP.',
      'Managed data using a database.',
      'Used Jira for task management.',
    ],
  },
  {
    title: 'Note Taker App',
    date: 'Jan 12, 2024 - Jan 26, 2024',
    role: 'Developer',
    details: [
      'Designed UI using Figma.',
      'Implemented front-end with HTML, CSS, Bootstrap, and JavaScript.',
      'Used Git and GitHub for version control.',
    ],
  },
  {
    title: 'Software Deployment',
    date: 'Dec 30, 2024 - Jan 6, 2024',
    role: '',
    details: [
      'Hosted static website on AWS.',
      'Deployed WordPress website on Ubuntu server.',
    ],
  },
  {
    title: 'Automated Document Generation',
    date: 'Oct 11, 2024 - Nov 20, 2024',
    role: 'Developer',
    details: [
      'Designed document templates in Microsoft Word.',
      'Organized data in Microsoft Excel.',
      'Developed Python algorithm for core functionality.',
    ],
  },
  {
    title: 'Web Design (Clinic Service Websites)',
    date: 'Oct 17, 2024 - Nov 6, 2024',
    role: 'Team Leader',
    details: [
      'Designed UI using Figma.',
      'Built responsive websites with HTML, SASS, and CSS.',
      'Focused on user-friendly layout and accessibility.',
    ],
  },
])

onMounted(() => {
  AOS.init({
    once: true,
    duration: 1000,
  })
})
</script>

<style scoped>
/* Optional: override AOS fade-up transition */
</style>
