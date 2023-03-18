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
        <div className="flex">
            <div className="px-4 flex-auto w-36 ...">
                <EducationInfoForm />
            </div>
            
            
    
        </div>
    </div>
  );
};

export default generatingEdu;