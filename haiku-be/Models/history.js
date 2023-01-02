const db = require("../config/db_config.js")

const History = db.define(
    "history", 
    {
    },
    {
        freezeTableName: true,
        timestamps: true
    }
)

module.exports = History