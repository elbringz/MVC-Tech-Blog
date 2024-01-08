const {User} = require('./user');



/// add associations here that connect our models and define their relationship (ie one to many, one to one, many to many)
// establishes joins using foreign keys
/// User.hasMany(Post,{
 //   foreignKey:"post_id"
//})






module.exports = { User }