import { Router } from "next/router";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const currentPage = createTRPCRouter({
  page: publicProcedure
    .query(() => {
      
      return {
        name: Router.name,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.currentPage.findMany();
  }),
});
