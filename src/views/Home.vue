<template>
    <section class="relative overflow-hidden h-100 text-white bg-gradient-to-b from-[#1e1832] to-[#221d3a] py-16">
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
            class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center mt-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-4" data-aos="zoom-in" data-aos-delay="200">
                Sor Chhin
            </h1>
            <p class="text-xl mb-6" data-aos="fade-up" data-aos-delay="400">
                Front-end Intern | Web Developer
            </p>
            <a href="#contact"
                class="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition mb-6 flex items-center gap-2"
                data-aos="fade-up" data-aos-delay="600">
                <i class="fas fa-comment"></i> Get in Touch
            </a>
            <!-- Social Media Buttons -->
            <div class="flex gap-4" data-aos="fade-up" data-aos-delay="800">
                <a href="https://www.facebook.com" target="_blank"
                    class="bg-white text-[#2c71a5] p-3 rounded-full hover:bg-gray-100 transition">
                    <img  src="https://en.followersnet.com/wp-content/uploads/2016/02/Facebook-1.png" alt="Facebook" class="w-6 font-3xl h-6">
                </a>
                <a href="https://www.linkedin.com/in/sor-chhin-94112a345/" target="_blank"
                    class="bg-white text-indigo-600 p-3 rounded-full hover:bg-gray-100 transition">
                    <img src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="LinkedIn" class="w-6 h-6">
                </a>
                <a href="mailto:your.email@example.com"
                    class="bg-white text-indigo-600 p-3 rounded-full hover:bg-gray-100 transition">
                    <img src="https://play-lh.googleusercontent.com/CwrfCWm6w0ASckocklW6qcEGOE2BMsGU8up-dlkXXP4qe95ZIpow0B1i4z6hqHLKPg" alt="Email" class="w-6 h-6">
                </a>
                <a href="https://t.me/SOR_CHHIN" target="_blank"
                    class="bg-white text-indigo-600 p-3 rounded-full hover:bg-gray-100 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png" alt="Telegram" class="w-6 h-6">
                </a>
            </div>
        </div>
    </section>

    <AboutMe />
</template>

<script setup>
import AboutMe from './AboutMe.vue';
</script>

<style scoped>
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
        background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 30px 30px;
        opacity: 0.1;
    }

    50% {
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
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
</style>