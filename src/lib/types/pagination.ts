import { z } from "zod";

export const PaginatedQuery = z.object({
  pageIdx: z.number({ coerce: true }).optional().default(0),
  pageSize: z.number({ coerce: true }).optional().default(1),
});
