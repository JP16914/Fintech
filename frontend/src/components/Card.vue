<template>
  <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div class="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-xl mb-4">
      {{ icon }}
    </div>
    <h3 class="font-bold text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-sm text-gray-500 leading-relaxed">{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps(['title', 'icon', 'desc'])
</script>