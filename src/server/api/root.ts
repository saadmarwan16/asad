import { executiveRouter } from "@asad/server/api/routers/executive";
import { createTRPCRouter } from "@asad/server/api/trpc";

export const appRouter = createTRPCRouter({
  executive: executiveRouter,
});

export type AppRouter = typeof appRouter;
