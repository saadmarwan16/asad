import { z } from "zod";

export const Timeline = z.object({
  id: z.number({ required_error: "Id is required" }),
  date: z.date({ required_error: "Date is required" }),
  image: z
    .string({ required_error: "Image is required" })
    .url("Invalid timeline image url"),
  description: z.string().min(40, "Description of timeline is too short"),
});

export const TimelineQuery = z.object({
  pageIdx: z.number({ coerce: true }).optional().default(0),
  pageSize: z.number({ coerce: true }).optional().default(1),
});
