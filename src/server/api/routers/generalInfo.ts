import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";

export const generalInfoRouter = createTRPCRouter({
    getAllInfo: protectedProcedure
        .input(z.string())
        .query(async ({ ctx }) => {
            const result = await ctx.prisma.generalInfo.findMany({
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
            address: z.string(),
            zipCode: z.number(),
            dateOfBirth: z.date(),
            nationality: z.string(),
            sex: z.string(),
            religion: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            const result = await ctx.prisma.generalInfo.update({
                where: {
                    userId: ctx.session.user.id
                },
                data: {
                    name: input.name,
                    address: input.address,
                    zipCode: input.zipCode,
                    dateOfBirth: input.dateOfBirth,
                    nationality: input.nationality,
                    sex: input.sex,
                    religion: input.religion,
                }
            });
            console.log("Update returns:", result);
            return result;
        })
});
