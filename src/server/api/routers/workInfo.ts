import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";

export const workInfoRouter = createTRPCRouter({
    getAllInfo: protectedProcedure
        .input(z.string())
        .query(async ({ ctx }) => {
            const result = await ctx.prisma.workInfo.findMany({
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
            position: z.string(),
            companyName: z.string(),
            startMonth: z.string(),
            startYear: z.string(),
            endMonth: z.string(),
            endYear: z.string(),
            currentlyIn: z.boolean(),
            description: z.string(),

        }))
        .mutation(async ({ ctx, input }) => {
            const result = await ctx.prisma.workInfo.upsert({
                where: {
                    userId: ctx.session.user.id
                },
                create: {
                    userId: ctx.session.user.id,
                    position: input.position,
                    companyName: input.companyName,    
                    startMonth: input.startMonth,
                    startYear: input.startYear,
                    endMonth: input.endMonth,
                    endYear: input.endYear,
                    currentlyIn: input.currentlyIn,
                    description: input.description
                },
                update: {
                    position: input.position,
                    companyName: input.companyName,    
                    startMonth: input.startMonth,
                    startYear: input.startYear,
                    endMonth: input.endMonth,
                    endYear: input.endYear,
                    currentlyIn: input.currentlyIn,
                    description: input.description
                }
            });
            console.log("Update returns:", result);
            return result;
        })
});
