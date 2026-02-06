<template>
  <footer class="bg-[#FDFBF7] pt-16 pb-8 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <div class="col-span-1 md:col-span-1">
          <router-link to="/" class="flex items-center gap-2 mb-4 group cursor-pointer">
             <span class="text-xl font-bold text-[#1E293B] font-serif group-hover:text-[#991B1B] transition-colors">
                Quant<span class="text-[#D97706]">Fident</span>
             </span>
          </router-link>
          <p class="text-gray-500 text-sm mb-6">Think Smart. Be QuantFident.</p>
        </div>

        <div class="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            <div class="flex flex-col gap-3 text-sm text-gray-600">
                <router-link to="/chuong-trinh" class="hover:text-[#991B1B] transition-colors">Chương trình</router-link>
                <router-link to="/nghe-nghiep" class="hover:text-[#991B1B] transition-colors">Nghề nghiệp</router-link>
                <router-link to="/ky-nang" class="hover:text-[#991B1B] transition-colors">Kỹ năng</router-link>
                <router-link to="/tai-nguyen" class="hover:text-[#991B1B] transition-colors">Tài nguyên</router-link>
            </div>
            
            <div class="flex flex-col gap-3 text-sm text-gray-600">
                <router-link to="/phong-van" class="hover:text-[#991B1B] transition-colors">Phỏng vấn</router-link>
                <router-link to="/blog" class="hover:text-[#991B1B] transition-colors">Blog</router-link>
                <a href="mailto:tribd.tec@gmail.com" class="hover:text-[#991B1B] transition-colors">Liên hệ</a>
                <span class="text-gray-400 cursor-not-allowed">Privacy & Terms</span>
            </div>
        </div>

        <div class="col-span-1 flex justify-start md:justify-end gap-4 text-gray-800">
            <a href="mailto:tribd.tec@gmail.com" class="hover:text-[#991B1B] transition-transform hover:-translate-y-1" aria-label="Email">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </a>
            <a href="#" class="hover:text-[#991B1B] transition-transform hover:-translate-y-1" aria-label="GitHub">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path></svg>
            </a>
            <a href="#" class="hover:text-[#991B1B] transition-transform hover:-translate-y-1" aria-label="LinkedIn">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg>
            </a>
             <a href="#" class="hover:text-[#991B1B] transition-transform hover:-translate-y-1" aria-label="Facebook">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
             </a>
        </div>
      </div>

      <div class="text-center text-xs text-gray-400">
        © 2026 QuantFident. All rights reserved.
      </div>
    </div>
  </footer>
</template>