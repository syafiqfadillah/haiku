const refreshToken = require("../Controllers/refresh-token.js")
const express = require("express")

const router = express.Router()

router.get("/token", refreshToken)

module.exports = router
