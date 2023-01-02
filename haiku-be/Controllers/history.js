const { History } = require("../models/index")

const postHistory = async (req, res) => {
    try {
        await History.create(req.body)
        .then(result => res.status(200).json({
            message: "History Berhasil Dibuat!",
            data: result
        }))
    } catch (error) {
        console.error(error)
    }
}

const getHistoryId = async (req, res) => {
    try {
        await History.findAll(
            {
                where: {
                    userId: req.params.id
                }               
            }
        ).then(result => res.status(200).json({
            message: "History By Id Berhasil Diambil!",
            data: result
        }))
    } catch (error) {
        console.error(error)
    }
}

module.exports = { postHistory, getHistoryId }