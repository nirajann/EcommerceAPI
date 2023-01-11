const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();
const db = require("../ecommern/db/connect")
const userRoutes = require("../ecommern/routes/user")
const AuthRoutes = require("../ecommern/routes/auth")
const productRoutes = require("../ecommern/routes/Product")
const OrderRoutes = require("../ecommern/routes/order")
const CartRoutes = require("../ecommern/routes/Cart")

const app = express();
const port = 4000;

//middleware
app.use(express.json());


// routes
app.use("/api/user", userRoutes);
app.use("/api/users", AuthRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", OrderRoutes);
app.use("/api/cart", CartRoutes);

app.get("/", (req, res) => {
  res.send("Under Construction");
});


app.listen(port, () => {
  console.log(`App is running in ${port}`);
});