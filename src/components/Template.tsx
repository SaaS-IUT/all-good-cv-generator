import { NextComponentType } from "next";
import Header from "~/components/Header";
import Education from "~/components/Education";
import Workexp from "~/components/Workexp";
import Skills from "~/components/Skills";

const Template: NextComponentType = () => {
  return (
    <div className="border px-1">
      
      <Education></Education>
      <Workexp></Workexp>
      <Skills></Skills>
    </div>
  );
};

export default Template;
