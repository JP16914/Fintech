<template>
  <div class="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-white">
    <Header />

    <HomePage />

    <Footer />

    <div class="fixed bottom-6 right-6 z-50">
        <button class="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-red-800 transition-transform hover:scale-110 flex items-center justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </button>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HomePage from './components/HomePage.vue';
</script>