const db = require("../config/db_config.js")

const UserFavorite = db.define(
    "user-favorite", 
    {
    },
    {
        freezeTableName: true,
        timestamps: true
    }
)

module.exports = UserFavorite