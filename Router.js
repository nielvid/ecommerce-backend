const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config(); const fs = require("fs");
const Product = require("./Product");
const upload = require("./UploadFunction");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.KEY,
  api_secret: process.env.API_SECRET
});

router.post("/add-product", upload.single("image"), async (req, res, next) => {
  const { productName, description, category, price, salesPrice, discount } = req.body;

  try {
    if (req.file) {
      const path = req.file.path;

      cloudinary.uploader.upload(path,
        async function (err, image) {
          if (err) {
            res.status().send(err);
            return;
          }
          console.log("file uploaded to Cloudinary");

          const post = new Product({
            productName,
            description,
            category,
            image: image.secure_url,
            price,
            salesPrice,
            discount
          });
          const result = await post.save();
          res.send(result);
          console.log(result);

          // remove file from server
          fs.unlinkSync(path);
        });
    }
  } catch (err) { res.status(400).json(err); }
});

module.exports = router;
