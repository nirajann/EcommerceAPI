const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
            },
            quantity: {
                type: Number,
                defult:1,
          }
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
