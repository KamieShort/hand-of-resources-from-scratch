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

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM coffee WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Coffee(rows[0]);
  }

  static async insert({ name, flavor, roast }) {
    const { rows } = await pool.query(
      'INSERT INTO coffee(name, flavor, roast) VALUES ($1, $2, $3) RETURNING *',
      [name, flavor, roast]
    );

    return new Coffee(rows[0]);
  }
};
