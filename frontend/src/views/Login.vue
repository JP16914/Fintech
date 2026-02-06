<template>
  <div class="min-h-screen pt-24 pb-12 flex items-center justify-center px-4">
    <div class="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full relative overflow-hidden">
      
      <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D97706] to-[#991B1B]"></div>

      <div class="text-center mb-8">
        <h1 class="text-3xl font-serif font-bold text-[#3e1313] mb-2">
            {{ step === 1 ? 'Chào mừng trở lại' : 'Xác thực bảo mật' }}
        </h1>
        <p class="text-gray-500 text-sm">
            {{ step === 1 ? 'Đăng nhập để tiếp tục hành trình Quant.' : 'Nhập mã 6 số chúng tôi vừa gửi vào email của bạn.' }}
        </p>
      </div>

      <form v-if="step === 1" @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Email</label>
          <input v-model="email" type="email" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#991B1B] focus:ring-1 focus:ring-[#991B1B] outline-none transition-all" placeholder="name@example.com">
        </div>
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Mật khẩu</label>
          <input v-model="password" type="password" required class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#991B1B] focus:ring-1 focus:ring-[#991B1B] outline-none transition-all" placeholder="••••••••">
        </div>
        
        <div v-if="error" class="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{{ error }}</div>

        <button type="submit" class="w-full py-3 bg-[#1E293B] text-white font-bold rounded-lg hover:bg-[#0F172A] transition-all shadow-lg">
           Tiếp tục <span class="ml-2">→</span>
        </button>
      </form>

      <form v-else @submit.prevent="verifyOTP" class="space-y-6">
        <div class="flex justify-center gap-2">
            <input 
                v-for="(digit, index) in otpDigits" 
                :key="index"
                v-model="otpDigits[index]"
                :ref="el => otpInputs[index] = el"
                type="text" 
                maxlength="1"
                @input="focusNext(index)"
                @keydown.delete="focusPrev(index)"
                class="w-12 h-14 text-center text-2xl font-bold border border-gray-300 rounded-lg focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none"
            >
        </div>
        
        <div v-if="error" class="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{{ error }}</div>

        <button type="submit" class="w-full py-3 bg-[#991B1B] text-white font-bold rounded-lg hover:bg-[#7f1616] transition-all shadow-lg flex items-center justify-center gap-2">
           <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
           Xác thực & Đăng nhập
        </button>
        <div class="text-center">
             <button type="button" @click="step = 1" class="text-sm text-gray-400 hover:text-gray-600">Quay lại</button>
        </div>
      </form>

      <div class="mt-8 text-center text-sm text-gray-500">
        Chưa có tài khoản? 
        <router-link to="/register" class="text-[#991B1B] font-bold hover:underline">Đăng ký ngay</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const route = useRoute();

const step = ref(1);
const email = ref('');
const password = ref('');
const error = ref('');
const tempUserId = ref(null);

// OTP Logic
const otpDigits = reactive(['', '', '', '', '', '']);
const otpInputs = ref([]);

// Step 1: Login
const handleLogin = async () => {
    try {
        error.value = '';
        const res = await axios.post('http://localhost:5000/api/user/login', {
            email: email.value,
            password: password.value
        });
        
        if (res.data.require2FA) {
            tempUserId.value = res.data.tempUserId;
            step.value = 2;
            // Auto focus first input next tick
            setTimeout(() => otpInputs.value[0]?.focus(), 100);
        }
    } catch (err) {
        error.value = err.response?.data || "Đăng nhập thất bại";
    }
};

// Step 2: Verify OTP
const verifyOTP = async () => {
    try {
        const otpCode = otpDigits.join('');
        if (otpCode.length < 6) return;

        const res = await axios.post('http://localhost:5000/api/user/verify-otp', {
            userId: tempUserId.value,
            otp: otpCode
        });

        // Save Auth
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));

        // REDIRECT LOGIC: Lấy link từ query param ?redirect=... hoặc về Home
        const redirectPath = route.query.redirect || '/';
        
        // Dùng window.location để force reload header state
        window.location.href = redirectPath; 

    } catch (err) {
        error.value = err.response?.data || "Mã OTP không đúng";
    }
};

// Helper inputs
const focusNext = (index) => {
    if (otpDigits[index] && index < 5) otpInputs.value[index + 1].focus();
};
const focusPrev = (index) => {
    if (!otpDigits[index] && index > 0) otpInputs.value[index - 1].focus();
};
</script>