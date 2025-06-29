<template>
  <section id="about" class="relative overflow-hidden py-20 bg-gray-900 text-white">
    <!-- Background animation -->
    <div class="absolute inset-0 z-0">
      <div class="w-full h-full opacity-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 animate-gradient"></div>
      <div class="absolute w-full h-full animate-pulse-particles"></div>
    </div>

    <!-- Foreground content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 bg-gray-100 p-10 rounded-md shadow-md">
      <h2 class="text-3xl font-bold text-center mb-3 text-black hover:text-blue-600 ml-7">
        About Me
      </h2>

      <div class="flex flex-col md:flex-row items-center justify-center gap-12">
        <!-- Orbit Image -->
        <div class="relative w-60 h-60 sm:w-72 sm:h-72">
          <img
            :src="profile"
            alt="Sor Chhin"
            class="rounded-full w-full h-full object-cover shadow-lg border-4 border-white z-10 relative"
          />

      
        </div>

        <!-- Info -->
        <div class="text-center md:text-left md:max-w-md space-y-4">
          <p class="text-lg text-gray-800">
            I am a second-year student at Passerelles Numériques Cambodia (PNC), passionate about front-end development.
            My goal is to challenge myself in dynamic environments, enhance my skills, and contribute meaningfully to innovative teams.
          </p>
          <ul class="text-sm text-gray-700 space-y-1">
            <li><strong>Name:</strong> Sor Chhin</li>
            <li><strong>Date of Birth:</strong> May 10, 2004</li>
            <li><strong>Gender:</strong> Female</li>
            <li><strong>Province:</strong> Kampot</li>
            <li><strong>Nationality:</strong> Khmer</li>
            <li><strong>Marital Status:</strong> Single</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Interests -->
    <div class="flex justify-center mt-12" data-aos="slide-up" data-aos-delay="800">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h3 class="text-2xl font-semibold text-black mb-4 text-center">Interests</h3>
        <div class="flex flex-wrap justify-center gap-2">
          <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">Researching</span>
          <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">Coding</span>
          <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">Learning</span>
          <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">Reading</span>
          <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">Volunteering</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const profile = ref(new URL('@/assets/images/me.jpg', import.meta.url).href)
</script>

<style scoped>
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulse-particles {
  0%, 100% {
    background: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.1;
  }
  50% {
    background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.2;
  }
}

.animate-gradient {
  background-size: 300% 300%;
  animation: gradient 10s ease infinite;
}

.animate-pulse-particles {
  animation: pulse-particles 5s ease-in-out infinite;
}
</style>
