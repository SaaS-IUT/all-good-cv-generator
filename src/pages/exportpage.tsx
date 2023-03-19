import { type NextComponentType } from "next";
import Header from "~/components/Header";
import Education from "~/components/Education";
import WorkExperienceInfo from "~/components/WorkExperienceInfo";
import Skills from "~/components/Skills";
import AppContext from "../components/AppContext";
import { useContext, useRef } from "react";
import { ReactDOM } from "react";
import { useReactToPrint } from "react-to-print";
import PrintableComponent from "~/components/PrintableComponent";
import PrintButton from "~/components/PrintButton";

const exportpage: NextComponentType = () => {
  const context = useContext(AppContext);

  return (
    <div className="flex mt-10 h-auto flex-row items-center justify-center">
      <div>
        <Header
          name={context.name}
          address={context.address}
          dob={context.dateOfBirth}
          nationality={context.nationality}
          religion={context.religion}
          gender={context.gender}
          zip={context.zip}
        />
        <Education
          institutionname={context.institutionName}
          degree={context.degree}
          endYear={context.endYear}
        />
        <WorkExperienceInfo
          post={context.position}
          place={context.companyName}
          start={context.workStartYear}
          end={context.workEndYear}
        />
        <Skills />
      </div>
      <div className="pl-5">
        <PrintButton />
      </div>
    </div>
  );
};

export default exportpage;
