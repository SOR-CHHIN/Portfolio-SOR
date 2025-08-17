<template>
  <section id="experience" class="py-20 bg-gradient-to-r from-[#4a2a6f] via-[#6b46c1] to-[#4c51bf]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center text-white mb-12" data-aos="fade-down" data-aos-delay="200">
        Experience
      </h2>

      <!-- Other experiences inside Swiper -->
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        class="pb-10"
        :modules="[Navigation, Pagination]"
        navigation
        pagination
      >
        <swiper-slide
          v-for="(exp, index) in filteredExperiences"
          :key="index"
          class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
        >
          <div class="flex flex-col mb-4">
            <h3 class="text-2xl font-semibold text-gray-900">{{ exp.title }}</h3>
            <p class="text-purple-600 font-medium">{{ exp.role }}</p>
            <p class="text-gray-500 text-sm">{{ exp.date }}</p>
          </div>
          <ul class="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li v-for="(detail, dIndex) in exp.details" :key="dIndex">{{ detail }}</li>
          </ul>
          <div class="flex gap-4 mt-6">
            <a :href="exp.code" target="_blank" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition">
              View Code
            </a>
            <a :href="exp.demo" target="_blank" class="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-50 transition">
              Live Demo
            </a>
          
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

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
    demo: '', // Replace with actual demo URL
    code: 'https://github.com/sinhpp/VC1-POS_System', // Replace with actual code URL
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
    demo: '', // Replace with actual demo URL
    code: 'https://github.com/lymengmeng09/G12_AUTOMATED-DOCUMENT-GENERATION-', // Replace with actual code URL
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
    demo: 'https://note-taker-app-group5.netlify.app/', // Replace with actual demo URL
    code: 'https://github.com/Sokleap-Seng/project-Note-Taker-G5', // Replace with actual code URL
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
    demo: 'https://clinic-service-a6.netlify.app/', // Replace with actual demo URL
    code: 'https://github.com/darinhoy/clinic-service-A6', // Replace with actual code URL
  },
])

const filteredExperiences = computed(() => {
  return experiences.value.filter(exp => exp.title !== 'Note Taker App')
})

onMounted(() => {
  AOS.init({ once: true, duration: 100 })
})
</script>