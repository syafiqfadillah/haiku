const cors = require("cors")
const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const db = require("./config/db_config.js")
const path = require("path")

const refresh_token = require("./routes/refresh-token.js")
const users = require("./routes/users.js")
const blogs = require("./routes/blogs.js")
const history = require("./routes/history.js")
const user_favorite = require("./routes/user-favorite.js")

dotenv.config()
const app = express()
const PORT = 3333

app.use(cors({origin : true, credentials : true}))
app.use(cookieParser())
app.use(express.json())
app.use(users)
app.use(blogs)
app.use(history)
app.use(user_favorite)
app.use(refresh_token)
app.use("/Images", express.static(path.join(__dirname, "Images")))

// create tables and relations
// db.sync({ alter: true })
//     .then(() => console.log("Connected"))
//     .catch((err) => console.error(err))

db.authenticate().then(() => {
    app.listen(PORT, () => console.log("Server Is Running!"))
})
