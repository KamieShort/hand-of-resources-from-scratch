const { Router } = require('express');
const Campground = require('../models/Campground');

module.exports = Router()
  .delete('/:id', async (req, res, next) => {
    try {
      const remove = await Campground.delete(req.params.id);
      res.json(remove);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const addCampground = await Campground.insert(req.body);
      res.json(addCampground);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const update = await Campground.updateById(req.params.id, req.body);
      res.json(update);
    } catch (e) {
      next(e);
    }
  })

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
