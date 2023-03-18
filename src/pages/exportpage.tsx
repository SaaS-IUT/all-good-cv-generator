import { NextComponentType } from "next";
import Header from "~/components/Header";
import Education from "~/components/Education";
import WorkExperienceInfo from "~/components/WorkExperienceInfo";
import Skills from "~/components/Skills";
import AppContext from "../components/AppContext";
import { useContext } from "react";

const Template: NextComponentType = () => {

    const context = useContext(AppContext);
  return (
    <div className="flex items-center justify-center h-screen">
        <div>
        <Header name={context.name} address={context.address} dob={context.dateOfBirth} nationality={context.nationality} religion={context.religion} gender={context.gender} zip={context.zip}/>
        <Education institutionname={context.institutionName} degree={context.degree} endYear={context.endYear} />
        <WorkExperienceInfo post={context.position} place={context.companyName} start={context.workStartYear} end={context.workEndYear}/>
        <Skills />
        </div>
        
    </div>
  );
};

export default Template;
