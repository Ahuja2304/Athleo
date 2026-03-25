@echo off
echo Loading environment variables from .env...

for /f "tokens=1,2 delims== " %%a in (.env) do set "%%a=%%b"

echo Backing up schema for database: %ATHLEO_DB_NAME% on %ATHLEO_DB_HOST%:%ATHLEO_DB_PORT%
set PGPASSWORD=%ATHLEO_DB_PASSWORD%

pg_dump -U %ATHLEO_DB_USER% -h %ATHLEO_DB_HOST% -p %ATHLEO_DB_PORT% -d %ATHLEO_DB_NAME% --schema-only --no-owner -f db_schema_backup.sql

set PGPASSWORD=
echo Backup completed: db_schema_backup.sql
pause
