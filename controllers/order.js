const Order = require("../models/order");

const addOrder = async (req, res, next) => {
  const order = new Order(req.body);
  try {
    const savedorder = await order.save();
    res.status(200).json(savedorder);
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const updatecart = await Order.findByIdAndUpdate(
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

const deleteOrder = async (req, res, next) => {
  try {
    const deleteorder = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteorder);
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res, next) => {
  try {
    const getorder = await Order.find(req.params.id);
    res.status(200).json(getorder);
  } catch (error) {
    next(error);
  }
};

const getAllOrder = async (req, res, next) => {
  try {
    const order = await Order.find();
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get monthly income

const getmonthlyIncome = async (req, res, next) => {
  const date = new Date();
  const lastMonth = new Date(date.getMonth() - 1);
  const previousMonth = new Date(
    new Date().setMonth(new Date().getMonth() - 1)
  );
  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
        $group: {
          id: "$month",
          total: { $sum: "$sales" },
          month: { $month: "$createdAt" },
        },
        },
      res.status(300).json(income)
    ]);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  getAllOrder,
};
