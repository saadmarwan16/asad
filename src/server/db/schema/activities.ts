import { type genres } from "@asad/lib/data/admin/genres";
import { randomUUID } from "crypto";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const activities = sqliteTable(
  "activities",
  {
    id: text("id").primaryKey().default(randomUUID()),
    name: text("name").notNull(),
    images: text("images", { mode: "json" }).notNull().$type<string[]>(),
    genres: text("genres", { mode: 'json' })
      .notNull()
      .$type<(typeof genres)[number][]>(),
    date: integer("date", { mode: "timestamp" }),
    description: text("description").notNull(),
    location: text("location").notNull(),
    city: text("city").notNull(),
    sponsors: text("sponsors", { mode: "json" }).notNull().$type<string[]>(),
  },
  (table) => ({ dateIdx: index("activities_date_idx").on(table.date) }),
);

export type TInsertActivity = typeof activities.$inferInsert;

export type TActivity = typeof activities.$inferSelect;
