import { type NextPage } from "next";
import { useContext } from "react";
import EducationInfoForm from "~/components/EducationInfoForm";
import Header from "~/components/Header";
import InfoForm from "~/components/InfoForm";
import Workinfo from "~/components/WorkInfo";
import AppContext from "../../components/AppContext";

const generatingwork: NextPage = () => {
    
    const context = useContext(AppContext);
    
    return (
    <div>
        <div className="w-[160rem]">
                <Workinfo />        
        </div>
    </div>
  );
};

export default generatingwork;