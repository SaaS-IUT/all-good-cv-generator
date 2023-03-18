import { type NextPage } from "next";
import { useContext } from "react";
import EducationInfoForm from "~/components/EducationInfoForm";
import Header from "~/components/Header";
import InfoForm from "~/components/InfoForm";
import AppContext from "../../components/AppContext";

const generatingEdu: NextPage = () => {
    
    const context = useContext(AppContext);
    
    return (
    <div>
        <div className="w-[160rem]">
            <EducationInfoForm />
        <div><Header name={context.name} address={context.address} dob={context.dateOfBirth} nationality={context.nationality} religion={context.religion} gender={context.gender} zip={context.zip}/></div>
    
        </div>
    </div>
  );
};

export default generatingEdu;