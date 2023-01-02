const { Blogs, Users } = require("../models/index")

const getBlogs = async (req, res) => {
    try {
        const users = await Blogs.findAll()
        res.json(users)
    } catch (error) {
        console.error(error)
    }
}

const postBlog = async (req, res) => {
    try {
        const user = await Blogs.create(req.body)
        .then((result) => res.status(200).json({
            message: "Blog Berhasil Dibuat!",
            data: result
        }))
    } catch (error) {
        console.error(error)
    }
}

const getBlogId = async (req, res) => {
    try {
        await Blogs.findAll(
            {
                where: {
                    id: req.params.id
                },
                include: Users
            }
        ).then(result => res.status(200).json({
            message: "Blog Per Id Berhasil Diambil!",
            data: result
        }))
    } catch (error) {
        console.error(error)
    }
}

module.exports = { getBlogs, postBlog, getBlogId }