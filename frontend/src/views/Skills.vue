<template>
  <div class="pt-12 pb-24 px-6 max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-[#3e1313] mb-6">Skill Map & Resources</h1>
      <p class="text-lg text-gray-600">Bản đồ kỹ năng toàn diện kèm theo các nguồn tài liệu học tập tốt nhất.</p>
    </div>

    <div class="grid gap-12">
        <div v-for="(cat, i) in detailedSkills" :key="i">
            <h2 class="text-2xl font-serif font-bold text-[#1E293B] mb-6 flex items-center gap-3 border-b border-gray-200 pb-4">
                <span class="text-[#991B1B]">{{ cat.icon }}</span> {{ cat.category }}
            </h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(skill, j) in cat.items" :key="j" class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#D97706]/30 transition-colors group">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="font-bold text-gray-800">{{ skill.name }}</h3>
                        <span class="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded font-medium">{{ skill.difficulty }}</span>
                    </div>
                    
                    <p class="text-sm text-gray-500 mb-4 h-10 line-clamp-2">{{ skill.desc }}</p>
                    
                    <div class="w-full bg-gray-100 rounded-full h-1.5 mb-4">
                        <div class="bg-[#991B1B] h-1.5 rounded-full" :style="{ width: skill.importance }"></div>
                    </div>
                    
                    <div class="pt-4 border-t border-dashed border-gray-200">
                        <span class="text-xs font-bold text-gray-400 uppercase block mb-2">Nguồn học tốt nhất:</span>
                        <a href="#" class="text-sm text-[#D97706] hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                            {{ skill.resource }} <span class="text-xs">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
const detailedSkills = [
    {
        category: "Quantitative Analysis (Toán & Thống kê)",
        icon: "∑",
        items: [
            { name: "Xác suất (Probability)", difficulty: "Hard", importance: "95%", desc: "Cốt lõi của mọi mô hình. Cần nắm vững Bayes, Biến ngẫu nhiên, Kỳ vọng.", resource: "A First Course in Probability (Sheldon Ross)" },
            { name: "Time Series Analysis", difficulty: "Medium", importance: "85%", desc: "Phân tích chuỗi thời gian, ARIMA, GARCH, Cointegration.", resource: "Analysis of Financial Time Series (Tsay)" },
            { name: "Linear Algebra", difficulty: "Medium", importance: "80%", desc: "Xử lý dữ liệu nhiều chiều, PCA, Eigenvectors.", resource: "Introduction to Linear Algebra (Strang)" }
        ]
    },
    {
        category: "Programming & Data (Lập trình)",
        icon: "💻",
        items: [
            { name: "Python for Finance", difficulty: "Medium", importance: "90%", desc: "Pandas, NumPy, Scikit-learn để xử lý dữ liệu và backtest.", resource: "Python for Finance (Yves Hilpisch)" },
            { name: "C++ Low Latency", difficulty: "Very Hard", importance: "70%", desc: "Quản lý bộ nhớ, STL, Multithreading cho High Frequency Trading.", resource: "Effective Modern C++ (Scott Meyers)" },
            { name: "SQL & Databases", difficulty: "Easy", importance: "75%", desc: "Truy vấn dữ liệu lớn từ kho dữ liệu.", resource: "LeetCode Database Problems" }
        ]
    }
];
</script>