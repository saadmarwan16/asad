import { roles } from "@asad/lib/data/admin/roles";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const executives = sqliteTable("executives", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  role: text("role", { enum: roles }).notNull(),
  image: text("image"),
  accomplishments: text("accomplishments").notNull(),
});

export type TInsertExecutive = typeof executives.$inferInsert;

export type TExecutive = typeof executives.$inferSelect;
