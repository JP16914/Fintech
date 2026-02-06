<template>
  <div>
    <div class="flex justify-between mb-1">
      <span class="font-medium text-sm text-gray-700">{{ label }}</span>
      <span class="text-sm text-gray-500">{{ percent }}</span>
    </div>
    <div class="w-full bg-[#EBE7E0] rounded-full h-2">
      <div class="bg-[#991B1B] h-2 rounded-full" :style="{ width: percent }"></div>
    </div>
  </div>
</template>

<script setup>
defineProps(['label', 'percent'])
</script>