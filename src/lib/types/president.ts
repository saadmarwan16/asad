import { z } from "zod";

const refineYear = (data: string, ctx: z.RefinementCtx) => {
  if (data.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Year is required",
    });

    return false;
  }
  const val = parseInt(data);
  if (Number.isNaN(val)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Year must be a number",
    });

    return false;
  }

  if (val < 2015) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Year cannot be earlier than 2015",
    });

    return false;
  }

  if (val > new Date().getFullYear()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Year cannot be later than now",
    });

    return false;
  }

  return true;
};

export const newPresidentSchema = z
  .object({
    name: z.string().min(2, "Name must contain at least 2 characters"),
    from: z.string().superRefine(refineYear),
    to: z.string().superRefine(refineYear),
    //   from: z
    //     .date()
    //     .min(new Date(2015, 1, 1), "Year cannot be earlier than 2015")
    //     .optional(),
    //   to: z
    //     .date()
    //     .min(new Date(2015, 1, 1), "Year cannot be earlier than 2015")
    //     .max(new Date(), "Year cannot be later than now")
    //     .optional(),
    accomplishments: z
      .string()
      .min(120, "Description of president's accomplishments is too short"),
  })
  .superRefine(({ from, to }, ctx) => {
    if (!!from && !!to && to < from) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Year sworn out cannot be earlier than year sworn in",
        path: ["from"],
      });

      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Year sworn out cannot be earlier than year sworn in",
        path: ["to"],
      });

      return false;
    }

    return true;
  });

export const presidentSchema = z
  .object({
    id: z.number().min(1, "Invalid president id"),
    name: z.string().min(2, "Name must contain at least 2 characters"),
    from: z.string().superRefine(refineYear),
    to: z.string().superRefine(refineYear),
    image: z.string().url("Invalid president image url"),
    accomplishments: z
      .string()
      .min(120, "Description of president's accomplishments is too short"),
  })
  .refine(({ from, to }) => to >= from, {
    message: "Year sworn out cannot be earlier than year sworn in",
    path: ["to"],
  });

export type TNewPresident = z.infer<typeof newPresidentSchema>;

export type TPresident = z.infer<typeof presidentSchema>;
