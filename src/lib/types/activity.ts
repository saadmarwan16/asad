import { z } from "zod";

export const newActivitySchema = z.object({
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
  sponsors: z
    .string()
    .min(2, "Sponsor name must contain at least 2 characters"),
});

export const activitySchema = z.object({
  id: z.string().uuid(),
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
  sponsors: z
    .string()
    .min(2, "Sponsor name must contain at least 2 characters"),
});

export type TNewActivity = z.infer<typeof newActivitySchema>;

export type TActivity = z.infer<typeof activitySchema>;
