// import packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// DB connection
mongoose.connect("mongodb+srv://mohamedilyeshel:Fs22Ouw96VtnxNZ2@cluster0.hgph0as.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.on("connected", () => {console.log("Connection with db good")});
mongoose.connection.on("error", (err) => {console.log("Connection with db failed", err)});

// import routes
const routerCategory = require("./routes/category.routes");
const routerProduct = require("./routes/product.routes");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes middleware
app.use("/categories", routerCategory);
app.use("/products", routerProduct);

// server listening
const port = 8000;

app.listen(port,() => {
    console.log("Connection done with the server");
})