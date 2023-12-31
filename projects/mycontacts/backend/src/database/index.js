import pg from 'pg';

const { Client } = pg;

const client = new Client({
  host: 'localhost',
  port: '5432',
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

const db = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};

export default db;
