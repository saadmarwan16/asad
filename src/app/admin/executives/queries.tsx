import { db } from "@asad/server/db";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

export const getManyExecutives = unstable_cache(
  async () => {
    return db.query.executives.findMany({
      orderBy: (table, { asc }) => asc(table.roleId),
    });
  },
  ["executives"],
  {
    tags: ["executives"],
  },
);

export const getOneExecutive = unstable_cache(
  async (val: string) => {
    const id = parseInt(val);
    if (isNaN(id)) {
      throw new Error("Invalid id");
    }

    const executive = await db.query.executives.findFirst({
      where: (fields, { eq }) => eq(fields.id, id),
    });
    if (!executive) {
      notFound();
    }

    return executive;
  },
  ["executive"],
);
