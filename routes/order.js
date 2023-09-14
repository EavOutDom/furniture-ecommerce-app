const router = require('express').Router();
const ordersController = require('../controllers/ordersController');

router.get('/:userId', ordersController.getUserOrders);

module.exports = router;