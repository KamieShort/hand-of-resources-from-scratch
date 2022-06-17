const { Router } = require('express');
const Coffee = require('../models/Coffee');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const coffeeDetail = await Coffee.getById(id);
      res.json(coffeeDetail);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const coffeeList = await Coffee.getAll();
      res.json(coffeeList);
    } catch (e) {
      next(e);
    }
  });
