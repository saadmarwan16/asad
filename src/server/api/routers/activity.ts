import { createTRPCRouter, publicProcedure } from "@asad/server/api/trpc";
import { eq } from "drizzle-orm";
import { TRPCClientError } from "@trpc/client";
import { Timeline } from "@asad/lib/types/timeline";
import { timeline } from "@asad/server/db/schema/timeline";

export const activityRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(Timeline.pick({ id: true }))
    .query(async ({ ctx, input }) => {
      const res = await ctx.db
        .select()
        .from(timeline)
        .where(eq(timeline.id, input.id));
      if (res.length === 0) {
        throw new TRPCClientError("Timeline not found");
      }

      return {
        timeline: res[0]!,
      };
    }),
  getMany: publicProcedure.query(async ({ ctx }) => {
    return {
      timeline: await ctx.db.query.timeline.findMany({
        orderBy: (table, { desc }) => desc(table.date),
      }),
    };
  }),
  insert: publicProcedure
    .input(Timeline.omit({ id: true }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(timeline).values(input);

      return {
        message: "Timeline added successfully",
      };
    }),
  update: publicProcedure.input(Timeline).mutation(async ({ ctx, input }) => {
    const { id: id, ...payload } = input;
    await ctx.db.update(timeline).set(payload).where(eq(timeline.id, id));

    return {
      message: "Timeline updated successfully",
    };
  }),
  delete: publicProcedure
    .input(Timeline.pick({ id: true }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(timeline).where(eq(timeline.id, input.id));

      return {
        message: "Timeline removed successfully",
      };
    }),
});
