const { deleteBlog, postBlog, getBlogs, getBlogId, updateBlog } = require("../controllers/blogs.js")
const express = require("express")

const router = express.Router()

router.post("/post-blog", postBlog)
router.get("/get-blogs", getBlogs)
router.get("/get-blog/:id", getBlogId)
router.put("/update-blog/:id", updateBlog)
router.delete("/del-blog/:id", deleteBlog)

module.exports = router