
const { Router } = require('express');
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

const router = Router();

// Use user and thought routes
router.use('/api', userRoutes);
router.use('/api', thoughtRoutes);

module.exports = router;
