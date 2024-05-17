"use server";

import { Routes } from "@asad/lib/routes";
import { db } from "@asad/server/db";
import {
  timeline,
  type TTimeline,
  type TInsertTimeline,
} from "@asad/server/db/schema/timeline";
import { eq } from "drizzle-orm";
import { revalidatePath, revalidateTag } from "next/cache";

export const addTimeline = async (data: TInsertTimeline) => {
  try {
    await db.insert(timeline).values(data);
  } catch (e) {
    return "Unexpected error";
  } finally {
    revalidateTag("timelines");
  }
};

export const updateTimelne = async (data: TTimeline) => {
  try {
    const { id: id, ...payload } = data;
    await db.update(timeline).set(payload).where(eq(timeline.id, id));
  } catch (e) {
    return "Unexpected error";
  } finally {
    revalidateTag("timelines");
    revalidatePath(Routes.ADMIN_TIMELINE_DETAILS(data.id.toString()));
  }
};

export const removeTimeline = async (id: number) => {
  try {
    await db.delete(timeline).where(eq(timeline.id, id));
  } catch (e) {
    return "Unexpected error";
  } finally {
    revalidateTag("timelines");
  }
};
