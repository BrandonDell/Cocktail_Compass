const express = require('express');
const router = express.Router();

// Import individual controller files
const userControllers = require('./userRoutes');
// Import other controller files as needed

// Define routes for each controller
router.use('/user', userControllers);
// Add routes for other controllers as needed

module.exports = router;