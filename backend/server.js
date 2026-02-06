const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('DB Connection Error: ', err));

app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Up and Running on port ${PORT}`));