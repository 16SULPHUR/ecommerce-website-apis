const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const cors = require("cors")
const PORT = 3005;

app.use(cors())


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connect = async ()=>{
  await mongoose
    .connect(
      "mongodb+srv://akpatil51340:%40Ankit2005@cluster0.rwylpqs.mongodb.net/vh?retryWrites=true&w=majority&appName=cluster0"
    )
    // .connect(
    //   "mongodb+srv://akpatil51340:Ankit5134@cluster0.4vncxmi.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
    // )
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((e) => {
      console.log(e);
    });
}

connect()

app.get("/", async (req, res) => {
  res.json({
    msg: "/WORKING",
  });
});

const addProductRouter = require("./Routes/addProduct")
const getAllProductsRouter = require("./Routes/getAllProducts")
const addThumbnailRouter = require("./Routes/addThumbnail")
const getProductRouter = require("./Routes/getProduct")
const deleteProductRouter = require("./Routes/deleteProduct")
const addImagesRouter = require("./Routes/addImages")

app.use("/addProduct", addProductRouter)
app.use("/getAllProducts", getAllProductsRouter) 
app.use("/addThumbnail", addThumbnailRouter) 
app.use("/getProduct", getProductRouter) 
app.use("/deleteProduct", deleteProductRouter) 
app.use("/addImages", addImagesRouter) 

app.listen(PORT, () => {
  console.info(`Running on http://127.0.0.1:${PORT}`);
});
