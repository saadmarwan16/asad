import { db } from "@asad/server/db";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

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

    const president = await db.query.presidents.findFirst({
      where: (fields, { eq }) => eq(fields.id, id),
    });
    if (!president) {
      notFound();
    }

    return president;
  },
  ["president"],
);
