import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const presidents = sqliteTable(
  "presidents",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    from: text("from").notNull(),
    to: text("to").notNull(),
    image: text("image"),
    accomplishments: text("accomplishments").notNull(),
  },
  (table) => ({ fromIdx: index("presidents_from_idx").on(table.from) }),
);

export type TInsertPresident = typeof presidents.$inferInsert;

export type TPresident = typeof presidents.$inferSelect;
