const { Router } = require('express');
const Campervan = require('../models/Campervan.js');

module.exports = Router()
  .delete('/:id', async (req, res, next) => {
    try {
      const remove = await Campervan.delete(req.params.id);
      res.json(remove);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const addVan = await Campervan.insert(req.body);
      res.json(addVan);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const update = await Campervan.updateById(req.params.id, req.body);
      res.json(update);
    } catch (e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const campervanDetail = await Campervan.getById(id);
      res.json(campervanDetail);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const campervanList = await Campervan.getAll();
      res.json(campervanList);
    } catch (e) {
      next(e);
    }
  });
