import pg from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // REQUIRED for Neon
  },
});

// Optional sanity log
pool.on("connect", () => {
  console.log("✅ Connected to Neon PostgreSQL");
});

export default pool;
