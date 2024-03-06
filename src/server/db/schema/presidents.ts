import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const presidents = sqliteTable("presidents", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  from: text("from").notNull(),
  to: text("to").notNull(),
  image: text("image"),
  accomplishments: text("accomplishments").notNull(),
});

export type TInsertPresident = typeof presidents.$inferInsert;

export type TPresident = typeof presidents.$inferSelect;
