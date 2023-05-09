import {
  datetime,
  mysqlTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/mysql-core";

export const presses = mysqlTable("presses", {
  id: serial("id").primaryKey(),
  pressedAt: timestamp("pressedAt").notNull().defaultNow(),
});
