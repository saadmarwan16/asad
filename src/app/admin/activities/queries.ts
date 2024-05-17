import { db } from "@asad/server/db";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

export const getManyActivities = unstable_cache(
  async (
    pageIdx: number | undefined = 0,
    pageSize: number | undefined = 12,
  ) => {
    const activities = await db.query.activities.findMany({
      orderBy: (table, { desc }) => desc(table.date),
      limit: pageSize,
      offset: pageIdx * pageSize,
    });

    return activities;
  },
  ["activities"],
  {
    tags: ["activities"],
  },
);

export const getOneActivity = unstable_cache(
  async (id: string) => {
    const activity = await db.query.activities.findFirst({
      where: (fields, { eq }) => eq(fields.id, id),
    });
    if (!activity) {
      notFound();
    }

    return activity;
  },
  ["activity"],
);
