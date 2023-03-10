const { postHistory,  getHistoryId } = require("../controllers/History.js")
const express = require("express")

const router = express.Router()

router.post("/post-history", postHistory)
router.get("/get-history/:id", getHistoryId)

module.exports = router