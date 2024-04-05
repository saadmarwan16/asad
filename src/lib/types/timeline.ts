import { z } from "zod";

export const Timeline = z.object({
  id: z.number({ required_error: "Id is required" }),
  date: z.date(),
  image: z.string().url("Invalid timeline image url"),
  description: z.string().min(40, "Description of timeline is too short"),
});