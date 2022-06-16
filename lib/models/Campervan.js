const pool = require('../utils/pool');

module.exports = class Campervan {
  id;
  make;
  model;
  builder;

  constructor(row) {
    this.id = row.id;
    this.make = row.make;
    this.model = row.model;
    this.builder = row.builder;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, make FROM campervans;');
    return rows.map((row) => new Campervan(row));
  }
};
