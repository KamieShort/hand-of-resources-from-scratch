const { Router } = require('express');
const Campervan = require('../models/Campervan.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const campervanList = await Campervan.getAll();
    res.json(campervanList);
  } catch (e) {
    next(e);
  }
});
