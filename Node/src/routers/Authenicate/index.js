const router = require("express").Router()

router.get(
    "/", (req, res) => {
        res.send("Hello Wosrld!")
    }
)

module.exports = router