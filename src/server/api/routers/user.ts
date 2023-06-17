import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

/**
 * @see https://create.t3.gg/en/usage/trpc
 * @see
 */
const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getUser: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),

  getAccount: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.account.findMany();
  }),
});

export default userRouter;

// export const exampleRouter = createTRPCRouter({
//   getSecretMessage: protectedProcedure.query(() => {
//     return "you can now see this secret message!";
//   }),
// });
