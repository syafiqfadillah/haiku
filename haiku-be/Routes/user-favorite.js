const { postUserFavorite, getUserFavorites, getUserFavoritesId } = require("../controllers/user-favorite.js")
const express = require("express")

const router = express.Router()

router.post("/post-user_favorite", postUserFavorite)
router.get("/get-user_favorites", getUserFavorites)
router.get("/get-user_favorites/:id", getUserFavoritesId)

module.exports = router