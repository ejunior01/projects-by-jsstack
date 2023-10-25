import { db } from '../../database/index.js';

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toLowerCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT contacts.*,categories.name as category_name FROM contacts
    LEFT JOIN categories
    ON contacts.category_id = categories.id
    ORDER BY contacts.name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
    SELECT contacts.*,categories.name as category_name
    FROM contacts
    LEFT JOIN categories
    ON contacts.category_id = categories.id
    WHERE contacts.id = $1`,
      [id],
    );
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query(
      'SELECT id,name,email,phone,category_id FROM contacts WHERE email = $1',
      [email],
    );
    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(
      `
    INSERT INTO contacts(name,email,phone,category_id)
    VALUES ($1,$2,$3,$4)
    RETURNING id,name,email,phone,category_id
    `,
      [name, email, phone, category_id],
    );

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(
      `
    UPDATE contacts SET name = $1,email = $2, phone = $3 , category_id =$4
    WHERE id = $5
    RETURNING id,name,email,phone,category_id`,
      [name, email, phone, category_id, id],
    );
    return row;
  }

  async delete(id) {
    await db.query('DELETE FROM contacts WHERE id = $1', [id]);
  }
}

export default new ContactsRepository();
