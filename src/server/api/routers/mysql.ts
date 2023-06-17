import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const mysqlRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return !input
        ? { greeting: `Hello from mysqlRouter` }
        : { greeting: `mysqlRouter says hello, ${input.text}}` };
    }),
});

export default mysqlRouter;
