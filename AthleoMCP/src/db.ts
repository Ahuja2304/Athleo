import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  host: process.env.ATHLEO_DB_HOST || 'localhost',
  port: parseInt(process.env.ATHLEO_DB_PORT || '5433'),
  database: process.env.ATHLEO_DB_NAME || 'athleo_db',
  user: process.env.ATHLEO_DB_USER || 'sparky',
  password: process.env.ATHLEO_DB_PASSWORD || 'password',
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
export const poolInstance = pool; // Exporting raw pool to allow manual close in tests

export const getClient = () => pool.connect();
