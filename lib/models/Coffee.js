const pool = require('../utils/pool');

module.exports = class Coffee {
  id;
  name;
  flavor;
  roast;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.flavor = row.flavor;
    this.roast = row.roast;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM coffee;');
    return rows.map((row) => new Coffee(row));
  }
};
