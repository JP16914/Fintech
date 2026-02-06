<template>
  <div class="pt-12 pb-24 px-6 max-w-7xl mx-auto">
    <div class="text-center mb-20">
      <div class="inline-block px-4 py-1.5 mb-6 border border-[#991B1B]/20 rounded-full bg-[#FFF8F1] text-[#991B1B] text-xs font-bold tracking-widest uppercase">
        Career Paths
      </div>
      <h1 class="text-5xl md:text-6xl font-serif font-bold text-[#3e1313] mb-6 leading-tight">
        Định vị bản thân trong thế giới <span class="italic text-[#991B1B]">Quant</span>
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Ba con đường riêng biệt, một đích đến thành công. Bạn là người tìm kiếm quy luật (Researcher), người ra quyết định (Trader) hay kiến trúc sư hệ thống (Developer)?
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 mb-24">
      <div v-for="(role, index) in roles" :key="index" class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
        
        <div class="mb-6">
          <div class="w-16 h-16 rounded-2xl bg-[#FFF8F1] flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
            {{ role.icon }}
          </div>
          <h3 class="text-2xl font-serif font-bold text-[#1E293B] mb-2 group-hover:text-[#991B1B] transition-colors">{{ role.title }}</h3>
          <p class="text-[#D97706] font-medium text-sm">{{ role.subtitle }}</p>
        </div>

        <p class="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
          {{ role.desc }}
        </p>

        <div class="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <span class="text-xs text-gray-400 uppercase font-bold tracking-wider block mb-1">Mức lương khởi điểm</span>
          <span class="text-lg font-bold text-[#1E293B]">{{ role.salary }}</span>
        </div>

        <div class="mb-8">
           <span class="text-xs text-gray-400 uppercase font-bold tracking-wider block mb-3">Tech Stack & Kỹ năng</span>
           <div class="flex flex-wrap gap-2">
             <span v-for="(skill, sIdx) in role.skills" :key="sIdx" class="px-2 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded font-medium">
               {{ skill }}
             </span>
           </div>
        </div>

        <button class="w-full py-3 border border-[#991B1B] text-[#991B1B] font-bold rounded-lg hover:bg-[#991B1B] hover:text-white transition-colors mt-auto">
          Xem lộ trình chi tiết
        </button>
      </div>
    </div>

    <div class="max-w-5xl mx-auto mb-24">
        <h2 class="text-3xl font-serif font-bold text-[#3e1313] mb-12 text-center">Bảng so sánh năng lực</h2>
        
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="grid grid-cols-4 bg-[#FFF8F1] border-b border-gray-200 p-4 font-bold text-[#1E293B] font-serif">
                <div class="col-span-1">Tiêu chí</div>
                <div class="col-span-1 text-center">Researcher</div>
                <div class="col-span-1 text-center">Trader</div>
                <div class="col-span-1 text-center">Developer</div>
            </div>
            
            <div v-for="(row, idx) in comparisonData" :key="idx" class="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors items-center">
                <div class="col-span-1 font-medium text-gray-700 text-sm">{{ row.criteria }}</div>
                
                <div class="col-span-1 flex justify-center">
                    <div class="flex gap-1">
                        <div v-for="n in 5" :key="n" class="w-2 h-6 rounded-sm" :class="n <= row.scores[0] ? 'bg-[#991B1B]' : 'bg-gray-200'"></div>
                    </div>
                </div>

                <div class="col-span-1 flex justify-center">
                    <div class="flex gap-1">
                        <div v-for="n in 5" :key="n" class="w-2 h-6 rounded-sm" :class="n <= row.scores[1] ? 'bg-[#D97706]' : 'bg-gray-200'"></div>
                    </div>
                </div>

                <div class="col-span-1 flex justify-center">
                    <div class="flex gap-1">
                        <div v-for="n in 5" :key="n" class="w-2 h-6 rounded-sm" :class="n <= row.scores[2] ? 'bg-blue-600' : 'bg-gray-200'"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-gradient-to-r from-[#1E293B] to-[#0F172A] rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#991B1B] rounded-full blur-[100px] opacity-30"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#D97706] rounded-full blur-[100px] opacity-20"></div>

        <div class="relative z-10 max-w-2xl mx-auto">
            <h2 class="text-3xl font-serif font-bold mb-6">Bạn vẫn chưa chắc chắn?</h2>
            <p class="text-gray-300 mb-8 leading-relaxed">
                Đừng lo lắng. Hầu hết các mentee của chúng tôi bắt đầu với một hướng đi và tìm ra đam mê thực sự trong quá trình làm dự án thực tế. Hãy để chúng tôi giúp bạn đánh giá kỹ năng.
            </p>
            <button class="bg-white text-[#0F172A] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Làm bài Test đánh giá năng lực
            </button>
        </div>
    </div>

  </div>
</template>

<script setup>
const roles = [
    {
        title: "Quantitative Researcher",
        subtitle: "The Scientist",
        icon: "🔬",
        salary: "$150k - $300k+",
        desc: "Bạn dành cả ngày để đọc các bài báo toán học (papers), tìm kiếm tín hiệu (alpha) trong dữ liệu hỗn loạn và xây dựng các mô hình dự báo giá. Bạn yêu thích thống kê và không ngại thất bại trong quá trình thử nghiệm.",
        skills: ["Python/Pandas", "Stochastic Calculus", "Machine Learning", "Statistics"]
    },
    {
        title: "Quantitative Trader",
        subtitle: "The Risk Taker",
        icon: "📊",
        salary: "$200k - $400k+",
        desc: "Bạn là người trực tiếp giám sát các thuật toán, quản lý rủi ro danh mục đầu tư và đưa ra quyết định sinh tử khi thị trường biến động mạnh. Bạn cần sự nhạy bén, kỷ luật thép và khả năng chịu áp lực cực cao.",
        skills: ["Game Theory", "Risk Management", "Market Microstructure", "Python/VBA"]
    },
    {
        title: "Quantitative Developer",
        subtitle: "The Architect",
        icon: "💻",
        salary: "$140k - $250k+",
        desc: "Bạn xây dựng cơ sở hạ tầng để các Trader và Researcher làm việc. Tốc độ là tất cả. Bạn tối ưu hóa code C++ để giảm độ trễ (latency) xuống từng micro-giây. Bạn là cầu nối giữa Toán học và Công nghệ.",
        skills: ["C++ (Modern)", "System Design", "Linux Kernel", "Network Protocols"]
    }
];

const comparisonData = [
    { criteria: "Kỹ năng Toán học", scores: [5, 3, 3] },
    { criteria: "Kỹ năng Lập trình (Coding)", scores: [4, 2, 5] },
    { criteria: "Khả năng chịu áp lực", scores: [2, 5, 3] },
    { criteria: "Hiểu biết Tài chính", scores: [3, 4, 2] },
    { criteria: "Khả năng giao tiếp", scores: [3, 4, 2] }
];
</script>