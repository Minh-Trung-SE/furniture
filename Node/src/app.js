const express = require("express")
const {User} = require("@models/User/UserModel");
const app = express()

app.use(require("@routers/index"))
User.
module.exports = {
    app
}