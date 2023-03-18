import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";

export const accomplishmentInfoRouter = createTRPCRouter({
    getAllInfo: protectedProcedure
        .input(z.string())
        .query(async ({ ctx }) => {
            const result = await ctx.prisma.accomplishmentInfo.findMany({
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
            name: z.string(),
            description: z.string(),

        }))
        .mutation(async ({ ctx, input }) => {
            const result = await ctx.prisma.accomplishmentInfo.update({
                where: {
                    userId: ctx.session.user.id
                },
                data: {
                    name: input.name,
                    description: input.description
                }
            });
            console.log("Update returns:", result);
            return result;
        })
});
