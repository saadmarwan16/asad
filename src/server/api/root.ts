import { executiveRouter } from "@asad/server/api/routers/executive";
import { createTRPCRouter } from "@asad/server/api/trpc";
import { timelineRouter } from "./routers/timeline";
import { presidentRouter } from "./routers/president";
import { activityRouter } from "./routers/activity";

export const appRouter = createTRPCRouter({
  executive: executiveRouter,
  timeline: timelineRouter,
  president: presidentRouter,
  activity: activityRouter,
});

export type AppRouter = typeof appRouter;
