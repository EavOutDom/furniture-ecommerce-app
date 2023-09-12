const products = require('../models/products');
const Product = require('../models/products');

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json('product created successfully');
    } catch (err) {
      res.status(500).json('failed to create to product');
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json('failed to get the products');
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json('failed to get the product');
    }
  },
  searchProduct: async (req, res) => {
    try {
      const result = await products.aggregate(
        [
          {
            $search: {
              index: "furniture",
              text: {
                query: req.params.key,
                path: {
                  wildcard: "*"
                }
              }
            }
          }
        ]
      )
      res.status(200).json(result)
    } catch (e) {
      res.status(500).json('failed to get the products');
    }
  }
}