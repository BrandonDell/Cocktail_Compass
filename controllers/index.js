const router = require("express").Router()
const homeRoutes = require("./homeRoutes")
// const dashboardRoutes = require("./dashboardRoutes");
const apiRoutes = require('./api')

router.use('/', homeRoutes)
router.use('/api', apiRoutes)
// router.use("/dashboard", dashboardRoutes);

module.exports = router