const Order = require('../models/Order');

module.exports = {
  getUserOrders: async (req, res) => {
    const { userId } = req.params;
    try {
      const userOrders = await Order.find({ userId }).populate({
        path: "productId",
        select: "-description -product_location"
      }).exec();
      return res.status(200).json(userOrders);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}