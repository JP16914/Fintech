<template>
  <header class="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-2 cursor-pointer select-none">
        <div class="relative w-8 h-8 flex items-center justify-center">
             <svg viewBox="0 0 24 24" class="w-full h-full text-[#1E293B]" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 21h18M5 21v-7l4-4 4 4 4-4v11" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 3l-4 4-4-4" stroke="#D97706" /> 
             </svg>
        </div>
        <div class="flex flex-col leading-none">
            <span class="text-xl font-bold text-[#1E293B] font-serif">Quant<span class="text-[#D97706]">Fident</span></span>
            <span class="text-[0.6rem] text-gray-500 tracking-wider uppercase hidden sm:block">Think Smart. Be QuantFident.</span>
        </div>
      </div>

      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#" class="hover:text-[#991B1B] transition-colors">Chương trình</a>
        <a href="#" class="hover:text-[#991B1B] transition-colors">Nghề nghiệp</a>
        <a href="#" class="hover:text-[#991B1B] transition-colors">Kỹ năng</a>
        <a href="#" class="hover:text-[#991B1B] transition-colors">Phỏng vấn</a>
        <a href="#" class="hover:text-[#991B1B] transition-colors">Tài nguyên</a>
        <a href="#" class="hover:text-[#991B1B] transition-colors">Blog</a>
      </nav>

      <div class="flex items-center gap-3">
        <button class="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
          Đăng nhập
        </button>
        <button class="px-4 py-2 text-sm font-semibold text-white bg-[#991B1B] rounded-lg shadow hover:bg-[#7f1616] transition-all">
          Liên hệ
        </button>
      </div>
    </div>
  </header>
</template>