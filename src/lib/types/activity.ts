import { z } from "zod";

export const activitySchema = z.object({
  name: z.string().min(2, "Name must contain at least 2 characters"),
  slogan: z.string().min(8, "Slogan must contain at least 8 characters"),
  images: z.array(z.string().url()),
  genres: z.array(z.string()),
  date: z.date().nullable(),
  description: z
    .string()
    .min(40, "Description must contain at least 40 characters"),
  location: z.string().min(2, "Location must contain at least 2 characters"),
  city: z.string().min(2, "City must contain at least 2 characters"),
  sponsors: z.array(
    z.string().min(2, "Sponsor name must contain at least 2 characters"),
  ),
});

export type TActivity = z.infer<typeof activitySchema>;
