import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@asad/server/api/trpc";
import { Executive } from "@asad/lib/types/executive";
import { executives } from "@asad/server/db/schema/executives";

export const executiveRouter = createTRPCRouter({
  insert: publicProcedure
    .input(Executive.omit({ id: true, image: true }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(executives).values(input);

      return {
        message: "Executive inserted successfully",
      };
    }),
});
