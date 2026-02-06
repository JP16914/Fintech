const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 300 }); 

class RedisService {
    // Lưu mã OTP vào Cache (Redis)
    static setOTP(userId, otp) {
        const key = `otp_${userId}`;
        myCache.set(key, otp);
        console.log(`[REDIS SIMULATION] Saved OTP for ${userId}: ${otp}`);
    }

    // Lấy mã OTP và xóa luôn (để không dùng lại được)
    static getAndDelOTP(userId) {
        const key = `otp_${userId}`;
        const otp = myCache.get(key);
        if (otp) myCache.del(key); 
        return otp;
    }
}

module.exports = RedisService;