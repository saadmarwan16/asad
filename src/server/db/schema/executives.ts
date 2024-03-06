import { roles } from "@asad/lib/data/admin/roles";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const executives = sqliteTable("executives", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  role: text("role", { enum: roles }).notNull(),
  image: text("image"),
  duties: text("duties").notNull(),
});

export type TInsertExecutive = typeof executives.$inferInsert;

export type TExecutive = typeof executives.$inferSelect;
