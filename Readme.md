node --watch --env-file=.env src/index.js is a command used to run a Node.js application with two special options:

1. node
   Runs Node.js.

2. --watch
   Automatically restarts the program when files change.
   Similar to nodemon
   Available starting from Node.js v18.11+
   Useful during development

3. --env-file=.env
   Loads environment variables from the specified file (here, .env) without needing dotenv.
   Example .env:
   PORT=3000
   DB_URL=mongodb://localhost/test

Node will read these and set process.env.PORT, etc.

This flag was added in Node.js v20+.

4. src/index.js
   This is the script being executed.

///////////////////////////////////////////////////////////////////////////////////
🆚 prisma migrate dev vs prisma db push
✔️ 1. npx prisma migrate dev (SAFE)

Creates migration files + applies them to DB

Generates SQL migration files (versioned)

Runs them on the database

Tracks everything in \_prisma_migrations

Safe for production

Helps CI/CD, teams, history, rollback

🔒 This is the correct way to evolve a real database.

⚠️ 2. npx prisma db push (DANGEROUS)

Immediately updates the database with NO migration files

No SQL migration history

No versioning

No tracking

May change tables silently

May drop columns or recreate tables

Should never be used in production

🚧 Only use for prototypes or throwaway testing.

npx prisma migrate dev --name add_new_tables
🔍 Why do we need --name?

Every migration needs a human-readable name so you can track what changed.

Examples:

--name init

--name add_roles_table

--name add_new_tables

--name alter_employee_table

--name fix_foreign_keys

This name will appear in the folder:

prisma/migrations/202501011230_add_new_tables/

Inside that folder, Prisma will generate the SQL needed to create your new tables.

🧠 Simple Explanation

npx prisma migrate dev → create migration

--name some_name → give it a label

It’s like committing to Git:

git commit -m "add new tables for HR system"

Here, add_new_tables = your migration message.

////////////////////////////////////////////////////////////////////////////////////////////////////

1. # **Setting Up the Migrations Folder**

First, we’ll create a `migrations` folder inside our `src` directory. Inside this folder, we’ll create two migration files:

- `20250404_create_users_table.js`
- `20250404_create_reminders_table.js`

This naming convention follows a pattern often used by migration tools, where the timestamp ensures migrations run in the correct order.

If we were using a tool, these files would be generated automatically.

2. 🔥 That’s it — the table is rolled back (dropped) safely.

Prisma will not touch unrelated tables.
📌 EXAMPLE

If you want to rollback two tables (remove them):

// Remove these from schema.prisma
model hrms_m_module { ... }
model hrms_d_appraisal { ... }

Then:

npx prisma migrate dev --name rollback_specific_tables

Migration SQL will contain:

DROP TABLE hrms_m_module;
DROP TABLE hrms_d_appraisal;
/////////////////////////////////////////////////////////////////////////////////////////////////////
