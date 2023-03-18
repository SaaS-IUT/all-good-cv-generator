import { NextComponentType } from "next";
import Header from "~/components/Header";
import Education from "~/components/Education";
import WorkExperienceInfo from "./WorkExperienceInfo";
import Skills from "~/components/Skills";

const Template: NextComponentType = () => {
  return (
    <div className="border px-1">
      <Header name="John Doe" address="somwhere" zip="1000" dob="23.12.21" nationality="British" gender="Male" religion="Islam" />
      <Education />
      <WorkExperienceInfo />
      <Skills />
    </div>
  );
};

export default Template;
