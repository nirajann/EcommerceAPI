const Cart = require("../models/product");

const addCart = async (req, res, next) => {
  const newcart = new Cart(req.body);
  try {
    const savedcart = await newcart.save();
    res.status(200).json(savedcart);
  } catch (error) {
    next(error);
  }
};

const updateCart = async (req, res, next) => {
  try {
    const updatecart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatecart);
  } catch (error) {
    next(error);
  }
};

const deleteCart = async (req, res, next) => {
  try {
    const deletecart = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json(deletecart);
  } catch (error) {
    next(error);
  }
};

const getCart = async (req, res, next) => {
  try {
    const getcart = await Cart.findOne(req.params.id);
    res.status(200).json(getcart);
  } catch (error) {
    next(error);
  }
};

const getAllCart = async (req, res, next) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addCart,
  updateCart,
  deleteCart,
  getCart,
  getAllCart,
};
