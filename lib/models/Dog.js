const pool = require('../utils/pool');

module.exports = class Dog {
  id;
  name;
  breed;
  age;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.breed = row.breed;
    this.age = row.age;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name, breed, age FROM dogs;');
    return rows.map((row) => new Dog(row));
  }
};
