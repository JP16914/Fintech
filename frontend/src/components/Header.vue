<template>
  <header class="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
      <router-link to="/" class="flex items-center gap-2 cursor-pointer select-none group">
        <div class="relative w-8 h-8 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
             <svg viewBox="0 0 24 24" class="w-full h-full text-[#1E293B]" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 21h18M5 21v-7l4-4 4 4 4-4v11" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 3l-4 4-4-4" stroke="#D97706" /> 
             </svg>
        </div>
        <div class="flex flex-col leading-none">
            <span class="text-xl font-bold text-[#1E293B] font-serif">Quant<span class="text-[#D97706]">Fident</span></span>
        </div>
      </router-link>

      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <router-link to="/chuong-trinh" class="hover:text-[#991B1B] transition-colors" active-class="text-[#991B1B] font-bold">Chương trình</router-link>
        <router-link to="/nghe-nghiep" class="hover:text-[#991B1B] transition-colors" active-class="text-[#991B1B] font-bold">Nghề nghiệp</router-link>
        <router-link to="/ky-nang" class="hover:text-[#991B1B] transition-colors" active-class="text-[#991B1B] font-bold">Kỹ năng</router-link>
        <router-link to="/phong-van" class="hover:text-[#991B1B] transition-colors" active-class="text-[#991B1B] font-bold">Phỏng vấn</router-link>
        <router-link to="/tai-nguyen" class="hover:text-[#991B1B] transition-colors" active-class="text-[#991B1B] font-bold">Tài nguyên</router-link>
        <router-link to="/blog" class="hover:text-[#991B1B] transition-colors" active-class="text-[#991B1B] font-bold">Blog</router-link>
      </nav>

      <div class="flex items-center gap-3">
        
        <div v-if="!user" class="flex gap-3">
            <router-link to="/login" class="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
            Đăng nhập
            </router-link>
            <router-link to="/register" class="px-4 py-2 text-sm font-semibold text-white bg-[#991B1B] rounded-lg shadow hover:bg-[#7f1616] transition-all">
            Đăng ký
            </router-link>
        </div>

        <div v-else class="flex items-center gap-3 relative group">
            <div class="text-right hidden sm:block">
                <div class="text-sm font-bold text-[#1E293B]">{{ user.fullName || user.username }}</div>
                <div class="text-[10px] text-[#D97706] font-bold uppercase tracking-wider">{{ user.title || 'Member' }}</div>
            </div>
            
            <div class="w-10 h-10 rounded-full border-2 border-[#991B1B] overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all">
                <img :src="user.avatar || `https://ui-avatars.com/api/?name=${user.username}&background=991B1B&color=fff`" class="w-full h-full object-cover" alt="Avatar">
            </div>

            <div class="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 hidden group-hover:block p-2 animate-fadeIn z-50">
                <div class="px-4 py-3 border-b border-gray-100 mb-2 bg-gray-50 rounded-t-lg">
                    <div class="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Signed in as</div>
                    <div class="text-sm font-bold text-[#1E293B] truncate">{{ user.email }}</div>
                </div>
                
                <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg mb-1">Hồ sơ cá nhân</router-link>
                <router-link to="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg mb-1">Cài đặt</router-link>
                
                <div class="border-t border-gray-100 my-1"></div>
                
                <button @click="logout" class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg font-medium flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    Đăng xuất
                </button>
            </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = ref(null);

onMounted(() => {
    // Lấy thông tin user từ LocalStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        try {
            user.value = JSON.parse(storedUser);
        } catch (e) {
            console.error("Lỗi đọc dữ liệu user", e);
            localStorage.removeItem('user'); // Xóa nếu dữ liệu lỗi
        }
    }
});

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    user.value = null;
    
    // Redirect về trang chủ hoặc trang login
    router.push('/login');
    
    // Reload nhẹ để reset state nếu cần thiết
    setTimeout(() => {
        window.location.reload();
    }, 100);
};
</script>

<style scoped>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
    animation: fadeIn 0.2s ease-out forwards;
}
</style>