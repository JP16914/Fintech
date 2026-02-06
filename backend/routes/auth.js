const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const AuthService = require('../services/AuthService');

router.post('/register', async (req, res) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email đã tồn tại');

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    fullName: req.body.fullName
  });

  try {
    const savedUser = await user.save();
    res.send({ user: savedUser._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/login', async (req, res) => {
    try {
        const result = await AuthService.initiateLogin(req.body.email, req.body.password);
        res.send(result);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// LOGIN - STEP 2 (Verify OTP)
router.post('/verify-otp', async (req, res) => {
    try {
        const { userId, otp } = req.body;
        const result = await AuthService.verify2FA(userId, otp);
        res.send(result); // Trả về Token thật
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
});

router.post('/avatar', auth, upload.single('avatar'), async (req, res) => {
    try {
        const avatarUrl = `http://localhost:5000/uploads/${req.file.filename}`;
        
        // Update user profile
        const user = await User.findByIdAndUpdate(
            req.user._id, 
            { avatar: avatarUrl }, 
            { new: true }
        ).select('-password');

        res.send(user);
    } catch (err) {
        res.status(400).send("Lỗi upload ảnh");
    }
});

module.exports = router;