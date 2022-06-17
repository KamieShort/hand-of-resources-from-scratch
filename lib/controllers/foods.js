const { Router } = require('express');
const Food = require('../models/Food');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const foodDetail = await Food.getById(id);
      res.json(foodDetail);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const foodList = await Food.getAll();
      res.json(foodList);
    } catch (e) {
      next(e);
    }
  });
