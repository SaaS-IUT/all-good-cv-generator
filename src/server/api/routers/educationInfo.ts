import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";

export const educationInfoRouter = createTRPCRouter({
    getAllInfo: protectedProcedure
        .input(z.string())
        .query(async ({ ctx }) => {
            const result = await ctx.prisma.educationInfo.findMany({
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
            institutionName: z.string(),
            institutionLocation: z.string(),
            degreeName: z.string(),
            grade: z.string(),
            startMonth: z.string(),
            startYear: z.string(),
            endMonth: z.string(),
            endYear: z.string(),
            graduated: z.boolean(),
            fieldOfStudy: z.string(),
            description: z.string(),

        }))
        .mutation(async ({ ctx, input }) => {
            const result = await ctx.prisma.educationInfo.upsert({
                where: {
                    userId: ctx.session.user.id
                },
                create: {
                    userId: ctx.session.user.id,
                    institutionName: input.institutionName,
                    institutionLocation: input.institutionLocation,
                    degreeName: input.degreeName,
                    grade: input.grade,
                    startMonth: input.startMonth,
                    startYear: input.startYear,
                    endMonth: input.endMonth,
                    endYear: input.endYear,
                    graduated: input.currentlyIn,
                    fieldOfStudy: input.fieldOfStudy,
                    description: input.description
                },
                update: {
                    institutionName: input.institutionName,
                    institutionLocation: input.institutionLocation,
                    degreeName: input.degreeName,
                    grade: input.grade,
                    startMonth: input.startMonth,
                    startYear: input.startYear,
                    endMonth: input.endMonth,
                    endYear: input.endYear,
                    graduated: input.currentlyIn,
                    fieldOfStudy: input.fieldOfStudy,
                    description: input.description
                }
            });
            console.log("Update returns:", result);
            return result;
        })
});
