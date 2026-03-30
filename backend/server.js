const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const analyticsRoutes = require('./routes/analytics');
app.use('/api/analytics', analyticsRoutes);

app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/admin-dashboard')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});