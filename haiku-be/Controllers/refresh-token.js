const { Users } = require("../Models/index.js")
const jwt = require("jsonwebtoken")

const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refresh_token
        if (!refreshToken) return res.sendStatus(401)
        const users = await Users.findAll({
            where: {
                refresh_token: refreshToken
            }
        })
        
        if (!users[0]) return res.sendStatus(403)
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403)
            const userId = users[0].id
            const name = users[0].name
            const email = users[0].email
            const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "1d"
            })
            res.json({ accessToken })
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = refreshToken