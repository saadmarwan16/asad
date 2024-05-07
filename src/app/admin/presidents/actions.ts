"use server";

import { db } from "@asad/server/db";
import { eq } from "drizzle-orm";
import {
  presidents,
  type TPresident,
  type TInsertPresident,
} from "@asad/server/db/schema/presidents";
import { revalidatePath, revalidateTag } from "next/cache";
import { Routes } from "@asad/lib/routes";

export const insertPresident = async (input: TInsertPresident) => {
  try {
    await db.insert(presidents).values(input);
  } catch (_) {
    return "Unexpected error";
  } finally {
    revalidateTag("presidents");
  }
};

export const updatePresident = async (input: TPresident) => {
  try {
    const { id: id, ...payload } = input;
    await db.update(presidents).set(payload).where(eq(presidents.id, id));
  } catch (e) {
    console.log(e);
    return "Unexpected error";
  } finally {
    revalidateTag("presidents");
    revalidatePath(Routes.ADMIN_PRESIDENT_DETAILS(input.id.toString()));
  }
};

export const removePresident = async (id: number) => {
  try {
    await db.delete(presidents).where(eq(presidents.id, id));
  } catch (_) {
    return "Unexpected error";
  } finally {
    revalidateTag("presidents");
  }
};
