import { getManyTimeline } from "@asad/app/admin/timeline/queries";
import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await getManyTimeline();

  return NextResponse.json(res);
};
