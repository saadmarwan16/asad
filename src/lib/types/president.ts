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

export const NewPresident = z
  .object({
    name: z.string().min(2, "Name must contain at least 2 characters"),
    from: z.string().superRefine(refineYear),
    to: z.string().superRefine(refineYear),
    image: z.string().url("Invalid president image url").nullable(),
    accomplishments: z
      .string()
      .min(
        120,
        "Description of president's accomplishments must contain at least 120 characters",
      ),
  })
  .refine(({ from, to }) => to >= from, {
    message: "Year sworn out cannot be earlier than year sworn in",
    path: ["to"],
  });

export const President = z
  .object({
    id: z.number({ required_error: "Id is required" }),
    name: z.string().min(2, "Name must contain at least 2 characters"),
    from: z.string().superRefine(refineYear),
    to: z.string().superRefine(refineYear),
    image: z.string().url("Invalid president image url").nullable(),
    accomplishments: z
      .string()
      .min(
        120,
        "Description of president's accomplishments must contain at least 120 characters",
      ),
  })
  .refine(({ from, to }) => to >= from, {
    message: "Year sworn out cannot be earlier than year sworn in",
    path: ["to"],
  });
