import { postRouter } from "@asad/server/api/routers/post";
import { executiveRouter } from "@asad/server/api/routers/executive";
import { createTRPCRouter } from "@asad/server/api/trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  executive: executiveRouter,
});

export type AppRouter = typeof appRouter;
