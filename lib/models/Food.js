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

  static async insert({ name, type, ingredients }) {
    const { rows } = await pool.query(
      'INSERT INTO food(name, type, ingredients) VALUES ($1, $2, $3) RETURNING *',
      [name, type, ingredients]
    );

    return new Food(rows[0]);
  }

  static async updateById(id, attrs) {
    const food = await Food.getById(id);
    const { name, type, ingredients } = { ...food, ...attrs };
    const { rows } = await pool.query(
      `UPDATE food
        SET name=$2, type=$3, ingredients=$4
        WHERE id=$1 RETURNING *`,
      [id, name, type, ingredients]
    );
    return new Food(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM food WHERE id = $1 RETURNING *',
      [id]
    );
    return new Food(rows[0]);
  }
};
