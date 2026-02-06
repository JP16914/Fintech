<template>
  <div class="pt-10 pb-20 px-6 max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-[#3e1313] mb-6">Tài Nguyên Học Tập</h1>
      <p class="text-lg text-gray-600">Sách, bài báo và công cụ được chọn lọc kỹ càng.</p>
    </div>

    <div class="grid md:grid-cols-4 gap-6">
        <div v-for="(item, idx) in resources" :key="idx" class="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner">
                {{ item.icon }}
            </div>
            <h3 class="font-serif font-bold text-[#1E293B] mb-2">{{ item.title }}</h3>
            <p class="text-xs text-gray-500 mb-4 flex-grow">{{ item.author }}</p>
            <button class="text-[#991B1B] text-sm font-bold hover:underline flex items-center gap-1">
                Tải xuống <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
const resources = [
    { title: "Quant Interview Guide", author: "Xinfeng Zhou", icon: "📗" },
    { title: "Options & Derivatives", author: "John C. Hull", icon: "📘" },
    { title: "Algorithmic Trading", author: "Ernest Chan", icon: "📙" },
    { title: "Python for Finance", author: "Yves Hilpisch", icon: "🐍" },
    { title: "Machine Learning", author: "Kevin Murphy", icon: "🧠" },
    { title: "Brainteasers 101", author: "Timothy Crack", icon: "🧩" },
    { title: "WorldQuant BRAIN", author: "Official Docs", icon: "🌐" },
    { title: "QuantFident Cheatsheet", author: "Exclusive", icon: "📑" }
]
</script>