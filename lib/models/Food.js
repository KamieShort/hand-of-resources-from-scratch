const pool = require('../utils/pool');

module.exports = class Food {
  id;
  name;
  type;
  ingredients;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.ingredients = row.ingredients;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM food;');
    return rows.map((row) => new Food(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM food WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Food(rows[0]);
  }
};
