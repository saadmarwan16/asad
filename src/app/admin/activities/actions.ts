"use server";

import { Routes } from "@asad/lib/routes";
import { db } from "@asad/server/db";
import {
  activities,
  type TActivity,
  type TInsertActivity,
} from "@asad/server/db/schema/activities";
import { eq } from "drizzle-orm";
import { revalidatePath, revalidateTag } from "next/cache";

export const addActivity = async (data: TInsertActivity) => {
  try {
    const genres = new Set(data.genres);
    genres.delete("Select a genre");
    const sponsors = [...new Set(data.sponsors)];
    const res = {
      ...data,
      genres: [...genres],
      sponsors,
    };
    await db.insert(activities).values(res);
  } catch (e) {
    console.log(e)
    return "Unexpected error";
  } finally {
    revalidateTag("activities");
  }
};

export const updateActivity = async (data: TActivity) => {
  try {
    const { id, ...payload } = data;
    await db.update(activities).set(payload).where(eq(activities.id, id));
  } catch (e) {
    return "Unexpected error";
  } finally {
    revalidateTag("activities");
    revalidatePath(Routes.ADMIN_ACTIVITY_DETAILS(data.id.toString()));
  }
};

export const removeActivity = async (id: string) => {
  try {
    await db.delete(activities).where(eq(activities.id, id));
  } catch (e) {
    return "Unexpected error";
  } finally {
    revalidateTag("activities");
  }
};
