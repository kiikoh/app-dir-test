import { drizzle } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";

const { DB_URL } = process.env;

const client = new Client({
  fetch,
  url: DB_URL,
});

const connection = client.connection();
export const db = drizzle(connection);
