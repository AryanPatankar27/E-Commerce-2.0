const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartcontrollers');

// Add to cart
router.post('/cart', cartController.addToCart);

// View cart
router.get('/cart/:userId', cartController.viewCart);

// Remove from cart
router.delete('/cart', cartController.removeFromCart);

module.exports = router;