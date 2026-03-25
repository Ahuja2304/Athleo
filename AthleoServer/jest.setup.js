// Load environment variables from root .env file
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

// Test environment configuration
process.env.NODE_ENV = 'test';

// Mock environment variables to prevent loading real .env file
process.env.ATHLEO_DB_USER = 'test_user';
process.env.ATHLEO_DB_HOST = 'localhost';
process.env.ATHLEO_DB_NAME = 'test_db';
process.env.ATHLEO_DB_PASSWORD = 'test_password';
process.env.ATHLEO_DB_PORT = '5432';
process.env.ATHLEO_APP_DB_USER = 'test_app_user';
process.env.ATHLEO_APP_DB_PASSWORD = 'test_app_password';
process.env.ENCRYPTION_KEY = 'test-encryption-key';

// Global test timeout
jest.setTimeout(10000);
