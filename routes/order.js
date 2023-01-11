const express = require("express");
const {
  addOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  getAllOrder,
} = require("../controllers/order");
const router = express.Router();

//routes
router.route("/addproduct").post(addOrder);
router.route("/:id").put(updateOrder);
router.route("/:id").delete(deleteOrder);
router.get("/:id", getOrder);
router.get("/", getAllOrder);
// router.get("/", getUsers);
module.exports = router;
