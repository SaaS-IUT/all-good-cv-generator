import { type NextComponentType } from "next";
import React from "react";
import { useContext } from "react";
import Header from "~/components/Header";
import Education from "~/components/Education";
import WorkExperienceInfo from "~/components/WorkExperienceInfo";
import Skills from "~/components/Skills";
import AppContext from "../components/AppContext";

const PrintableComponent = React.forwardRef((props, ref) => {
  const context = useContext(AppContext);

  return (
    <div ref={ref}>
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
  );
});
export default PrintableComponent;
