import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const pgRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return !input
        ? { greeting: `Hello from pgRouter` }
        : { greeting: `pgRouter says hello, ${input.text}}` };
    }),
});

export default pgRouter;
