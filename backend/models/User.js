const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
  fullName: { type: String, default: '' },
  title: { type: String, default: 'Aspiring Quant' },
  bio: { type: String, default: '' },
  avatar: { type: String, default: '' },
  
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);