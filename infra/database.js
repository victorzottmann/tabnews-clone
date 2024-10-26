import { Client } from "pg";

const query = async (queryObject) => {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  let result;

  try {
    await client.connect();
    try {
      result = await client.query(queryObject);
    } catch (error) {
      console.error("Database query error:", error);
    }
  } catch (error) {
    console.error("Database connection error:", error);
  } finally {
    await client.end();
  }

  return result;
};

export default {
  query,
};
