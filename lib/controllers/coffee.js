const { Router } = require('express');
const Coffee = require('../models/Coffee');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const coffeeList = await Coffee.getAll();
    res.json(coffeeList);
  } catch (e) {
    next(e);
  }
});
