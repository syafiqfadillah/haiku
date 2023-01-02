const { postBlog, getBlogs, getBlogId } = require("../controllers/blogs.js")
const express = require("express")

const router = express.Router()

router.post("/post-blog", postBlog)
router.get("/get-blogs", getBlogs)
router.get("/get-blog/:id", getBlogId)

module.exports = router