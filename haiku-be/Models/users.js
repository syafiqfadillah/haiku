const { Sequelize } = require("sequelize")
const db = require("../Config/db_config.js")

const { DataTypes } = Sequelize

const Users = db.define(
    "users",
    {
        name: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        }, 
        password: {
            type: DataTypes.STRING
        },
        photo: {
            type: DataTypes.STRING
        },
        refresh_token: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: true
    }
)

module.exports = Users