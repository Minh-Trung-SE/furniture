const {MediaController} = require("@controllers/MediaController");
const {wrapperSyncHandler} = require("@helpers/ErrorWrapper");
const router = require("express").Router()

router.post(
    "/api/media",
    MediaController.getMulter().array("media"),
    MediaController.handleUpload
)

router.get(
    "/api/media/:slug",
    wrapperSyncHandler(
        MediaController.getMedia
    )
)

module.exports = router