import db from '../../database/index';

class CategoriesRepository {
  static async findAll(orderBy = 'ASC') {
    const direction = orderBy.toLowerCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(
      `SELECT id,name FROM categories ORDER BY name ${direction}`,
    );
    return rows;
  }

  static async findById(id) {
    const [row] = await db.query(
      'SELECT id,name FROM categories WHERE id = $1',
      [id],
    );
    return row;
  }

  static async findByName(name) {
    const [row] = await db.query(
      'SELECT id,name FROM categories WHERE name = $1',
      [name],
    );
    return row;
  }

  static async create({ name }) {
    const [row] = await db.query(
      'INSERT INTO categories(name) VALUES ($1) RETURNING id,name',
      [name],
    );
    return row;
  }

  static async update(id, { name }) {
    const [row] = await db.query(
      'UPDATE categories SET name = $1 WHERE id = $2 RETURNING id,name',
      [name, id],
    );
    return row;
  }

  static async delete(id) {
    await db.query('DELETE FROM categories WHERE id = $1', [id]);
  }
}

export default new CategoriesRepository();
