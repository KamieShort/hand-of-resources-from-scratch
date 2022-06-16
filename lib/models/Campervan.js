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

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM campervans WHERE id=$1', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Campervan(rows[0]);
  }
  static async insert({ make, model, builder }) {
    const { rows } = await pool.query(
      'INSERT INTO campervans(make, model, builder) VALUES ($1, $2, $3) RETURNING *',
      [make, model, builder]
    );

    return new Campervan(rows[0]);
  }
};
