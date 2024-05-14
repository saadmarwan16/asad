import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const timeline = sqliteTable(
  "timeline",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    date: integer("date", { mode: "timestamp" }).notNull(),
    image: text("image").notNull(),
    description: text("accomplishments").notNull(),
  },
  (table) => ({ dateIdx: index("timeline_date_idx").on(table.date) }),
);

export type TInsertTimeline = typeof timeline.$inferInsert;

export type TTimeline = typeof timeline.$inferSelect;
