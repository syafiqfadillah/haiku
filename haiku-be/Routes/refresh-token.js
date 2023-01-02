const refreshToken = require("../controllers/refresh-token.js")
const express = require("express")

const router = express.Router()

router.get("/get-token", refreshToken)

module.exports = router
