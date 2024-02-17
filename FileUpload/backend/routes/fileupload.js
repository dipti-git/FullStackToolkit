const express = require("express");
const router = express.Router();
const upload = require("../middleware/multerSetup");
const { uploadFile } = require("../controller/fileUploadController");

//File upload route
router.post("/upload", upload.single("file"), uploadFile);

module.exports = router;
