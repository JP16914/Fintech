<template>
  <div class="pt-12 pb-24 px-6 max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div class="inline-block px-4 py-1.5 mb-6 border border-[#991B1B]/20 rounded-full bg-[#FFF8F1] text-[#991B1B] text-xs font-bold tracking-widest uppercase">
        QuantFident Insights
      </div>
      <h1 class="text-5xl md:text-6xl font-serif font-bold text-[#3e1313] mb-6 leading-tight">
        Góc nhìn <span class="italic text-[#991B1B]">Quant</span>
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Chia sẻ kiến thức về Toán tài chính, Thuật toán giao dịch và Kinh nghiệm phỏng vấn thực chiến.
      </p>
    </div>

    <div class="mb-20">
      <div class="group relative rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-r from-[#1E293B] to-[#0F172A]"></div>
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        
        <div class="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1 space-y-6">
                <div class="flex items-center gap-3">
                    <span class="px-3 py-1 bg-[#D97706] text-white text-xs font-bold rounded shadow-sm">Featured</span>
                    <span class="text-gray-300 text-sm">Feb 10, 2026 • 8 min read</span>
                </div>
                <h2 class="text-3xl md:text-4xl font-serif font-bold text-white leading-tight group-hover:text-[#D97706] transition-colors">
                    Giải mã "Green Book": Cách chinh phục cuốn sách gối đầu giường của mọi Quant
                </h2>
                <p class="text-gray-300 text-lg leading-relaxed line-clamp-3">
                    "A Practical Guide to Quantitative Finance Interviews" không chỉ là sách, nó là tấm vé thông hành. Bài viết này sẽ hướng dẫn bạn cách học chương 4 (Stochastic Calculus) một cách hiệu quả nhất mà không bị "tẩu hỏa nhập ma".
                </p>
                <div class="flex items-center gap-4 pt-4">
                    <img src="https://ui-avatars.com/api/?name=Tri+Bui&background=991B1B&color=fff" class="w-10 h-10 rounded-full border-2 border-white/20" alt="Author">
                    <div>
                        <div class="text-white font-bold text-sm">Tri Bui</div>
                        <div class="text-gray-400 text-xs">Founder, QuantFident</div>
                    </div>
                </div>
            </div>
            
            <div class="hidden md:flex flex-1 justify-center">
                <div class="w-64 h-64 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(217,119,6,0.2)] group-hover:scale-105 transition-transform duration-500">
                    <span class="text-8xl">📗</span>
                </div>
            </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-gray-200 pb-8">
        <div class="flex flex-wrap justify-center gap-2">
            <button 
                v-for="cat in categories" 
                :key="cat"
                @click="activeCategory = cat"
                :class="[
                    'px-5 py-2 rounded-full text-sm font-bold transition-all border',
                    activeCategory === cat 
                        ? 'bg-[#991B1B] text-white border-[#991B1B] shadow-md' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#991B1B] hover:text-[#991B1B]'
                ]"
            >
                {{ cat }}
            </button>
        </div>

        <div class="relative w-full md:w-72">
            <input 
                type="text" 
                placeholder="Tìm kiếm bài viết..." 
                class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#991B1B] focus:ring-1 focus:ring-[#991B1B] transition-all text-sm"
            >
            <svg class="w-4 h-4 text-gray-400 absolute left-3.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <article v-for="(post, index) in filteredPosts" :key="index" class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group h-full">
            <div class="h-48 w-full bg-gray-100 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br" :class="post.gradient"></div>
                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-[#1E293B] shadow-sm">
                    {{ post.category }}
                </div>
                <div class="absolute inset-0 flex items-center justify-center text-5xl transform group-hover:scale-110 transition-transform duration-500">
                    {{ post.icon }}
                </div>
            </div>

            <div class="p-6 flex flex-col flex-grow">
                <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span>{{ post.date }}</span>
                    <span>•</span>
                    <span>{{ post.readTime }}</span>
                </div>
                <h3 class="text-xl font-serif font-bold text-[#1E293B] mb-3 leading-snug group-hover:text-[#991B1B] transition-colors">
                    {{ post.title }}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {{ post.excerpt }}
                </p>
                
                <div class="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                            {{ post.authorInitials }}
                        </div>
                        <span class="text-xs font-bold text-gray-700">{{ post.author }}</span>
                    </div>
                    <button class="text-[#991B1B] text-sm font-bold hover:underline flex items-center gap-1">
                        Đọc tiếp <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </article>
    </div>

    <div class="flex justify-center mb-24">
        <button class="px-6 py-3 bg-white border border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
            Xem thêm bài viết cũ hơn
        </button>
    </div>

    <div class="bg-[#1E293B] rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#D97706] rounded-full blur-[120px] opacity-20"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#991B1B] rounded-full blur-[120px] opacity-20"></div>
        
        <div class="relative z-10 max-w-2xl mx-auto">
            <span class="text-[#D97706] font-bold text-sm tracking-widest uppercase mb-4 block">Newsletter</span>
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Đừng bỏ lỡ Alpha tuần này</h2>
            <p class="text-gray-400 mb-8">Nhận tóm tắt thị trường, bài toán phỏng vấn mới nhất và tài liệu độc quyền gửi thẳng vào inbox của bạn mỗi thứ Hai.</p>
            
            <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" placeholder="Email của bạn" class="flex-grow px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D97706] transition-colors">
                <button class="px-6 py-3 bg-[#991B1B] text-white font-bold rounded-lg hover:bg-[#7f1616] transition-colors shadow-lg whitespace-nowrap">
                    Đăng ký
                </button>
            </div>
            <p class="text-gray-500 text-xs mt-4">Không spam. Hủy đăng ký bất cứ lúc nào.</p>
        </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeCategory = ref('Tất cả');
const categories = ['Tất cả', 'Phỏng vấn', 'Toán học', 'Lập trình', 'Thị trường'];

const posts = [
    {
        title: "Brainteasers: Chiến thuật giải bài toán xác suất trong 3 phút",
        excerpt: "Gặp bài toán 'Tung xúc xắc' hay 'Người say rượu' trong phỏng vấn? Đừng hoảng. Hãy dùng tư duy Martingale và Markov Chain để giải quyết gọn gàng.",
        category: "Toán học",
        date: "Feb 08, 2026",
        readTime: "5 min read",
        author: "Tri Bui",
        authorInitials: "TB",
        icon: "🎲",
        gradient: "from-blue-50 to-indigo-100"
    },
    {
        title: "Tại sao code C++ của bạn vẫn chậm? (Low Latency Tips)",
        excerpt: "Phân tích 5 lỗi phổ biến khiến code C++ không đạt chuẩn High Frequency Trading: Cache miss, Branch prediction fail và lạm dụng Smart Pointers.",
        category: "Lập trình",
        date: "Feb 05, 2026",
        readTime: "12 min read",
        author: "Hung Nguyen",
        authorInitials: "HN",
        icon: "⚡",
        gradient: "from-gray-100 to-gray-200"
    },
    {
        title: "WorldQuant BRAIN: Cách tìm Alpha có Sharpe > 1.5",
        excerpt: "Hướng dẫn từng bước (Step-by-step) cách sử dụng dữ liệu Fundamental và Analyst Estimates để xây dựng tín hiệu giao dịch bền vững.",
        category: "Thị trường",
        date: "Jan 28, 2026",
        readTime: "10 min read",
        author: "Tri Bui",
        authorInitials: "TB",
        icon: "📈",
        gradient: "from-amber-50 to-orange-100"
    },
    {
        title: "Review phỏng vấn Quant Researcher tại Citadel (Hong Kong)",
        excerpt: "Chia sẻ trải nghiệm thực tế về quy trình 5 vòng phỏng vấn: Từ bài test HackerRank 120 phút đến vòng Superday căng thẳng với Portfolio Manager.",
        category: "Phỏng vấn",
        date: "Jan 15, 2026",
        readTime: "15 min read",
        author: "Anonymous",
        authorInitials: "AN",
        icon: "🌏",
        gradient: "from-red-50 to-pink-100"
    },
    {
        title: "Linear Regression: Hiểu đúng bản chất trước khi dùng Machine Learning",
        excerpt: "Đừng vội nhảy vào Deep Learning. Hiểu rõ OLS, Assumptions và Heteroscedasticity mới là chìa khóa để không bị 'vặn' trong phỏng vấn.",
        category: "Toán học",
        date: "Jan 10, 2026",
        readTime: "7 min read",
        author: "Tri Bui",
        authorInitials: "TB",
        icon: "📐",
        gradient: "from-emerald-50 to-teal-100"
    },
    {
        title: "Lộ trình học Quant từ con số 0 cho sinh viên IT",
        excerpt: "Bạn giỏi code nhưng yếu tài chính? Đây là lộ trình 6 tháng để lấp đầy lỗ hổng kiến thức và apply vào các vị trí Quant Developer.",
        category: "Career",
        date: "Jan 01, 2026",
        readTime: "8 min read",
        author: "Hung Nguyen",
        authorInitials: "HN",
        icon: "🎓",
        gradient: "from-violet-50 to-purple-100"
    }
];

const filteredPosts = computed(() => {
    if (activeCategory.value === 'Tất cả') return posts;
    if (activeCategory.value === 'Phỏng vấn') return posts.filter(p => p.category === 'Phỏng vấn' || p.category === 'Career');
    return posts.filter(p => p.category === activeCategory.value);
});
</script>