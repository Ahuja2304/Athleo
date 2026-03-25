#!/bin/bash

echo "Loading environment variables from .env..."

# Check if .env file exists
if [ -f .env ]; then
  # Load environment variables from .env file
  while IFS='=' read -r key value; do
    # Skip empty lines and comments
    if [[ ! -z "$key" && ! "$key" =~ ^# ]]; then
      # Remove leading/trailing whitespace from key and value
      key=$(echo "$key" | xargs)
      value=$(echo "$value" | xargs)
      export "$key"="$value"
    fi
  done < .env
else
  echo "Error: .env file not found!"
  exit 1
fi

echo "Backing up schema for database: $ATHLEO_DB_NAME on $ATHLEO_DB_HOST:$ATHLEO_DB_PORT"

# Set PGPASSWORD for pg_dump
export PGPASSWORD=$ATHLEO_DB_PASSWORD

# Execute pg_dump
/opt/homebrew/opt/postgresql@15/bin/pg_dump -U $ATHLEO_DB_USER -h $ATHLEO_DB_HOST -p $ATHLEO_DB_PORT -d $ATHLEO_DB_NAME --schema-only --no-owner -f db_schema_backup.sql

# Unset PGPASSWORD for security
unset PGPASSWORD

echo "Backup completed: db_schema_backup.sql"
