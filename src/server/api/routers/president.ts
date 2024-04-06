import { createTRPCRouter, publicProcedure } from "@asad/server/api/trpc";
import { Executive } from "@asad/lib/types/executive";
import { eq } from "drizzle-orm";
import { TRPCClientError } from "@trpc/client";
import { presidents } from "@asad/server/db/schema/presidents";
import { NewPresident, President } from "@asad/lib/types/president";

export const presidentRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(Executive.pick({ id: true }))
    .query(async ({ ctx, input }) => {
      const res = await ctx.db
        .select()
        .from(presidents)
        .where(eq(presidents.id, input.id));
      if (res.length === 0) {
        throw new TRPCClientError("President not found");
      }

      return {
        president: res[0]!,
      };
    }),
  getMany: publicProcedure.query(async ({ ctx }) => {
    return {
      presidents: await ctx.db.query.presidents.findMany({
        orderBy: (table, { asc }) => asc(table.from),
      }),
    };
  }),
  insert: publicProcedure
    .input(NewPresident)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(presidents).values(input);

      return {
        message: "President added successfully",
      };
    }),
  update: publicProcedure.input(President).mutation(async ({ ctx, input }) => {
    const { id: id, ...payload } = input;
    await ctx.db.update(presidents).set(payload).where(eq(presidents.id, id));

    return {
      message: "President updated successfully",
    };
  }),
  delete: publicProcedure
    .input(Executive.pick({ id: true }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(presidents).where(eq(presidents.id, input.id));

      return {
        message: "President removed successfully",
      };
    }),
});
