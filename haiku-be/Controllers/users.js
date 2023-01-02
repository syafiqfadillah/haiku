const { ValidationErrorItem } = require("sequelize")
const { Users, Blogs, UserFavorite, History } = require("../Models/index")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const getUserById = async (req, res) => {
    try {
        await Users.findAll({
            where: {
                id: req.params.id
            },
            include: [Blogs, {
                model: UserFavorite, 
                include: Blogs
            }, 
            {
                model: History, 
                include: Blogs
            }]
        })
        .then(result => res.status(200).json({
            message: "User Berhasil Diambil!",
            data: result
        }))
    } catch (error) {
        console.error(error)
    }
}

const getUsers = async (req, res) => {
    try {
        await Users.findAll({
            include: [Blogs, UserFavorite]
        })
        .then(result => res.status(200).json({
            message: "Users Berhasil Diambil!",
            data: result
        }))
    } catch (error) {
        console.error(error)
    }
}

const postUser = async (req, res) => {
    const { name, username, email, password } = req.body
    const photo = req.file.path
    const salt = await bcrypt.genSalt()
    const encrypt = await bcrypt.hash(password, salt)

    try {        
        await Users.create({
            name: name,
            username: username,
            email: email,
            password: encrypt,
            photo: photo
        })
        .then(result => res.status(200).json({
            message: "User Berhasil Dibuat!",
            data: result
        }))
    } catch (error) {
        if (ValidationErrorItem) {
            res.status(400).json({
                message: "Username atau Email Sudah Ada!"       
            })
        } else {
            console.error(error)
        }
    }
}

const login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        })

        const match = await bcrypt.compare(req.body.password, user[0].password)

        if (!match) return res.status(400).json({
            message: "Password Salah!"
        })

        const userId = user[0].id
        const name = user[0].name
        const email = user[0].email
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "1d"
        })
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "1d"
        })

        await Users.update({refresh_token: refreshToken}, {
            where: {
                id: userId
            }
        })

        res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        res.json({accessToken})

    } catch (error) {
        res.status(404).json({
            message: "Email tidak ditemukan"
        })
    }
}

const logout = async (req, res) => {
    const refreshToken = req.cookies.refresh_token
    if (!refreshToken) return res.sendStatus(401)
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    })
    
    if (!user[0]) return res.sendStatus(403)

    const userId = user[0].id
    
    await Users.update({refresh_token: null}, {
        where: {
            id: userId
        }
    })

    res.clearCookie("refreshToken")
    res.sendStatus(200)
}

module.exports = { getUserById, getUsers, postUser, login, logout }