const { Blogs, Users, History } = require("../models/index")

const getBlogs = async (req, res) => {
    try {
        const users = await Blogs.findAll()
        res.json(users)
    } catch (error) {
        console.error(error)
    }
}

const deleteBlog = (req, res) => {
    Blogs.destroy({
        where : {
            id : req.params.id
        }
    })

    History.destroy({
        where : {
            blogId : req.params.id
        }
    })

    res.status(200).json({
        message : "Blog Berhasil Dihapus!"
    })
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

const updateBlog = async (req, res) => {
    try {
        await Blogs.update(req.body, {
            where : {
                id : req.params.id
            }
        }).then(() => res.status(200).json({
            message : "Blog Berhasil Diupdate!"
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

module.exports = { deleteBlog, getBlogs, postBlog, updateBlog, getBlogId }