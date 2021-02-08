const express = require("express");
const router = express.Router();
const upload = require("../controller/UploadFunction");

const Controller = require("../controller/Controller");

router.post("/addnew", upload.single("image"), Controller.addnew);
router.post("/add-product", upload.single("image"), Controller.AddProduct);

module.exports = router;
