import { getManyTimeline } from "@asad/app/admin/timeline/queries";
import { TimelineQuery } from "@asad/lib/types/timeline";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;
  const results = TimelineQuery.safeParse({
    pageIdx: params.get("pageIdx") ?? undefined,
    pageSize: params.get("pageSize") ?? undefined,
  });
  if (!results.success) {
    return NextResponse.json(
      { error: "Request validation error" },
      {
        status: 400,
      },
    );
  }

  const { pageIdx, pageSize } = results.data;
  const res = await getManyTimeline(pageIdx, pageSize);

  return NextResponse.json(res);
};
