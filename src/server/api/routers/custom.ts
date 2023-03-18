import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";

export const customRouter = createTRPCRouter({
    getAllInfo: protectedProcedure
        .input(z.string())
        .query(async ({ ctx }) => {
            const result = await ctx.prisma.custom.findMany({
                where: {
                    userId: ctx.session.user.id,
                },
            });
            console.log("Result", result);
            console.log("Router User", ctx.session.user.id);
            return result;
        }),
    updateInfo: protectedProcedure
        .input(z.object({
            theme: z.string(),

        }))
        .mutation(async ({ ctx, input }) => {
            const result = await ctx.prisma.custom.update({
                where: {
                    userId: ctx.session.user.id
                },
                data: {
                    theme: input.theme,
                }
            });
            console.log("Update returns:", result);
            return result;
        })
});
