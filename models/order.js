const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          defult: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: { type: Object, requried: true },
    status: {
      type: String,
      defult: "pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order
