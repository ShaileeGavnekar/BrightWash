const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Use a more secure key and store it safely

const verifyToken = (req, res, next) => {
  const token = req.cookies.token || (req.header('Authorization') && req.header('Authorization').replace('Bearer ', ''));

  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};

router.post('/createorder', verifyToken, async (req, res) => {
  const { shirt, jeans, sheets } = req.body;
  const userId = req.user.userId;

  // Define the cost of each item
  const shirtCost = 20.0;
  const jeansCost = 50.0;
  const sheetsCost = 30.0;

  // Calculate the total cost
  const totalCost = (shirt * shirtCost) + (jeans * jeansCost) + (sheets * sheetsCost);

  const newOrder = new Order({
    shirt,
    jeans,
    sheets,
    totalCost,
    userId,
  });

  try {
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error saving order' });
  }
});


router.get('/orders', verifyToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    const orders = await Order.find({ userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});
router.get('/getallmyorders', verifyToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    const orders = await Order.find({ userId }).sort({createdAt:-1});
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

module.exports = router;
