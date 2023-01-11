const express = require("express");
const {
  addCart,
  updateCart,
  deleteCart,
  getCart,
  getAllCart,
} = require("../controllers/cart");
const router = express.Router();

//routes
router.route("/addproduct").post(addCart);
router.route("/:id").put(updateCart);
router.route("/:id").delete(deleteCart);
router.get("/:id", getCart);
router.get("/", getAllCart);
// router.get("/", getUsers);
module.exports = router;
