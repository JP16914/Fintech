<template>
  <main class="bg-[#FDFBF7] text-[#0F172A] selection:bg-[#991B1B] selection:text-white">
    
        <section class="container mx-auto max-w-6xl px-4 relative">
            <!-- decorative blurred background for hero -->
            <div class="hero-bg absolute inset-0 pointer-events-none -z-10"></div>
            <div class="py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        
        <div class="animate-fadeInLeft">
            <div class="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-500 mb-6 bg-white/80 backdrop-blur-sm shadow-lg">
                QuantFident Mentorship
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#3e1313] leading-tight mb-6">
                Bước vào thế giới Quant với lộ trình đã được kiểm chứng
            </h1>
            
            <p class="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Chương trình 1-1 giúp bạn vào Quant Researcher, Trader, hoặc Quant Developer top-tier. 
                Học từ Green Book Ch2–7 đến thực chiến build 2–3 alpha models trên WorldQuant BRAIN. 
                Unlimited mock interviews trong chương trình và 1 năm sau.
            </p>
            
            <div class="mt-8 flex items-center gap-4">
                <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#991B1B] disabled:pointer-events-none disabled:opacity-50 bg-[#991B1B] text-white hover:bg-[#7f1616] h-12 rounded-md px-8 py-6 text-base shadow-lg hover:-translate-y-0.5 transform duration-200">
                    Bắt đầu ngay
                </button>
                <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 h-12 rounded-md px-8 py-6 text-base shadow-sm hover:-translate-y-0.5 transform duration-200">
                    Tìm hiểu thêm
                </button>
            </div>
        </div>

        <div class="hidden md:block animate-fadeInRight">
            <div class="relative">
                <div class="aspect-[3/2] rounded-3xl border border-white/50 bg-gradient-to-br from-[#991B1B]/5 via-[#D97706]/5 to-[#0F172A]/5 backdrop-blur-sm shadow-2xl overflow-hidden flex items-center justify-center relative group">
                    <div class="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-50"></div>
                    
                    <div class="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:scale-105">
                        <div class="w-24 h-24 mb-4 drop-shadow-xl">
                            <svg viewBox="0 0 100 100" class="w-full h-full">
                                <path d="M15 75 L15 45 L35 60 L55 35 L75 55 L90 15" stroke="#0F172A" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M82 15 L90 15 L90 23" stroke="#0F172A" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M40 90 Q30 90 30 75 L30 55 Q30 40 45 40 L55 40 Q70 40 70 55 L70 75 L70 80 Q70 90 60 90 Z" fill="#D97706" opacity="0.9"/>
                                <rect x="10" y="60" width="8" height="30" fill="#0F172A" />
                                <rect x="22" y="50" width="8" height="40" fill="#0F172A" />
                                <rect x="34" y="70" width="8" height="20" fill="#0F172A" />
                            </svg>
                        </div>
                        <h2 class="text-4xl font-bold font-serif text-[#0F172A] tracking-tight">QuantFident</h2>
                        <p class="text-sm font-bold text-gray-500 mt-1 uppercase tracking-widest">Think Smart. Be QuantFident.</p>
                    </div>
                </div>
                <div class="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#991B1B]/20 to-[#D97706]/20 blur-xl animate-pulse"></div>
            </div>
        </div>

      </div>
    </section>

    <section class="container mx-auto max-w-6xl px-4 py-20 relative">
        <h2 class="text-4xl font-serif font-bold text-center text-[#3e1313] mb-16">Giá trị cốt lõi</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(item, idx) in coreValues" :key="idx" class="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <h3 class="font-bold text-gray-900 text-lg mb-8 group-hover:text-[#991B1B] transition-colors">{{ item.title }}</h3>
                <span class="bg-[#FFF8F1] text-[#9a6326] text-xs font-bold px-3 py-1 rounded-md border border-[#faeadd]">
                    Bao gồm
                </span>
            </div>
        </div>
    </section>

    <section class="container mx-auto max-w-6xl px-4 py-20 relative">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-serif font-bold text-[#3e1313] mb-4">Chương trình Mentorship QuantFident</h2>
            <p class="text-gray-500">Tư duy thông minh. Trở thành QuantFident</p>
        </div>
        <div class="grid md:grid-cols-2 gap-16 items-start">
            <div>
                <h3 class="font-serif text-xl font-bold text-[#3e1313] mb-6">Giới thiệu</h3>
                <div class="space-y-6 text-gray-600 leading-relaxed text-[15px]">
                    <p>Các vị trí quant hàng đầu - dù là Quant Researcher, Trader, hay Quant Developer - đều đòi hỏi sự kết hợp hiếm có giữa chuyên môn kỹ thuật sâu, kinh nghiệm mô hình hóa thực tế và sự tự tin sẵn sàng phỏng vấn.</p>
                    <p>QuantFident được tạo ra để loại bỏ những khoảng trống này - mang đến cho bạn lộ trình có cấu trúc từ lý thuyết cốt lõi đến nghiên cứu alpha thực tế.</p>
                </div>
            </div>
            <div>
                <h3 class="font-serif text-xl font-bold text-[#3e1313] mb-6">Mục tiêu Chương trình</h3>
                <ul class="space-y-4 text-gray-600 text-[15px]">
                    <li v-for="(goal, idx) in programGoals" :key="idx" class="flex gap-3">
                        <span class="text-[#991B1B] font-bold mt-1">•</span>
                        <span>{{ goal }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="container mx-auto max-w-6xl px-4 py-20 relative my-10">
        <div class="bg-[#FFFDF9] rounded-[3rem] border border-[#f5f0e6] p-10 md:p-16">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-serif font-bold text-[#3e1313] mb-4">Lộ trình nghề nghiệp Quant</h2>
                <p class="text-gray-500 max-w-2xl mx-auto">Khám phá ba vai trò chính trong tài chính định lượng</p>
            </div>
            <div class="grid lg:grid-cols-3 gap-8">
                <div v-for="(role, idx) in careerRoles" :key="idx" class="bg-gradient-to-b from-white to-[#fbfbfb] p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-full bg-[#FFF1F1] text-[#991B1B] flex items-center justify-center font-bold text-lg shadow-sm">
                            {{ role.icon }}
                        </div>
                        <h3 class="font-serif font-bold text-xl text-[#0F172A]">{{ role.title }}</h3>
                    </div>
                    <p class="text-gray-600 text-sm mb-8 leading-relaxed h-24">{{ role.desc }}</p>
                    <h4 class="font-bold text-sm text-[#0F172A] mb-3">Kỹ năng chính:</h4>
                    <ul class="space-y-2">
                        <li v-for="(skill, sIdx) in role.skills" :key="sIdx" class="text-gray-500 text-xs flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span> {{ skill }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="container mx-auto max-w-6xl px-4 py-20 relative">
        <h2 class="text-4xl font-serif font-bold text-center text-[#3e1313] mb-16">Lộ trình học tập</h2>
        <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(step, idx) in learningPath" :key="idx" class="bg-white p-8 rounded-xl border border-gray-100 hover:border-[#D97706]/30 hover:shadow-md transition-all">
                <h3 class="font-bold text-gray-900 mb-4 text-lg">{{ step.title }}</h3>
                <p class="text-gray-600 text-sm leading-relaxed">{{ step.desc }}</p>
            </div>
        </div>
    </section>

    <section class="container mx-auto max-w-6xl px-4 py-20 relative">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-serif font-bold text-[#3e1313] mb-4">Bối cảnh ngành</h2>
            <p class="text-gray-500">Hiểu về các lĩnh vực khác nhau và cách tiếp cận định lượng của họ</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
            <div v-for="(ctx, idx) in industryContext" :key="idx" class="bg-[#FFFCF8] p-8 rounded-2xl border border-[#F2EFE9] hover:border-[#e6ded3] transition-colors">
                <h3 class="font-serif font-bold text-xl text-[#3e1313] mb-4">{{ ctx.title }}</h3>
                <p class="text-gray-600 text-sm mb-6 leading-relaxed">{{ ctx.desc }}</p>
                <div class="flex flex-wrap gap-2">
                    <span v-for="(tag, tIdx) in ctx.tags" :key="tIdx" class="bg-[#F0EEE6] text-[#5c554a] px-3 py-1 rounded-md text-xs font-medium border border-transparent hover:border-gray-300 transition-colors cursor-default">
                        {{ tag }}
                    </span>
                </div>
            </div>
        </div>
    </section>

    <section class="container mx-auto max-w-6xl px-4 py-20 relative">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-serif font-bold text-[#3e1313] mb-4">Essential Quant Skills</h2>
            <p class="text-gray-500">Key competencies ranked by importance across different quant roles</p>
        </div>

        <div class="grid md:grid-cols-2 gap-16">
            <div v-for="(group, idx) in skillsGroups" :key="idx" class="space-y-8">
                <h3 class="font-serif text-xl font-bold mb-6 border-b border-gray-100 pb-2">{{ group.title }}</h3>
                <div v-for="(skill, sIdx) in group.skills" :key="sIdx">
                    <div class="flex justify-between mb-1">
                        <span class="font-medium text-sm text-gray-700">{{ skill.label }}</span>
                        <span class="text-sm text-gray-500">{{ skill.percent }}</span>
                    </div>
                    <div class="w-full bg-[#EBE7E0] rounded-full h-2">
                        <div class="bg-[#991B1B] h-2 rounded-full" :style="{ width: skill.percent }"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container mx-auto max-w-6xl px-4 py-20 relative">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-serif font-bold text-[#3e1313] mb-4">Interview Preparation</h2>
            <p class="text-gray-500">Master the four pillars of quantitative finance interviews</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(card, idx) in interviewCards" :key="idx" class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div class="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-xl mb-4">{{ card.icon }}</div>
                <h3 class="font-bold text-gray-900 mb-2">{{ card.title }}</h3>
                <p class="text-sm text-gray-500 leading-relaxed">{{ card.desc }}</p>
            </div>
        </div>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
             <div class="bg-[#FFFDF9] border border-[#e5e5e5] rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div class="text-3xl font-bold text-[#0F172A] mb-1">Unlimited</div>
                <div class="text-sm text-gray-500">Mock interviews</div>
             </div>
             <div class="bg-[#FFFDF9] border border-[#e5e5e5] rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div class="text-3xl font-bold text-[#0F172A] mb-1">2–3+</div>
                <div class="text-sm text-gray-500">Alpha models</div>
             </div>
             <div class="bg-[#FFFDF9] border border-[#e5e5e5] rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div class="text-3xl font-bold text-[#0F172A] mb-1">1 year</div>
                <div class="text-sm text-gray-500">Support</div>
             </div>
        </div>
        <div class="mt-16 text-center">
             <p class="text-xl font-serif italic text-gray-800">“Break into quant là cuộc chơi lì đòn và bền bỉ, không cần thiên tài toán.”</p>
             <p class="text-sm text-gray-500 mt-2">— Mentor Minh Nguyễn</p>
        </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 py-20 relative">
        <h2 class="text-4xl font-serif font-bold text-center text-[#3e1313] mb-12">FAQ</h2>
        <div class="space-y-4">
            <div v-for="(item, index) in faqs" :key="index" class="border-b border-gray-200 pb-4">
                <button @click="toggleFaq(index)" class="w-full flex justify-between items-center text-left py-4 hover:text-[#991B1B] transition-colors group">
                    <span class="font-medium text-gray-800 group-hover:text-[#991B1B] text-[15px]">{{ item.question }}</span>
                    <span class="text-gray-400 transition-transform duration-300" :class="{'rotate-180': activeFaq === index}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                </button>
                <div v-show="activeFaq === index" class="pb-4 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                    {{ item.answer }}
                </div>
            </div>
        </div>
    </section>

    <section class="container mx-auto max-w-6xl px-4 py-20 relative text-center">
        <h2 class="text-4xl font-serif font-bold text-[#3e1313] mb-2">Blog</h2>
        <p class="text-gray-500 mb-10">Nắm vững những insights, tutorials, và kinh nghiệm mới nhất từ cộng đồng QuantFident</p>

        <div class="max-w-4xl mx-auto mb-32 flex gap-4">
            <div class="relative flex-grow">
                <input type="text" placeholder="Search articles..." class="w-full pl-10 pr-4 py-3 bg-[#FCFBF9] border border-gray-200 rounded-lg focus:outline-none focus:border-[#991B1B] transition-colors" />
                <svg class="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <select class="px-4 py-3 bg-[#FCFBF9] border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none cursor-pointer hover:border-gray-300">
                <option>All Categories</option>
            </select>
        </div>
        
        <div class="text-gray-400 text-sm mb-24 italic">No blog posts published yet.</div>

        <div class="bg-gradient-to-r from-[#FDFBF7] via-[#F8F4EB] to-[#FDFBF7] border border-gray-200 rounded-3xl p-12 md:p-16 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">
             <h3 class="text-3xl font-serif font-bold text-[#3e1313] mb-4">Ready to start your quant journey?</h3>
             <p class="text-gray-600 mb-10">Contact us to learn more about the QuantFident Mentorship Program</p>
             <div class="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                 <div class="text-center group">
                     <div class="text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">Email us at</div>
                     <div class="text-[#991B1B] font-medium text-lg group-hover:underline cursor-pointer">tribd.tec@gmail.com</div>
                 </div>
                 <div class="text-center">
                    <div class="text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">Follow us</div>
                    <div class="flex gap-6 font-medium text-[#991B1B]">
                        <a href="#" class="hover:text-[#7f1616] hover:-translate-y-1 transition-transform inline-block">LinkedIn</a>
                        <a href="#" class="hover:text-[#7f1616] hover:-translate-y-1 transition-transform inline-block">Twitter</a>
                    </div>
                 </div>
             </div>
        </div>
    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue';

// --- DATA ---

const coreValues = [
    { title: "Lộ trình từ Lý thuyết đến Alpha" },
    { title: "Dự án WorldQuant BRAIN" },
    { title: "Phỏng vấn thử không giới hạn" },
    { title: "Hoàn thiện CV & LinkedIn" },
    { title: "Sổ tay Cuộc thi" },
    { title: "Hỗ trợ Mentor" },
];

const programGoals = [
    "Thành thạo lý thuyết và các dạng bài trong A Practical Guide to Quantitative Finance Interviews (Ch2-7).",
    "Xây dựng và kiểm tra lại 2-3 mô hình alpha trên WorldQuant BRAIN.",
    "Hiểu và áp dụng các chỉ số đánh giá: lợi nhuận, Sharpe, turnover, drawdown, tương quan, độ bền vững.",
    "Thể hiện cạnh tranh với CV được tinh chỉnh, dự án có tài liệu và sự tự tin phỏng vấn.",
    "Nắm bắt các cuộc thi, thách thức và cơ hội trong ngành."
];

const careerRoles = [
    { 
        title: "Nhà nghiên cứu Quant", 
        icon: "📈",
        desc: "Thiết kế tín hiệu alpha, kiểm tra lại chiến lược, phân tích bất thường thị trường. Tập trung vào mô hình thống kê, nghiên cứu yếu tố và phân tích dự đoán.",
        skills: ["Thống kê & Xác suất", "Xử lý tín hiệu", "Mô hình yếu tố", "Phương pháp nghiên cứu"]
    },
    { 
        title: "Trader Quant", 
        icon: "🧠",
        desc: "Thực hiện chiến lược thuật toán, quản lý rủi ro thời gian thực, tối ưu hóa phân bổ danh mục. Kết hợp phân tích định lượng với trực giác thị trường.",
        skills: ["Vi cấu trúc thị trường", "Quản lý rủi ro", "Tối ưu danh mục", "Thuật toán thực thi"]
    },
    { 
        title: "Lập trình viên Quant", 
        icon: "💻",
        desc: "Xây dựng hệ thống giao dịch, triển khai khung kiểm tra lại, tối ưu hóa hạ tầng độ trễ thấp. Kết nối nghiên cứu định lượng và công nghệ.",
        skills: ["Thiết kế hệ thống", "Tối ưu hiệu suất", "Kỹ thuật dữ liệu", "Hạ tầng giao dịch"]
    },
];

const learningPath = [
    { title: "Lý thuyết", desc: "Lý thuyết bao phủ toàn bộ Green Book Ch2–7 và các bài tập tính giờ luyện nhanh và chuẩn." },
    { title: "Nghiên cứu Alpha", desc: "Xây dựng 2–3 mô hình alpha trên WorldQuant BRAIN theo quy trình đầy đủ và kiểm tra độ bền vững." },
    { title: "Sản phẩm cuối", desc: "Kho GitHub, Hướng dẫn sống sót phỏng vấn, CV/LinkedIn tối ưu, cuộc thi & cơ hội." }
];

const industryContext = [
    { 
        title: "Tạo lập thị trường & HFT", 
        desc: "Các công ty giao dịch tần suất cao như Citadel, Jump Trading và Optiver tập trung vào vi cấu trúc thị trường, tối ưu hóa độ trễ và chênh lệch giá thống kê.",
        tags: ["Động học sổ lệnh", "Chênh lệch độ trễ", "Mô hình tác động thị trường", "Chiến lược đóng vị thế"]
    },
    { 
        title: "Quản lý tài sản", 
        desc: "Các nhà quản lý tài sản truyền thống như BlackRock, AQR và Two Sigma sử dụng phương pháp định lượng để xây dựng danh mục và quản lý rủi ro.",
        tags: ["Đầu tư yếu tố", "Cân bằng rủi ro", "Dữ liệu thay thế", "Tích hợp ESG"]
    },
    { 
        title: "Quỹ phòng hộ", 
        desc: "Các quỹ phòng hộ định lượng như Renaissance, DE Shaw và Millennium sử dụng các mô hình toán học tinh vi để tạo alpha.",
        tags: ["Nghiên cứu Alpha", "Nền tảng đa quản lý", "Bộ dữ liệu thay thế", "Ứng dụng học máy"]
    },
    { 
        title: "Ngân hàng đầu tư", 
        desc: "Các ngân hàng như Goldman Sachs, Morgan Stanley và JP Morgan sử dụng quant để định giá phái sinh, quản lý rủi ro và giao dịch điện tử.",
        tags: ["Định giá phái sinh", "Mô hình rủi ro tín dụng", "Vốn quy định", "Tạo lập thị trường điện tử"]
    }
];

const skillsGroups = [
    {
        title: "Mathematical Foundation",
        skills: [
            { label: "Probability & Statistics", percent: "95%" },
            { label: "Linear Algebra", percent: "85%" },
            { label: "Stochastic Calculus", percent: "80%" },
            { label: "Optimization Theory", percent: "75%" }
        ]
    },
    {
        title: "Programming & Technology",
        skills: [
            { label: "Python/R", percent: "90%" },
            { label: "SQL & Databases", percent: "80%" },
            { label: "C++/Java (HFT)", percent: "70%" },
            { label: "Cloud Platforms", percent: "65%" }
        ]
    },
    {
        title: "Finance Knowledge",
        skills: [
            { label: "Derivatives Pricing", percent: "85%" },
            { label: "Risk Management", percent: "90%" },
            { label: "Market Microstructure", percent: "75%" },
            { label: "Portfolio Theory", percent: "80%" }
        ]
    },
    {
        title: "Research Skills",
        skills: [
            { label: "Data Analysis", percent: "95%" },
            { label: "Backtesting", percent: "90%" },
            { label: "Machine Learning", percent: "75%" },
            { label: "Research Methodology", percent: "85%" }
        ]
    }
];

const interviewCards = [
    { title: "Mental Math & Sequences", icon: "🧮", desc: "Quick calculations, pattern recognition, and numerical estimation under time pressure." },
    { title: "Brainteasers & Logic", icon: "🧠", desc: "Analytical reasoning, lateral thinking, and problem decomposition skills." },
    { title: "Technical Coding", icon: "💻", desc: "Algorithm implementation, data structures, and optimization problems." },
    { title: "Market Making & Trading", icon: "👥", desc: "Pricing under uncertainty, risk management, and market intuition." }
];

const activeFaq = ref(null);
const faqs = ref([
    { question: "Có cần giải toán quốc gia không?", answer: "Không nhất thiết. Chương trình được thiết kế để xây dựng nền tảng từ đầu." },
    { question: "Chưa mạnh code có theo kịp không?", answer: "Chúng tôi có các module bổ trợ Python/C++ cơ bản trước khi vào chuyên sâu." },
    { question: "Không quen WorldQuant BRAIN?", answer: "Bạn sẽ được hướng dẫn step-by-step để làm quen nền tảng này." },
    { question: "Success fee tính thế nào?", answer: "Vui lòng liên hệ trực tiếp để biết chi tiết về chính sách học phí." },
    { question: "Không vào quant ngay thì sao?", answer: "Kiến thức bạn học được vẫn áp dụng tốt cho Data Science hoặc Risk Management." },
    { question: "Thời gian học linh hoạt?", answer: "Có, chương trình thiết kế 1-1 nên lịch học sẽ được thống nhất giữa mentor và bạn." },
    { question: "Cần học gì trước khi vào chương trình?", answer: "Nên ôn lại xác suất thống kê cơ bản và Python căn bản." },
    { question: "BRAIN có khó không?", answer: "Khó nếu tự học, nhưng với lộ trình của chúng tôi, bạn sẽ nắm bắt nhanh chóng." },
    { question: "Có hỗ trợ portfolio tối ưu không?", answer: "Chắc chắn. Portfolio của bạn sẽ được review kỹ lưỡng để gây ấn tượng với nhà tuyển dụng." }
]);

const toggleFaq = (index) => {
    activeFaq.value = activeFaq.value === index ? null : index;
}
</script>

<style scoped>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
}

/* Hero Animations */
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fadeInLeft {
  animation: fadeInLeft 0.8s ease-out forwards;
}
.animate-fadeInRight {
  animation: fadeInRight 0.8s ease-out forwards;
}
</style>