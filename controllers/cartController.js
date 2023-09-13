const Product = require('../models/Products');
const Cart = require('../models/Cart');

module.exports = {
  addToCart: async (req, res) => {
    const { cartItem, userId, quantity } = req.body;
    try {
      const cart = await Cart.findOne({ userId });
      if (cart) {
        const existingProduct = cart.products.find(
          (product) => product.cartItem.toString() === cartItem);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.products({ cartItem, quantity });
        }
        await cart.save();
        return res.status(200).json({ message: 'Product added to cart' });
      } else {
        const newCart = new Cart({
          userId,
          products: [{
            cartItem,
            quantity
          }]
        });
        await newCart.save();
        return res.status(200).json({ message: 'Product added to cart' });
      }
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  getCart: async (req, res) => {
    const { userId } = req.params
    try {
      const cart = await Cart.find({ userId }).populate('products.cartItem', '_id title supplier price imageUrl');
      return res.status(200).json(cart);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  deleteCartItem: async (req, res) => {
    const { cartItemId } = req.body;
    try {
      const updatedCart = await Cart.findOneAndUpdate(
        { 'products.id': cartItemId },
        { $pull: { products: { _id: cartItemId } }, },
        { new: true }
      );
      if (!updatedCart) {
        return res.status(401).json({ message: 'Cart not found' });
      }
      return res.status(200).json(updatedCart);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  decreaseCartItem: async (req, res) => {
    const { userId, cartItem } = req.body;
    try {
      const cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(401).json({ message: 'Cart not found' });
      }
      const existingProduct = cart.products.find(
        (product) => product.cartItem.toString() === cartItem
      );
      if (!existingProduct) {
        return res.status(200).json({ message: 'Product not found' });
      }
      if (existingProduct.quantity === 1) {
        cart.products = cart.products.filter(
          (product) => product.cartItem.toString() !== cartItem
        )
      } else {
        existingProduct.quantity -= 1;
      }
      await cart.save();
      if (existingProduct.quantity === 0) {
        await Cart.updateOne(
          { userId },
          { $pull: { products: { cartItem } } }
        )
      }
      return res.status(200).json({ message: "Product updated" })
    } catch (e) {
      return res.status(500).json(e);
    }
  },
}