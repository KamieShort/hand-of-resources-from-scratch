const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const addDog = await Dog.insert(req.body);
      res.json(addDog);
    } catch (e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const dogDetail = await Dog.getById(id);
      res.json(dogDetail);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const dogList = await Dog.getAll();
      res.json(dogList);
    } catch (e) {
      next(e);
    }
  });
