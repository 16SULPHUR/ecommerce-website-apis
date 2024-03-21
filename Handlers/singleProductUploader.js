const { SingleProduct } = require("../Models/Product")
const {uploadImages, uploadThumbnail} = require("./uploadImages")

const singleProductUploader = async (req,res)=>{
    console.log(req.body)
    console.log(req.files)

    const body = req.body

    const imagesURLs = await uploadImages(req.files.images)
    const thumbnailURL = await uploadImages.uploadThumbnail

    const newSingleProduct = new SingleProduct({
        title: body.title,
        description: body.description,
        images: imagesURLs,
        thumbnail: thumbnailURL,
        price: body.price
    })

    const savedSingleProduct = await newSingleProduct.save()

    console.log("savedSingleProduct")
    console.log(savedSingleProduct)
    res.send("single product uploader")
}

module.exports = singleProductUploader;