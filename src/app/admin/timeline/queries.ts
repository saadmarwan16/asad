import { db } from "@asad/server/db";
import { timeline } from "@asad/server/db/schema/timeline";
import { eq } from "drizzle-orm";
import { unstable_cache } from "next/cache";

export const getManyTimeline = unstable_cache(
  async () => {
    const timeline = await db.query.timeline.findMany({
      orderBy: (table, { desc }) => desc(table.date),
      limit: 1,
      offset: 0
    });

    return timeline;
  },
  ["timeline"],
  {
    tags: ["timeline"],
  },
);

export const getOneTimeline = unstable_cache(async (val: string) => {
  const id = parseInt(val);
  if (isNaN(id)) {
    throw new Error("Invalid id");
  }

  const res = await db.select().from(timeline).where(eq(timeline.id, id));
  if (res.length === 0) {
    throw new Error("Timeline not found");
  }

  return res[0];
});
