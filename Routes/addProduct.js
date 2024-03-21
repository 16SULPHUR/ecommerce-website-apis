const express = require('express');
const SingleProduct = require('../Models/Product');
const singleProductUploader = require('../Handlers/singleProductUploader');
const router = express.Router();
const multer = require("multer")

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

router.post('/single', upload.fields([
    {
        name:"images"
    },
    {
        name:"thumbnail"
    }
]), (req, res) => {
  singleProductUploader(req,res)
}).get("/single",(req,res)=>{
    res.send("Get request to single product uploader page")
});

module.exports = router;
