import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const generalInfoRouter = createTRPCRouter({
    getAllInfo: protectedProcedure
        .query(async ({ ctx }) => {
            const result = await ctx.prisma.generalInfo.findUnique({
                where: {
                    userId: ctx.session.user.id,
                },
            });
            console.log("Result", result);
            console.log("User", ctx.session.user.id);

        }),
    
});
