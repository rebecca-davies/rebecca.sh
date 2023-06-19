import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const contactRouter = createTRPCRouter({
  send: publicProcedure
    .input(
      z.object({ name: z.string(), email: z.string(), message: z.string() })
    )
    .mutation(async ({ ctx, input }) => {
      const { name, email, message } = input;
      await ctx.prisma.contact.create({
        data: {
          name,
          email,
          message,
        },
      });
      return {
        response: `Thanks for the message ${name.toLowerCase()}! I'll try my best to get back to you shortly! 😊`,
      };
    }),
});