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
};
