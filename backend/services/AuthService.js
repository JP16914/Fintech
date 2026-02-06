const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const RedisService = require('./RedisService');

class AuthService {
    
    // Bước 1: Kiểm tra User/Pass và sinh mã OTP
    static async initiateLogin(email, password) {
        const user = await User.findOne({ email });
        if (!user) throw new Error('Email không tồn tại');

        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) throw new Error('Mật khẩu sai');

        // Sinh mã 6 số ngẫu nhiên
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Lưu vào Redis (Cache) với hạn 5 phút
        RedisService.setOTP(user._id.toString(), otp);

        // Giả lập gửi Email (In ra console để test)
        console.log(`===========================================`);
        console.log(`EMAIL SENT TO ${email}: YOUR OTP IS ${otp}`);
        console.log(`===========================================`);

        // Trả về userId tạm thời để Client dùng bước 2
        return { 
            require2FA: true, 
            tempUserId: user._id, 
            message: "Mã xác nhận đã gửi vào email." 
        };
    }

    // Bước 2: Xác thực OTP và trả về JWT Token
    static async verify2FA(userId, otpInput) {
        const storedOTP = RedisService.getAndDelOTP(userId);
        
        if (!storedOTP || storedOTP !== otpInput) {
            throw new Error('Mã xác nhận không đúng hoặc đã hết hạn');
        }

        // Nếu đúng, tạo Token chính thức
        const user = await User.findById(userId);
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        return {
            token,
            user: {
                id: user._id,
                username: user.username,
                fullName: user.fullName,
                avatar: user.avatar,
                title: user.title
            }
        };
    }
}

module.exports = AuthService;