const express = require('express');
const router = express.Router();

// Import individual controller files
// const userControllers = require('./userRoutes');
// Import other controller files as needed
// home routes
const homeRoutes = require("./homeRoutes");
// Define routes for each controller
router.use('/user', userControllers);
// router.use home
router.use("/", homeRoutes);
module.exports = router;