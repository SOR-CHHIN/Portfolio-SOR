<template>
    <section class="relative overflow-hidden h-full text-white bg-gradient-to-b from-[#2d1b4e] to-[#4a2a6f] py-16">
        <!-- 🌈 Animated Background -->
        <div class="absolute inset-0 z-0 opacity-90"></div>

        <!-- ✨ Tech Particles -->
        <div class="absolute inset-0 z-0 animate-pulse-particles"></div>

        <!-- 💻 Floating Labels -->
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <span class="floating-lang bg-white/10 backdrop-blur text-red-300 top-10 left-10">HTML</span>
            <span class="floating-lang bg-white/10 backdrop-blur text-blue-300 top-24 right-12">CSS</span>
            <span class="floating-lang bg-white/10 backdrop-blur text-yellow-300 bottom-20 left-16">JS</span>
            <span class="floating-lang bg-white/10 backdrop-blur text-green-300 bottom-10 right-16">Vue</span>
            <span class="floating-lang bg-white/10 backdrop-blur text-purple-300 top-16 left-1/2">React</span>
            <span class="floating-lang bg-white/10 backdrop-blur text-pink-300 bottom-8 left-1/4">Tailwind</span>
            <span class="floating-lang bg-white/10 backdrop-blur text-orange-300 top-8 right-1/4">TypeScript</span>
            <span class="floating-lang bg-white/10 backdrop-blur text-teal-300 bottom-24 right-8">Laravel</span>
        </div>

        <!-- 🧑‍💻 Content -->
        <div
            class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-start mt-10 mr-50">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 fade-up">
                Sor Chhin
            </h1>
            <p class="text-xl fade-up">
                Front-end Intern | Web Developer
            </p>
            <p class="text-justify mb-7 fade-up">
                I am eager to challenge myself in a new environment where I can continue learning, growing,<br>
                and applying my skills through hands-on projects.
            </p>
            <router-link to="/contact"
                class="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition mb-6 flex items-center gap-2 fade-up">
                <i class="fas fa-comment"></i> Get in Touch
            </router-link>

            <div class="flex gap-4 fade-up">
                <a href="https://www.facebook.com/share/1WBVoULF3M/" target="_blank"
                    class="bg-white text-[#2c71a5] p-3 rounded-full hover:bg-gray-100 transition">
                    <img src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png" alt="Facebook"
                        class="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/sor-chhin-94112a345/" target="_blank"
                    class="bg-white text-indigo-600 p-3 rounded-full hover:bg-gray-100 transition">
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" class="w-6 h-6" />
                </a>
                <a href="mailto:your.email@example.com"
                    class="bg-white text-indigo-600 p-3 rounded-full hover:bg-gray-100 transition">
                    <img src="https://play-lh.googleusercontent.com/CwrfCWm6w0ASckocklW6qcEGOE2BMsGU8up-dlkXXP4qe95ZIpow0B1i4z6hqHLKPg"
                        alt="Email" class="w-6 h-6" />
                </a>
                <a href="https://t.me/SOR_CHHIN" target="_blank"
                    class="bg-white text-indigo-600 p-3 rounded-full hover:bg-gray-100 transition">
                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="Telegram" class="w-6 h-6" />
                </a>
            </div>
        </div>
    </section>

    <AboutMe />
    <Experience />
    <Contact/>
</template>

<script setup>
import { onMounted } from 'vue';
import AboutMe from './AboutMe.vue';
import Experience from './Experience.vue';
import Contact from './Contact.vue';

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
        {
            threshold: 0.1,
        }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
});
</script>

<style scoped>
/* 🌈 background animations */
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

@keyframes pulse-particles {

    0%,
    100% {
        background-size: 30px 30px;
        opacity: 0.1;
    }

    50% {
        background-size: 40px 40px;
        opacity: 0.2;
    }
}

@keyframes float {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.4;
    }

    50% {
        transform: translateY(-20px) rotate(5deg);
        opacity: 0.8;
    }

    100% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.4;
    }
}

.animate-gradient {
    background-size: 300% 300%;
    animation: gradient 10s ease infinite;
}

.animate-pulse-particles {
    animation: pulse-particles 5s ease-in-out infinite;
}

.floating-lang {
    position: absolute;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.7;
    backdrop-filter: blur(4px);
    animation: float 6s ease-in-out infinite;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
    .floating-lang {
        font-size: 1.25rem;
    }
}

/* ✨ scroll animation */
.fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-up.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>
