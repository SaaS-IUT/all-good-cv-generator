import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";

export const customRouter = createTRPCRouter({
    getAllInfo: protectedProcedure
        .input(z.object({ cv: z.string()}))
        .query(async ({ ctx, input }) => {
            const result = await ctx.prisma.custom.findMany({
                where: {
                    cvId: input.cv
                },
            });
            console.log("Result", result);
            console.log("Router User", ctx.session.user.id);
            return result;
        }),
    updateInfo: protectedProcedure
        .input(z.object({ 
            cv: z.string(),
            label: z.string(),
            description: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            const result = await ctx.prisma.custom.upsert({
                where: {
                    cvId: input.cv
                },
                create: {
                    cvId: input.cv,
                    label: input.label,
                    description: input.description
                },
                update: {
                    label: input.label,
                    description: input.description
                }
            });
            console.log("Update returns:", result);
            return result;
        })
});
