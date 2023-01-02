const { UserFavorite } = require("../models/index")

const getUserFavorites = async (req, res) => {
    try {
        const user_favorites = await UserFavorite.findAll()
        .then(result => res.status(200).json({
            message: "User Favorites Berhasil Diambil!",
            data: result
        }))
    } catch (error) {
        console.error(error)
    }
}

const postUserFavorite = async (req, res) => {
    try {
        const user_favorite = await UserFavorite.create(req.body)
        .then(result => res.status(200).json({
            message: "User Favorite Berhasil Dibuat!",
            data: result
        }))
    } catch (error) {
        console.error(error)
    }
}

const getUserFavoritesId = async (req, res) => {
    try {
        const byId = await UserFavorite.findAll(
            {
                where: {
                    userId: req.params.id
                }               
            }
        ).then(result => res.status(200).json({
            message: "User Favorite By Id Berhasil Diambil!",
            data: result
        }))
    } catch (error) {
        console.error(error)
    }
}

module.exports = { getUserFavorites, postUserFavorite, getUserFavoritesId }