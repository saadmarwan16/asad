import { db } from "@asad/server/db";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

export const getManyTimeline = unstable_cache(
  async (pageIdx: number | undefined = 0, pageSize: number | undefined = 12) => {
    const timelines = await db.query.timeline.findMany({
      orderBy: (table, { desc }) => desc(table.date),
      limit: pageSize,
      offset: pageIdx * pageSize,
    });

    return timelines;
  },
  ["timelines"],
  {
    tags: ["timelines"],
  },
);

export const getOneTimeline = unstable_cache(
  async (val: string) => {
    const id = parseInt(val);
    if (isNaN(id)) {
      throw new Error("Invalid id");
    }

    const timeline = await db.query.timeline.findFirst({
      where: (fields, { eq }) => eq(fields.id, id),
    });
    if (!timeline) {
      notFound();
    }

    return timeline;
  },
  ["timeline"],
);
