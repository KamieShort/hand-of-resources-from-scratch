const { Router } = require('express');
const Campground = require('../models/Campground');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const campgroundDetail = await Campground.getById(id);
      res.json(campgroundDetail);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const campgroundList = await Campground.getAll();
      res.json(campgroundList);
    } catch (e) {
      next(e);
    }
  });
