import { getManyActivities } from "@asad/app/admin/activities/queries";
import { PaginatedQuery } from "@asad/lib/types/pagination";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;
  const results = PaginatedQuery.safeParse({
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
  const res = await getManyActivities(pageIdx, pageSize);

  return NextResponse.json(res);
};
