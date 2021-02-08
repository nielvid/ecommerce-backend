const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const Product = require("../models/Product");
const { PostProduct } = require("../validation/Validate");
const slugify = require("slugify");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.KEY,
  api_secret: process.env.API_SECRET
});

const addnew = async (req, res, next) => {
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
};

const AddProduct = async (req, res, next) => {
  const { productName, description, category, price, salesPrice, discount } = req.body;

  try {
    if (req.file) {
      const path = req.file.path;
      console.log(req.file.path);
      const verifyDataInput = {
        productName,
        description,
        category,
        image: path,
        price,
        salesPrice,
        discount,
        slug: slugify(productName)
      };
      const slugExst = await Product.findOne({ slug: verifyDataInput.slug });

      if (slugExst) return res.status(400).json({ error: "Product Name already Exit" });
      const { error } = PostProduct(verifyDataInput, { AbortEarly: true });
      if (error) {
        fs.unlinkSync(path);
        console.log(error.details.map((item) => { return item.message; }));
        return res.status(400).json({ error: error.details.map((item) => { return item.message; }) });
      }
      if (!error) {
        // upload image to cloudinary
        cloudinary.uploader.upload(verifyDataInput.image,
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
              discount,
              slug: slugify(productName)
            });

            const result = await post.save();
            res.send(result);
            console.log(result);

            // remove file from server
            fs.unlinkSync(path);
          });
      }
    }
  } catch (err) { res.status(400).json(err); }
};

/* DELETE AN IMAGE FROM SERVER
cloudinary.uploader.destroy('zombie', function(result) { console.log(result) });
*/
module.exports = { AddProduct, addnew };
