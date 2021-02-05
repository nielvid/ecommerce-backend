var path = require('path');
const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')

dotenv.config()
 
 const fs = require('fs')

const Product = require('./Product')
const bcrypt = require("bcrypt");
//const { registerValidation, LoginValidation } = require("../authentication/Validate");
const jwt = require('jsonwebtoken')
//const {authenticate} = require('../authentication/Authentication') 

var multer  = require('multer')

const cloudinary = require('cloudinary').v2

  cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.KEY,
  api_secret: process.env.API_SECRET
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    console.log(file);
    const file_name  = Date.now()  + file.originalname
        cb(null, file_name);
  }
})

var  fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

var upload  = multer({ storage: storage, fileFilter:fileFilter, limits : {fileSize : 5 * 1000000} })

router.post('/newpost', upload.single('images'), async(req, res, next) => {
    
  //var img_url
  const {product_name,  description, category, price, sales_price} = req.body

  
   try {
     if(req.file){
            let img =  req.file.filename  //
            const path = req.file.path

           const imageLink =  cloudinary.uploader.upload(path,
      //{ public_id: `blog/${uniqueFilename}`, tags: `blog` }, // directory and tags are optional
      function(err, image) {
        if (err) {
          return res.send(err)}

          const post= new Product({
            product_name, 
            description,
            images: image.secure_url,
             category,
              price, 
              sales_price
      
          })
          post.save((err, result)=>{
            if(err)
            throw new err
            console.log(result)
            res.status(200).json(result)
          })
          //console.log(resp)
         // res.send(resp)


        console.log('file uploaded to Cloudinary')
        // remove file from server
       
        fs.unlinkSync(path)
        // return image details

        
      
      // img_url	 =  image.secure_url
      }
    )
    
   
    /*
res.status(201).json({
            status:0,
            message: 'File uploded successfully',
            path : img
        })*/
        }
        
        
    } catch (error) {
        console.error(error);
    }

});

router.get('/products', async (req, res)=>{

  let product = await Product.find().exec()
  res.send(product)
})

router.get('/products/:id', async (req, res)=>{

  const {id} = req.params

  let product = await Product.find({product_name: id}).sort('asc').exec()
  res.send(product)
})
/*
mongodb+srv://derayo8:deray@08@cluster0.oqznz.mongodb.net/test

mongodb+srv://<username>:<password>@cluster0.oqznz.mongodb.net/test*/

module.exports = router;
