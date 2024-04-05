import { createTRPCRouter, publicProcedure } from "@asad/server/api/trpc";
import { Executive } from "@asad/lib/types/executive";
import { executives } from "@asad/server/db/schema/executives";
import { eq } from "drizzle-orm";
import { TRPCClientError } from "@trpc/client";

export const presidentRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(Executive.pick({ id: true }))
    .query(async ({ ctx, input }) => {
      const res = await ctx.db
        .select()
        .from(executives)
        .where(eq(executives.id, input.id));
      if (res.length === 0) {
        throw new TRPCClientError("Executive not found");
      }

      return {
        executive: res[0]!,
      };
    }),
  getMany: publicProcedure.query(async ({ ctx }) => {
    return {
      executives: await ctx.db.query.executives.findMany(),
    };
  }),
  insert: publicProcedure
    .input(Executive.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(executives).values({
        ...input,
        roleId: 1,
      });

      return {
        message: "Executive added successfully",
      };
    }),
  update: publicProcedure.input(Executive).mutation(async ({ ctx, input }) => {
    const { id: id, ...payload } = input;
    await ctx.db.update(executives).set(payload).where(eq(executives.id, id));

    return {
      message: "Executive updated successfully",
    };
  }),
  delete: publicProcedure
    .input(Executive.pick({ id: true }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(executives).where(eq(executives.id, input.id));

      return {
        message: "Executive removed successfully",
      };
    }),
});
