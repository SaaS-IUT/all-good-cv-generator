import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { generalInfoRouter } from "./routers/generalInfo";
import { educationInfoRouter } from "./routers/educationInfo";
import { workInfoRouter } from "./routers/workInfo";
import { skillInfoRouter } from "./routers/skillInfo";
import { accomplishmentInfoRouter } from "./routers/accomplishmentInfo";
import { certificationsRouter } from "./routers/certifications";
import { projectInfoRouter } from "./routers/projectInfo";
import { publicationInfoRouter } from "./routers/publicationInfo";
import { cvRouter } from "./routers/cv";
import { customRouter } from "./routers/custom";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  generalInfo: generalInfoRouter,
  educationInfo: educationInfoRouter,
  workInfo: workInfoRouter,
  skillInfo: skillInfoRouter,
  accomplishmentInfo: accomplishmentInfoRouter,
  certifications: certificationsRouter,
  projectInfo: projectInfoRouter,
  publicationInfo: publicationInfoRouter,
  cv: cvRouter,
  custom: customRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
