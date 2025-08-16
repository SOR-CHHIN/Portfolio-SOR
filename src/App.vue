<template>

    <Navigation/>
    <router-view></router-view>
    <Footer/>
      
</template>

<script setup>
import {ref} from 'vue';
import Navigation from "@/components/Layouts/Navigation.vue";
import Footer from "@/components/Layouts/Footer.vue";


</script>

<style lang="scss" scoped>

</style>