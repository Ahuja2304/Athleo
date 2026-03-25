const crypto = require('crypto');
const { log } = require('../config/logging');

function runPreflightChecks() {
  const mandatoryVars = {
    'ATHLEO_DB_HOST': 'Required for DB connection. Use "localhost" for local development, or "athleo-db" for Docker deployments.',
    'ATHLEO_DB_NAME': 'Required for database connection. Default is often "athleo_db".',
    'ATHLEO_DB_USER': 'Required for database connection. This is super user with default is often "sparky".',
    'ATHLEO_DB_PASSWORD': 'Required for database connection.',
    'ATHLEO_APP_DB_USER': 'Required for database connection. This is regular user without any admin access and default is often "sparkyapp".',
    'ATHLEO_APP_DB_PASSWORD': 'Required for database connection.',
    'ATHLEO_FRONTEND_URL': 'Required for CORS security. E.g. https://athleo.domain.com  or http://localhost:8080 for development.',
    'ATHLEO_API_ENCRYPTION_KEY': 'Must be persistent to decrypt database data. Generate with: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'hex\'))"'
  };

  const missingMandatory = Object.keys(mandatoryVars).filter(varName => !process.env[varName]);

  if (missingMandatory.length > 0) {
    console.error('\x1b[31m%s\x1b[0m', 'FATAL: Missing required environment variables!');
    console.error('The server cannot start without the following settings:\n');

    missingMandatory.forEach(varName => {
      console.error(`\x1b[33m${varName}\x1b[0m: ${mandatoryVars[varName]}`);
    });

    console.error('\nUpdate your .env file and restart the server.\n');
    log('error', `FATAL: Missing mandatory env vars: ${missingMandatory.join(', ')}`);
    process.exit(1);
  }

  // Handle BETTER_AUTH_SECRET as a soft requirement
  if (!process.env.BETTER_AUTH_SECRET) {
    const generatedSecret = crypto.randomBytes(32).toString('hex');
    process.env.BETTER_AUTH_SECRET = generatedSecret;

    console.warn('\x1b[33m%s\x1b[0m', 'WARNING: BETTER_AUTH_SECRET is not set!');
    console.warn('A temporary secret has been generated to allow the server to start.');
    console.warn('IMPORTANT: Please set BETTER_AUTH_SECRET in your .env file to ensure user sessions remain valid across server restarts.');
    console.warn('------------------------------------------------------------------\n');

    log('warn', 'BETTER_AUTH_SECRET was missing and auto-generated.');
  }

  log('info', 'Environment variable pre-flight checks passed successfully.');
}

module.exports = {
  runPreflightChecks,
};
