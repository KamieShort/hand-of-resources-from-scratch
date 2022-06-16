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
    const { rows } = await pool.query('SELECT id, name FROM dogs;');
    return rows.map((row) => new Dog(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM dogs WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Dog(rows[0]);
  }

  static async insert({ name, breed, age }) {
    const { rows } = await pool.query(
      'INSERT INTO dogs(name, breed, age) VALUES ($1, $2, $3) RETURNING *',
      [name, breed, age]
    );

    return new Dog(rows[0]);
  }

  static async updateById(id, attrs) {
    const dog = await Dog.getById(id);
    const { name, breed, age } = { ...dog, ...attrs };
    const { rows } = await pool.query(
      `UPDATE dogs
        SET name=$2, breed=$3, age=$4
        WHERE id=$1 RETURNING *`,
      [id, name, breed, age]
    );
    return new Dog(rows[0]);
  }
};
