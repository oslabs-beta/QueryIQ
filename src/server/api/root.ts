import { createTRPCRouter } from "~/server/api/trpc";
import userRouter from "~/server/api/routers/user";
import pgRouter from "~/server/api/routers/pg";
import mysqlRouter from "~/server/api/routers/mysql";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  pg: pgRouter,
  mysql: mysqlRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
