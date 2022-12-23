const Users = require("./users.js")
const Blogs = require("./blogs.js")
const History = require("./history.js")
const UserFavorite = require("./user-favorite.js")

Users.hasMany(Blogs)
Blogs.belongsTo(Users)

Users.hasMany(UserFavorite)
UserFavorite.belongsTo(Users)

Blogs.hasMany(UserFavorite)
UserFavorite.belongsTo(Blogs)

Users.hasMany(History)
History.belongsTo(Users)

Blogs.hasMany(History)
History.belongsTo(Blogs)

module.exports = { Users, Blogs, UserFavorite, History }