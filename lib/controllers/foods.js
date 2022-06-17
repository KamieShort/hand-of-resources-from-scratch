const { Router } = require('express');
const Food = require('../models/Food');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const foodList = await Food.getAll();
    res.json(foodList);
  } catch (e) {
    next(e);
  }
});
