<template>
  <section id="experience" class="py-16 bg-gradient-to-r from-[#4a2a6f] via-[#6b46c1] to-[#4c51bf]" data-aos="fade-up" data-aos-duration="1000">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-8 text-white" data-aos="fade-down" data-aos-delay="200">
        Experience
      </h2>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap gap-2 mb-6 justify-center">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            'p-3 border rounded-md shadow-md text-white transition-all duration-300',
            selectedCategory === cat
              ? 'bg-gradient-to-r from-purple-700 to-indigo-700'
              : 'bg-gradient-to-b from-[#1e1832] to-[#221d3a] hover:bg-opacity-90'
          ]"
          @mouseover="hoverEffect(cat)"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Experience Cards -->
      <div class="space-y-8">
        <CardExperience
          v-for="(exp, index) in filteredExperiences"
          :key="index"
          :title="exp.title"
          :date="exp.date"
          :role="exp.role"
          :details="exp.details"
          :demoLink="exp.demo"
          :codeLink="exp.code"
          :delay="index * 200 + 400",
         
          class="tech-card"
        />
      </div>
    </div>
  </section>
  
</template>

<script setup>
import { ref, computed } from 'vue';
import CardExperience from '@/components/common/CardExperience.vue';

// Available categories
const categories = ['ALL Experiences', 'Interviews', 'School Project'];
const selectedCategory = ref('ALL Experiences');

// Updated sample experience data with corrected dates
const experiences = [
  {
    title: 'Note Taker App',
    date: 'Jan 12, 2024 - Jan 26, 2024',
    role: 'Developer',
    category: 'School Project',
    details: [
      'Designed UI using Figma.',
      'Implemented front-end with HTML, CSS, Bootstrap, and JavaScript.',
      'Used Git and GitHub for version control.',
    ],
    demo: '#',
    code: '#',
  },
  {
    title: 'Software Deployment',
    date: 'Dec 30, 2024 - Jan 6, 2025', // Corrected end date
    category: 'Interviews',
    details: [
      'Hosted static website on AWS.',
      'Deployed WordPress website on Ubuntu server.',
    ],
    demo: '#',
    code: '#',
  },
  {
    title: 'Automated Document Generation',
    date: 'Oct 11, 2024 - Nov 20, 2024',
    role: 'Developer',
    category: 'School Project',
    details: [
      'Designed document templates in Microsoft Word.',
      'Organized data in Microsoft Excel.',
      'Developed Python algorithm for core functionality.',
    ],
    demo: '#',
    code: '#',
  },
  {
    title: 'Web Design (Clinic Service Websites)',
    date: 'Oct 17, 2024 - Nov 6, 2024',
    role: 'Team Leader',
    category: 'School Project',
    details: [
      'Designed UI using Figma.',
      'Built responsive websites with HTML, SASS, and CSS.',
      'Focused on user-friendly layout and accessibility.',
    ],
    demo: '#',
    code: '#',
  },
];

// Computed filter
const filteredExperiences = computed(() => {
  if (selectedCategory.value === 'ALL Experiences') {
    return experiences;
  }
  return experiences.filter((exp) => exp.category === selectedCategory.value);
});

// Hover effect for buttons (optional techy feedback)
const hoverEffect = (cat) => {
  if (selectedCategory.value !== cat) {
    console.log(`Hovered over ${cat}`);
    // Add more complex effects (e.g., scale) if desired
  }
};
</script>

<style scoped>
/* Tech-themed animation for cards */
.tech-card {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #6b46c1, #4c51bf);
}

.tech-card:hover h3,
.tech-card:hover p,
.tech-card:hover a {
  color: white !important;
}

.tech-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.tech-card:hover::after {
  left: 100%;
}

/* Ensure text readability */
.tech-card * {
  position: relative;
  z-index: 1;
}

/* Button hover effect enhancement */
button:hover {
  transform: scale(1.05);
}
</style>