const pool = require('../utils/pool');

module.exports = class Campground {
  id;
  name;
  location;
  features;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.location = row.location;
    this.features = row.features;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM campgrounds;');
    return rows.map((row) => new Campground(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM campgrounds WHERE id=$1', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Campground(rows[0]);
  }

  static async insert({ name, location, features }) {
    const { rows } = await pool.query(
      'INSERT INTO campgrounds(name, location, features) VALUES ($1, $2, $3) RETURNING *',
      [name, location, features]
    );

    return new Campground(rows[0]);
  }
};
