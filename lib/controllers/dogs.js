const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const dogList = await Dog.getAll();
    res.json(dogList);
  } catch (e) {
    next(e);
  }
});
