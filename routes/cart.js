const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.post('/addCart', cartController.addToCart);
router.get('/getCard/:userId', cartController.getCart);
router.delete('/deleteCart', cartController.deleteCartItem);
router.post('/quantity', cartController.decreaseCartItem);

module.exports = router;