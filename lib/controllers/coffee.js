const { Router } = require('express');
const Coffee = require('../models/Coffee');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const addCoffee = await Coffee.insert(req.body);
      res.json(addCoffee);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const update = await Coffee.updateById(req.params.id, req.body);
      res.json(update);
    } catch (e) {
      next(e);
    }
  })

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
