const { Router } = require('express');
const Campervan = require('../models/Campervan.js');

module.exports = Router()
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
