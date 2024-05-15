"use server";

import { roles } from "@asad/lib/data/admin/roles";
import { Routes } from "@asad/lib/routes";
import { db } from "@asad/server/db";
import {
  executives,
  type TInsertExecutive,
  type TExecutive,
} from "@asad/server/db/schema/executives";
import { eq } from "drizzle-orm";
import { revalidatePath, revalidateTag } from "next/cache";

export const addExecutive = async (data: TInsertExecutive) => {
  try {
    const index = roles.indexOf(data.role);
    await db.insert(executives).values({
      ...data,
      roleId: index,
    });
  } catch (e) {
    return "Unexpected error";
  } finally {
    revalidateTag("executives");
  }
};

export const updateExecutive = async (data: TExecutive) => {
  try {
    const { id, ...payload } = data;
    const index = roles.indexOf(payload.role);
    await db
      .update(executives)
      .set({ ...payload, roleId: index })
      .where(eq(executives.id, id));
  } catch (e) {
    return "Unexpected error";
  } finally {
    revalidateTag("executives");
    revalidatePath(Routes.ADMIN_EXECUTIVE_DETAILS(data.id.toString()));
  }
};

export const removeExecutive = async (id: number) => {
  try {
    await db.delete(executives).where(eq(executives.id, id));
  } catch (e) {
    return "Unexpected error";
  } finally {
    revalidateTag("executives");
  }
};
