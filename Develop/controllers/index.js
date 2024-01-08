const router = require('express').Router();
const homeRoutes = require('./homeRoutes');



router.use('/potato', homeRoutes)
//router.use("/api", apiRoutes)



module.exports = router;