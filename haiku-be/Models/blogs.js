const { Sequelize } = require("sequelize")
const db = require("../Config/db_config.js")

const { DataTypes } = Sequelize

const Blogs = db.define(
    "blogs",
    {
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.TEXT
        }
    },
    {
        freezeTableName: true,
        timestamps: true
    }
)


module.exports = Blogs