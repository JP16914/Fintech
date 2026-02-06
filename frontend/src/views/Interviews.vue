<template>
  <div class="pt-12 pb-24 px-6 max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-serif font-bold text-[#3e1313] mb-6">Phòng Luyện Phỏng Vấn</h1>
      <p class="text-lg text-gray-600">Tổng hợp các dạng bài thường gặp và chiến thuật vượt qua từng vòng.</p>
    </div>

    <div class="flex justify-center gap-4 mb-12">
        <button class="px-6 py-2 bg-[#991B1B] text-white rounded-full text-sm font-bold shadow-lg">Tất cả</button>
        <button class="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50">Brainteasers</button>
        <button class="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50">Coding</button>
        <button class="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50">Finance</button>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-20">
        
        <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-6">
                <div class="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <h3 class="text-xl font-serif font-bold text-[#1E293B]">Probability & Math</h3>
            </div>
            <div class="space-y-6">
                <div class="pb-4 border-b border-gray-100 last:border-0">
                    <p class="font-medium text-gray-800 mb-2">Q1: Tung xúc xắc liên tục.</p>
                    <p class="text-sm text-gray-600 mb-2">Bạn tung một con xúc xắc cho đến khi ra mặt 6. Kỳ vọng số lần tung là bao nhiêu? Nếu bạn được trả số tiền bằng tổng các mặt đã tung, bạn sẵn sàng trả bao nhiêu để chơi?</p>
                    <div class="bg-gray-50 p-3 rounded text-xs text-gray-500 font-mono">Answer: E[N] = 6. Fair value = 21.</div>
                </div>
                <div class="pb-4 border-b border-gray-100 last:border-0">
                    <p class="font-medium text-gray-800 mb-2">Q2: Bài toán người say rượu.</p>
                    <p class="text-sm text-gray-600 mb-2">Một người say đứng ở vách đá. Mỗi bước anh ta có 50% tiến, 50% lùi. Xác suất anh ta rơi xuống vực sau N bước là bao nhiêu?</p>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-6">
                <div class="p-3 bg-purple-50 text-purple-600 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h3 class="text-xl font-serif font-bold text-[#1E293B]">Coding & Algorithms</h3>
            </div>
             <div class="space-y-6">
                <div class="pb-4 border-b border-gray-100 last:border-0">
                    <p class="font-medium text-gray-800 mb-2">Q1: Moving Average.</p>
                    <p class="text-sm text-gray-600 mb-2">Viết một class tính toán Simple Moving Average (SMA) của một luồng dữ liệu đầu vào. Tối ưu hóa bộ nhớ và tốc độ.</p>
                    <div class="bg-gray-50 p-3 rounded text-xs text-gray-500 font-mono">Tip: Sử dụng Deque hoặc Circular Buffer.</div>
                </div>
                <div class="pb-4 border-b border-gray-100 last:border-0">
                    <p class="font-medium text-gray-800 mb-2">Q2: Two Sum (Hash Map).</p>
                    <p class="text-sm text-gray-600 mb-2">Tìm hai số trong mảng có tổng bằng Target. Yêu cầu độ phức tạp O(n).</p>
                </div>
            </div>
        </div>

    </div>

    <div class="bg-[#FFF8F1] border border-[#f0ead6] rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
        <div class="flex-1">
            <h3 class="text-2xl font-serif font-bold text-[#3e1313] mb-4">Chiến thuật STAR cho câu hỏi hành vi</h3>
            <p class="text-gray-600 mb-4">Khi được hỏi "Hãy kể về một lần bạn thất bại", đừng trả lời lan man. Hãy áp dụng cấu trúc:</p>
            <ul class="space-y-2">
                <li class="flex gap-3"><span class="font-bold text-[#991B1B] w-16">Situation:</span> <span class="text-sm text-gray-600">Mô tả bối cảnh ngắn gọn.</span></li>
                <li class="flex gap-3"><span class="font-bold text-[#991B1B] w-16">Task:</span> <span class="text-sm text-gray-600">Nhiệm vụ/Thách thức bạn phải đối mặt.</span></li>
                <li class="flex gap-3"><span class="font-bold text-[#991B1B] w-16">Action:</span> <span class="text-sm text-gray-600">Hành động cụ thể BẠN đã làm (không phải "chúng tôi").</span></li>
                <li class="flex gap-3"><span class="font-bold text-[#991B1B] w-16">Result:</span> <span class="text-sm text-gray-600">Kết quả định lượng (số liệu, bài học).</span></li>
            </ul>
        </div>
        <div class="flex-1">
             <div class="bg-white p-6 rounded-xl shadow-sm text-center">
                <div class="text-4xl mb-2">⭐</div>
                <div class="font-serif font-bold text-gray-800">Be Specific. Be Quantitative.</div>
             </div>
        </div>
    </div>
  </div>
</template>