const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(
    require('cors')(
        {
            origin: ["http://localhost:5173"],
            credentials: true
        }
    )
)
app.use(require("@routers/index"))

require("@databases/ModelSynchronized")

module.exports = {
    app
}