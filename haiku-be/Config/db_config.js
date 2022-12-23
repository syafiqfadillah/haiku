const { Sequelize } = require("sequelize")

const db = new Sequelize("haiku", "root", "", {
    host: "localhost",
    dialect: "mysql",
})

module.exports = db