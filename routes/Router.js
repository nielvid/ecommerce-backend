const express = require("express");
const router = express.Router();
const upload = require("../controller/UploadFunction");

const Controller = require("../controller/Controller");

router.get("/products", Controller.AllProducts);
router.get("/:slug", Controller.SingleProduct);
router.post("/add-product", upload.single("image"), Controller.AddProduct);
router.post("/login", Controller.Login);
router.post("/register", Controller.Register);

module.exports = router;
