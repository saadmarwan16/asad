import { db } from "@asad/server/db";
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
