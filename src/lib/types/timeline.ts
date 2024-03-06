import { z } from "zod";

export const timelineFormSchema = z.object({
  date: z.date().nullable(),
  description: z.string().min(40, "Description of timeline is too short"),
});

export const timelineSchema = z.object({
  id: z.number({ required_error: "Id is required" }),
  date: z.date(),
  image: z.string().url("Invalid timeline image url"),
  description: z.string().min(40, "Description of timeline is too short"),
});

export type TTimelineForm = z.infer<typeof timelineFormSchema>;

export type TTimeline = z.infer<typeof timelineSchema>;
