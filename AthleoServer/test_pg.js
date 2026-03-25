const { Pool } = require("pg");
const pool = new Pool({
  user: "sparky", host: "localhost", database: "athleo_db", password: "sparky_dev_pass", port: 5432
});
async function run() {
  try {
    const res = await pool.query(`insert into "user" ("id", "name", "email", "email_verified", "image", "created_at", "updated_at", "two_factor_enabled", "banned", "ban_reason", "ban_expires", "mfa_totp_enabled", "mfa_email_enabled", "role") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning *`, ['yOS929jV59cEEx618xM7t085O9bofp3A', 'Test', 'test4@example.com', false, null, new Date(), new Date(), false, false, null, null, false, false, 'user']);
    console.log("Success", res.rows);
  } catch (e) {
    console.error("Error", e.code, e.message);
  }
  process.exit(0);
}
run();
