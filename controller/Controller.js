const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const Product = require("../models/Product");
const { PostProduct, LoginValidation, registerValidation } = require("../validation/Validate");
const slugify = require("slugify");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
const Customer = require("../models/Customer");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.KEY,
  api_secret: process.env.API_SECRET
});

const options = {
  page: 1,
  limit: 10,
  collation: {
    locale: "en"
  }
};
const AllProducts = async (req, res) => {
  const products = await Product.paginate({}, options, (err, result) => {
    if (err) return res.status(400).send(err);
    return result;
  });
  res.send(products);
};

const SingleProduct = async (req, res) => {
  const { slug } = req.params;
  const product = await Product.findOne({ slug: slug }, (err, doc) => {
    if (err) return res.status(400).send(err);
    console.log(doc);
    return doc;
  });
  if (!product) return res.status(400).send("Product not found");
  res.status(200).send(product);
};
const AddProduct = async (req, res, next) => {
  const { productName, description, category, price, salesPrice, discount } = req.body;

  try {
    if (req.file) {
      const path = req.file.path;
      console.log(req.file.path);
      const data = {
        productName,
        description,
        category,
        image: path,
        price,
        salesPrice,
        discount,
        slug: slugify(productName, { lower: true })
      };
      const { error } = PostProduct(data, { abortEarly: true });
      if (error) {
        console.log(error.details.map((item) => { return item.message; }));
        return res.status(401).json({ error: error.details.map((item) => { return item.message; }) });
      }
      const productExist = await Product.findOne({ productName: data.productName });

      if (productExist) {
        fs.unlinkSync(path);
        return res.status(400).send({
          message: "Product Name already Exit"
        });
      }

      // upload image to cloudinary
      cloudinary.uploader.upload(data.image,
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
  } catch (err) { res.status(401).json(err.message); }
};

const Register = async (req, res) => {
  try {
    // validate the user
    const { error } = registerValidation(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // check if email exist in the database
    const isEmailExist = await Customer.findOne({ email: req.body.email });
    if (isEmailExist) { return res.status(400).json({ error: "Email already exists" }); }

    // hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);

    const newCustomer = new Customer({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      telephone: req.body.telephone
    });

    newCustomer.save((err, doc) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(doc);
    });
  } catch (err) {
    console.log(err);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
  // validate the user
    const { error } = LoginValidation({ email, password }, { abortEarly: true });

    if (error) return res.status(400).json({ error: error.details[0].message });
    const user = await Customer.findOne({ email });
    // throw error when email is wrong
    if (!user) return res.status(400).json({ error: "Email is wrong" });
    // check for password correctness
    const checkPassword = await bcrypt.compare(req.body.password, user.password);
    if (!checkPassword) { return res.status(400).json({ error: "Password is wrong" }); }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "10m" });
    if (user !== null) {
      req.session.user = {
        email: user.email
      };
    }
    user.token = token;
    user.save();

    res.cookie("ecommerce", token, { maxAge: 900000, httpOnly: true }).send({
      error: null,
      userId: user._id,
      username: user.email,
      token: token,
      message: "Login successful",
      session: "session created"
    });
  } catch (err) {
    console.log(err);
  }
};

const Dashboard = async (req, res) => {
  if (!req.session.user) {
    res.redirect("/login");
  } else {
    res.render("account", { user: req.session.user });
  }
};
const Logout = async (req, res) => {
  if (req.cookie) {
    console.log(req.cookie);
    res.cookie("ecommerce", "none", {
      expires: new Date(Date.now() + 5 * 1000),
      httpOnly: true
    }).send("user logged out");
    // res.clearCookie("ecommerce").send("user logged out");
  } else {
    res.status().send("User not logged in");
  }
};
/* DELETE AN IMAGE FROM SERVER
cloudinary.uploader.destroy('zombie', function(result) { console.log(result) });
*/
module.exports = { AllProducts, SingleProduct, AddProduct, Login, Register, Dashboard, Logout };
