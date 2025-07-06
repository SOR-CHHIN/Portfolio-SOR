<template>
  <section id="experience" class="py-16 bg-gradient-to-r from-[#4a2a6f] via-[#6b46c1] to-[#4c51bf]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-8 text-white fade-up">
        Experience
      </h2>

      <!-- Filter Buttons -->
      <div class="flex  gap-2 mb-6 justify-center fade-up">
        <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat" :class="[
          'p-3 border rounded-md shadow-md text-white transition-all duration-300',
          selectedCategory === cat
            ? 'bg-gradient-to-r from-purple-700 to-indigo-700'
            : 'bg-gradient-to-b from-[#1e1832] to-[#221d3a] hover:bg-opacity-90'
        ]" @mouseover="hoverEffect(cat)">
          {{ cat }}
        </button>
      </div>

      <!-- Experience Cards -->
      <div class="space-y-3 flex flex-wrap gap-9 justify-center">
        <CardExperience v-for="(exp, index) in filteredExperiences" :key="index" :image="exp.image" :title="exp.title"
          :date="exp.date" :role="exp.role" :details="exp.details" :demoLink="exp.demo" :codeLink="exp.code"
          class="tech-card fade-up w-90 " />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import CardExperience from '@/components/common/CardExperience.vue';

const categories = ['ALL Experiences', 'Interviews', 'School Project'];
const selectedCategory = ref('ALL Experiences');

const experiences = [
  {
    image: "https://i.pinimg.com/736x/e8/a7/73/e8a773ad8e8dfde46b074a69942242d0.jpg",
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
    image: "https://i.pinimg.com/736x/e8/a7/73/e8a773ad8e8dfde46b074a69942242d0.jpg",

    title: 'Software Deployment',
    date: 'Dec 30, 2024 - Jan 6, 2025',
    category: 'School Project',
    details: [
      'Hosted static website on AWS.',
      'Deployed WordPress website on Ubuntu server.',
    ],
    demo: '#',
    code: '#',
  },
  {
    image: "https://i.pinimg.com/736x/e8/a7/73/e8a773ad8e8dfde46b074a69942242d0.jpg",

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
    image: "https://i.pinimg.com/736x/e8/a7/73/e8a773ad8e8dfde46b074a69942242d0.jpg",
    title: 'Web Design (Clinic Service Websites)',
    date: 'Oct 17, 2024 - Nov 6, 2024',
    role: 'Team Leader',
    category: 'School Project',
    details: [
      'Designed UI using Figma.',
      'Built responsive websites with HTML, SASS, and CSS.',
      'Focused on user-friendly layout and accessibility.',
    ],
    demo: 'https://clinic-service-a6.netlify.app/',
    code: 'http://github.com/darinhoy/clinic-service-A6',
  },
   {
    image: "https://i.pinimg.com/736x/e8/a7/73/e8a773ad8e8dfde46b074a69942242d0.jpg",
    title: 'School management system',
    date: 'Oct 17, 2024 - Nov 6, 2024',
    role: 'Team Leader',
    category: 'School Project',
    details: [
      'Used OOP(TypeScript)',
      'Showed console.log for display the result',
      'Developed using Principle of OOP',
    ],
    demo: 'https://clinic-service-a6.netlify.app/',
    code: 'http://github.com/darinhoy/clinic-service-A6',
  },
   {
    image: "https://i.pinimg.com/736x/e8/a7/73/e8a773ad8e8dfde46b074a69942242d0.jpg",
    title: 'Web Design (Clinic Service Websites)',
    date: 'Oct 17, 2024 - Nov 6, 2024',
    role: 'Team Leader',
    category: 'School Project',
    details: [
      'Designed UI using Figma.',
      'Built responsive websites with HTML, SASS, and CSS.',
      'Focused on user-friendly layout and accessibility.',
    ],
    demo: 'https://clinic-service-a6.netlify.app/',
    code: 'http://github.com/darinhoy/clinic-service-A6',
  }
];

const filteredExperiences = computed(() => {
  if (selectedCategory.value === 'ALL Experiences') {
    return experiences;
  }
  return experiences.filter((exp) => exp.category === selectedCategory.value);
});

const hoverEffect = (cat) => {
  if (selectedCategory.value !== cat) {
    console.log(`Hovered over ${cat}`);
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
});
</script>

<style scoped>
/* Fade-up animation on scroll */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Card hover effect */
.tech-card {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  /* background: linear-gradient(135deg, #6b46c1, #4c51bf); */
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

.tech-card * {
  position: relative;
  z-index: 1;
}

button:hover {
  transform: scale(1.05);
}
</style>
