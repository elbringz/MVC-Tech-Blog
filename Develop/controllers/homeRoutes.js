const router = require('express').Router();
const {User} = require('../models');
/// base url is still localhost:3001/potato
// homeRoutes responsible for GET from database and assignment of handlebars (view) urls
router.get('/', async  (req, res) => {
const userData = User.findAll({})

const users = userData.map(user => user.get({plain:true}))


res.render('home.handlebars', {users})
})




module.exports = router;