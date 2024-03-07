import { z } from "zod";
import { roles } from "../data/admin/roles";

export const Executive = z.object({
  id: z.number({ required_error: "Id is required" }),
  name: z.string().min(2, "Name must contain at least 2 characters"),
  role: z.enum(roles),
  image: z.string().url("Invalid executive image url").nullable(),
  duties: z
    .string()
    .min(120, "Description of executive member's duties must contain at least 120 characters"),
});