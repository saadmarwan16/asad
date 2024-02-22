import { z } from "zod";

export const timelineFormSchema = z.object({
  date: z.date().nullable(),
  description: z.string().min(40, "Description of timeline is too short"),
});

export const timelineSchema = z.object({
  id: z.number().min(1, "Invalid timeline id"),
  date: z.date().nullable(),
  image: z.string().url("Invalid timeline image url"),
  description: z.string().min(40, "Description of timeline is too short"),
});

export type TTimelineForm = z.infer<typeof timelineFormSchema>;

export type TTimeline = z.infer<typeof timelineSchema>;
