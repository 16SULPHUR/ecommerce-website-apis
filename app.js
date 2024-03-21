const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const cors = require("cors")
const PORT = 3005;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors()
);


mongoose
  .connect(
    "mongodb+srv://akpatil51340:Ankit5134@cluster0.4vncxmi.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", async (req, res) => {
  res.json({
    msg: "/WORKING",
  });
});

const addProductRouter = require("./Routes/addProduct")
app.use("/addProduct", addProductRouter)

app.listen(PORT, () => {
  console.info(`Running on http://127.0.0.1:${PORT}`);
});
