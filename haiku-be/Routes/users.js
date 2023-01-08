const { getUserById, putUser, postUser, getUsers, login, logout } = require("../controllers/users.js")
const verifyToken = require("../middleware/verify-token.js")
const multer = require("multer")
const express = require("express")

const router = express.Router()

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../haiku-be/Images")
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime() + "-" + file.originalname)
    },
})

let upload = multer({ storage: storage })

router.use(upload.single("photo"))
router.get("/get-user/:id", verifyToken, getUserById) 
router.post("/post-user", postUser)
router.get("/get-users", getUsers)
router.post("/login", login)
router.put("/logout", logout)

module.exports = router