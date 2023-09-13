const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.post('/addCart', cartController.addToCart);
router.get('/:userId', cartController.getCart);
router.delete('/deleteCart/:cartItemId', cartController.deleteCartItem);
router.post('/quantity', cartController.decreaseCartItem);

module.exports = router;