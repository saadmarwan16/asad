import { executiveRouter } from "@asad/server/api/routers/executive";
import { createTRPCRouter } from "@asad/server/api/trpc";
import { timelineRouter } from "./routers/timeline";

export const appRouter = createTRPCRouter({
  executive: executiveRouter,
  timeline: timelineRouter,
});

export type AppRouter = typeof appRouter;
