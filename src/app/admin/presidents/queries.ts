import { db } from "@asad/server/db";
import { eq } from "drizzle-orm";
import { presidents } from "@asad/server/db/schema/presidents";
import { unstable_cache } from "next/cache";

export const getManyPresidents = unstable_cache(
  async () => {
    return await db.query.presidents.findMany({
      orderBy: (table, { asc }) => asc(table.from),
    });
  },
  ["presidents"],
  {
    tags: ["presidents"],
  },
);

export const getOnePresident = unstable_cache(
  async (val: string) => {
    const id = parseInt(val);
    if (isNaN(id)) {
      throw new Error("Unexpected error");
    }

    const president = await db
      .select()
      .from(presidents)
      .where(eq(presidents.id, id));
    if (president.length === 0) {
      throw new Error("President not found");
    }

    return president[0];
  },
  ["president"],
);
