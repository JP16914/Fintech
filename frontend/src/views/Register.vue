<template>
  <div class="min-h-screen pt-24 pb-12 flex items-center justify-center px-4">
    <div class="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1E293B] to-[#991B1B]"></div>

      <div class="text-center mb-8">
        <h1 class="text-3xl font-serif font-bold text-[#3e1313] mb-2">Tạo tài khoản</h1>
        <p class="text-gray-500 text-sm">Tham gia cộng đồng QuantFident ngay hôm nay.</p>
      </div>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1">Họ và tên</label>
          <input v-model="fullName" type="text" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#991B1B] outline-none">
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1">Tên đăng nhập</label>
          <input v-model="username" type="text" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#991B1B] outline-none">
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1">Email</label>
          <input v-model="email" type="email" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#991B1B] outline-none">
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1">Mật khẩu</label>
          <input v-model="password" type="password" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#991B1B] outline-none">
        </div>

        <div v-if="error" class="text-red-500 text-sm bg-red-50 p-2 rounded text-center">{{ error }}</div>

        <button type="submit" class="w-full py-3 bg-[#991B1B] text-white font-bold rounded-lg hover:bg-[#7f1616] transition-all shadow-lg mt-4">
           Đăng ký
        </button>
      </form>

      <div class="mt-6 text-center text-sm text-gray-500">
        Đã có tài khoản? 
        <router-link to="/login" class="text-[#1E293B] font-bold hover:underline">Đăng nhập</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const fullName = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const error = ref('');

const handleRegister = async () => {
    try {
        await axios.post('http://localhost:5000/api/user/register', {
            fullName: fullName.value,
            username: username.value,
            email: email.value,
            password: password.value
        });
        // Thành công thì chuyển sang Login
        router.push('/login');
    } catch (err) {
        error.value = err.response?.data || "Đăng ký thất bại";
    }
};
</script>