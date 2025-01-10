const express = require('express');
const { home, about, product, contact } = require('../controllers/homeController');
const router = express.Router();

router.get('/', home);
router.get('/about', about);
router.get('/product', product);
router.get('/contact', contact);
module.exports = router;
