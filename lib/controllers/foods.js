const { Router } = require('express');
const Food = require('../models/Food');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const addFood = await Food.insert(req.body);
      res.json(addFood);
    } catch (e) {
      next(e);
    }
  })

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
