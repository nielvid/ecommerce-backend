const express = require("express");
const router = express.Router();
const upload = require("../controller/UploadFunction");
const Controller = require("../controller/Controller");
const { authenticate } = require("../authentication/Authentication");

router.get("/products", Controller.AllProducts);
router.get("/:slug", Controller.SingleProduct);
router.post("/add-product", authenticate, upload.single("image"), Controller.AddProduct);
router.post("/login", Controller.Login);
router.post("/register", Controller.Register);
router.get("/logout", authenticate, Controller.Logout);

module.exports = router;
