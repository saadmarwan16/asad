import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const timeline = sqliteTable("timeline", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  date: integer("date", { mode: "timestamp" }).notNull(),
  image: text("image").notNull(),
  description: text("accomplishments").notNull(),
});

export type TInsertTimeline = typeof timeline.$inferInsert;

export type TTimeline = typeof timeline.$inferSelect;
