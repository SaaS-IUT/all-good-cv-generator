import { type NextComponentType } from "next";
import Education from "~/components/Education";
import WorkExperienceInfo from "~/components/WorkExperienceInfo";
import Skills from "~/components/Skills";

const Template: NextComponentType = () => {
  return (
    <div className="border px-1">
      <Education />
      <WorkExperienceInfo />
      <Skills />
    </div>
  );
};

export default Template;
