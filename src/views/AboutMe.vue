<template>
    <section class="relative flex flex-col justify-between pt-20 items-center min-h-screen bg-gradient-to-r from-[#4a2a6f] via-[#6b46c1] to-[#4c51bf] p-6">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white bg-opacity-90 rounded-lg shadow-lg p-6 max-w-7xl">
            <!-- Image Section -->
            <div class="w-full md:w-1/3 p-4">
                <div class="rounded-lg overflow-hidden">
                    <img :src="profile" alt="Profile" class="w-full h-auto object-cover" />
                </div>
            </div>

            <!-- About Me Section -->
            <div class="w-full md:w-2/3 p-4">
                <div class="text-center md:text-left">
                    <h2 class="text-2xl font-bold text-purple-700 mb-4">About Me</h2>
                    <p class="text-gray-700 mb-4">
                        I am a second-year student at Passerelles Numériques Cambodia (PNC). I am qualified as a WEP
                        intern, with experience in back-end, front-end, and website design projects completed during
                        my studies. I'm passionate about creating user-friendly web solutions and am seeking internship
                        opportunities to grow my skills.
                    </p>
                    <a :href="cvPath" download="CV-sor-chhin.pdf">
                        <BaseButthon class="bg-purple-400 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300">
                            Download CV
                        </BaseButthon>
                    </a>
                </div>
                <!-- Interests -->
                <div class="mt-4">
          <h3 class="text-2xl    font-semibold mb-2">Interests</h3>
          <div class="flex flex-wrap gap-2 ">
            <span class="bg-gray-200 px-3 py-2 rounded-full">Researching</span>
            <span class="bg-gray-200 px-3 py-2 rounded-full">Coding</span>
            <span class="bg-gray-200 px-3 py-2 rounded-full">Reading(Book)</span>
            <span class="bg-gray-200 px-3 py-2 rounded-full">Building communication</span>
            <span class="bg-gray-200 px-3 py-2 rounded-full">Learning a new things</span>
            <span class="bg-gray-200 px-3 py-2 rounded-full">Volunteering</span>
          </div>
        </div>
      
            </div>
        </div>
    </section>
 <section class="bg-gradient-to-r from-[#4a2a6f] via-[#6b46c1] to-[#4c51bf] pb-9">
    <div id="app" class="container mx-auto p-4">
      <div class="flex flex-col items-center space-y-4">
        <h1 class="text-2xl font-bold">Skills</h1>
        <div class="flex flex-wrap justify-center gap-20">
          <div v-for="tool in tools" :key="tool.name" class="flex flex-col font-bold items-center">
            <img :src="tool.icon" alt="Icon" class="w-16 h-16 bounce-continuously">
            <p class="mt-2 text-center">{{ tool.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import BaseButthon from '@/components/common/BaseButton.vue';
import { ref } from 'vue';
// import Skills from '@/components/Layouts/Skills.vue'
 const tools = ref([
          { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png' },
          { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/128/174/174854.png' },
          { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/128/919/919826.png' },
          { name: 'PHP', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968332.png' },
          { name: 'Node js', icon: 'https://cdn-icons-png.flaticon.com/128/15484/15484303.png' },
          { name: 'OOP(TypeScript)', icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png' }, // Fixed typo from 'CapCus' to 'CapCut'
          { name: 'Vue js', icon: 'https://cdn-icons-png.flaticon.com/128/15484/15484278.png' },
          { name: 'Laravel', icon: 'https://avatars.githubusercontent.com/u/958072?s=280&v=4' },
        ]);

        // return { tools };
      
const profile = ref(new URL('@/assets/images/me.jpg', import.meta.url).href);
const cvPath = ref(new URL('@/assets/cv/CV-sor-chhin.pdf', import.meta.url).href);
</script>

<style scoped>
@keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .bounce-continuously {
      animation: bounce 1.5s ease-in-out infinite;
    }
</style>