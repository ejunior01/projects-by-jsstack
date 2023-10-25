import { db } from '../../database/index.js';

class CategoriesRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toLowerCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(
      `SELECT id,name FROM categories ORDER BY name ${direction}`,
    );
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      'SELECT id,name FROM categories WHERE id = $1',
      [id],
    );
    return row;
  }

  async findByName(name) {
    const [row] = await db.query(
      'SELECT id,name FROM categories WHERE name = $1',
      [name],
    );
    return row;
  }

  async create({ name }) {
    const [row] = await db.query(
      'INSERT INTO categories(name) VALUES ($1) RETURNING id,name',
      [name],
    );
    return row;
  }

  async update(id, { name }) {
    const [row] = await db.query(
      'UPDATE categories SET name = $1 WHERE id = $2 RETURNING id,name',
      [name, id],
    );
    return row;
  }

  async delete(id) {
    await db.query('DELETE FROM categories WHERE id = $1', [id]);
  }
}

export default new CategoriesRepository();
