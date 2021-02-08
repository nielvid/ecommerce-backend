const express = require("express");
const router = express.Router();
const upload = require("../controller/UploadFunction");

const Controller = require("../controller/Controller");

router.post("/add-product", upload.single("image"), Controller.AddProduct);
router.get("/products", Controller.GetAllProducts);

module.exports = router;
