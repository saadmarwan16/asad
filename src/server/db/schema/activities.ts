import { genres } from "@asad/lib/data/admin/genres";
import { randomUUID } from "crypto";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const activities = sqliteTable("activities", {
  id: text("id").primaryKey().default(randomUUID()),
  name: text("name").notNull(),
  slogan: text("slogan").notNull(),
  images: text("images", { mode: "json" }).notNull().$type<string[]>(),
  genres: text("genres", { enum: genres })
    .notNull()
    .$type<(typeof genres)[number][]>(),
  date: integer("date", { mode: "timestamp" }),
  description: text("description").notNull(),
  location: text("location").notNull(),
  city: text("city").notNull(),
  sponsors: text("sponsors").notNull(),
});

export type TInsertActivity = typeof activities.$inferInsert;

export type TActivity = typeof activities.$inferSelect;
