const cors = require("cors")
const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const db = require("./Config/db_config.js")

dotenv.config()
const app = express()
const PORT = 6666

const refresh_token = require("./Routes/refresh-token.js")
const users = require("./Routes/users.js")
const blogs = require("./Routes/blogs.js")
const history = require("./Routes/history.js")
const user_favorite = require("./Routes/user-favorite.js")

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(refresh_token)
app.use(users)
app.use(blogs)
app.use(history)
app.use(user_favorite)

// create tables and relations
db.sync({ alter: true })
    .then(() => console.log("Connected"))
    .catch((err) => console.error(err))

db.authenticate().then(() => {
    app.listen(PORT, () => console.log("Server Is Running!"))
})
