<template>
  <div class="pt-12 pb-24 px-6 max-w-7xl mx-auto">
    <div class="text-center mb-20">
      <div class="inline-block px-4 py-1.5 mb-6 border border-[#991B1B]/20 rounded-full bg-[#FFF8F1] text-[#991B1B] text-xs font-bold tracking-widest uppercase">
        Lộ trình 2026
      </div>
      <h1 class="text-5xl md:text-6xl font-serif font-bold text-[#3e1313] mb-6 leading-tight">
        Quant Career <span class="italic text-[#991B1B]">Accelerator</span>
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Chương trình mentorship 1:1 duy nhất tập trung vào việc xây dựng Portfolio thực chiến trên WorldQuant BRAIN và rèn luyện tư duy phỏng vấn đỉnh cao.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 mb-24">
      <div v-for="(item, i) in pillars" :key="i" class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
        <div class="w-14 h-14 bg-[#FFF8F1] rounded-xl flex items-center justify-center text-3xl mb-6">{{ item.icon }}</div>
        <h3 class="font-serif font-bold text-xl text-[#1E293B] mb-3">{{ item.title }}</h3>
        <p class="text-gray-600 text-sm leading-relaxed">{{ item.desc }}</p>
      </div>
    </div>

    <div class="max-w-4xl mx-auto mb-24">
      <h2 class="text-3xl font-serif font-bold text-[#3e1313] mb-12 text-center">Chi tiết Lộ trình 12 Tuần</h2>
      <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
        
        <div v-for="(week, index) in curriculum" :key="index" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FDFBF7] bg-[#991B1B] text-white text-xs font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            {{ index + 1 }}
          </div>
          
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[#D97706] font-bold text-xs uppercase tracking-wider">{{ week.phase }}</span>
              <span class="text-gray-400 text-xs">{{ week.duration }}</span>
            </div>
            <h3 class="font-serif font-bold text-lg text-[#1E293B] mb-2">{{ week.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">{{ week.desc }}</p>
            <ul class="space-y-1">
              <li v-for="(task, t) in week.tasks" :key="t" class="flex items-start gap-2 text-xs text-gray-500">
                <span class="text-[#991B1B] mt-0.5">•</span> {{ task }}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <div class="bg-[#1E293B] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden mb-24">
      <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div class="relative z-10">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Người đồng hành cùng bạn</h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-12">Mentor không chỉ là người dạy, mà là người đã đi qua con đường bạn sắp đi.</p>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
           <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-[#D97706] to-[#991B1B] rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">T</div>
                <div>
                  <h4 class="text-xl font-bold text-white">Tri Bui</h4>
                  <p class="text-[#D97706] text-sm">Quant Researcher @ Top Tier Fund</p>
                </div>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                "Tôi tập trung vào việc giúp bạn hiểu bản chất toán học đằng sau các mô hình, thay vì chỉ học vẹt code. Chúng ta sẽ cùng nhau xây dựng những Alpha có Sharpe > 1.5."
              </p>
              <div class="flex gap-2">
                <span class="text-xs bg-white/10 text-white px-2 py-1 rounded">Math Expert</span>
                <span class="text-xs bg-white/10 text-white px-2 py-1 rounded">Ex-WorldQuant</span>
              </div>
           </div>
           
           <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">H</div>
                <div>
                  <h4 class="text-xl font-bold text-white">Hung Nguyen</h4>
                  <p class="text-blue-400 text-sm">Quantitative Developer</p>
                </div>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                "Code chạy được là chưa đủ, code phải nhanh và tối ưu. Tôi sẽ giúp bạn rèn luyện tư duy C++ và System Design để vượt qua các bài test khó nhằn."
              </p>
              <div class="flex gap-2">
                <span class="text-xs bg-white/10 text-white px-2 py-1 rounded">Low Latency</span>
                <span class="text-xs bg-white/10 text-white px-2 py-1 rounded">C++ Wizard</span>
              </div>
           </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <h2 class="text-3xl font-serif font-bold text-[#3e1313] mb-6">Sẵn sàng cho sự nghiệp Quant?</h2>
      <div class="flex justify-center gap-4">
        <button class="bg-[#991B1B] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-[#7f1616] hover:-translate-y-1 transition-all">
          Đặt lịch tư vấn 1:1
        </button>
        <button class="bg-white text-[#991B1B] border border-[#991B1B] px-8 py-4 rounded-xl font-bold shadow-sm hover:bg-gray-50 transition-all">
          Tải Brochure chi tiết
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
const pillars = [
  { icon: "🧠", title: "Tư duy Toán học", desc: "Không chỉ giải bài tập, bạn sẽ học cách tư duy như một nhà toán học ứng dụng để mô hình hóa thị trường." },
  { icon: "💻", title: "Thực chiến Code", desc: "Xây dựng hệ thống Backtest, tối ưu hóa danh mục đầu tư bằng Python/C++ với dữ liệu thực." },
  { icon: "🤝", title: "Kỹ năng Phỏng vấn", desc: "Mock Interview không giới hạn. Rèn luyện sự tự tin và cách diễn đạt mạch lạc dưới áp lực." }
];

const curriculum = [
  { phase: "Phase 1: Foundation", duration: "Tuần 1-4", title: "Nền tảng Toán & Tài chính", desc: "Xây dựng gốc rễ vững chắc về Xác suất thống kê và Lý thuyết tài chính hiện đại.", tasks: ["Ôn tập Xác suất & Stochastic Calculus", "Lý thuyết Portfolio (Markowitz, CAPM)", "Python for Finance (Pandas, NumPy)"] },
  { phase: "Phase 2: Alpha", duration: "Tuần 5-8", title: "Nghiên cứu Alpha (WorldQuant)", desc: "Bắt tay vào làm việc thực tế trên nền tảng BRAIN. Tìm kiếm và kiểm thử ý tưởng.", tasks: ["Làm quen WorldQuant BRAIN", "Xây dựng 10 Alphas đầu tiên", "Phân tích chỉ số: Sharpe, Turnover, Decay"] },
  { phase: "Phase 3: Advanced", duration: "Tuần 9-10", title: "Machine Learning for Quant", desc: "Ứng dụng các mô hình học máy để dự đoán giá và quản lý rủi ro.", tasks: ["Linear/Logistic Regression", "Decision Trees & Random Forest", "Overfitting & Regularization"] },
  { phase: "Phase 4: Career", duration: "Tuần 11-12", title: "Phỏng vấn & Tổng kết", desc: "Chuẩn bị hồ sơ và tâm thế tốt nhất để chinh phục nhà tuyển dụng.", tasks: ["Mock Interview (Tech & Behavior)", "Review CV & LinkedIn", "Tổng kết Portfolio dự án"] }
];
</script>