const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/stats', async (req, res) => {
  const totalUsers = await User.countDocuments();
  const activeUsers = await User.countDocuments({ status: 'active' });
  const inactiveUsers = await User.countDocuments({ status: 'inactive' });

  res.json({
    totalUsers,
    activeUsers,
    inactiveUsers
  });
});

module.exports = router;