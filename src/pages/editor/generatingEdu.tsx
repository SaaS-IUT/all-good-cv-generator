import { type NextPage } from "next";
import EducationInfoForm from "~/components/EducationInfoForm";


const generatingEdu: NextPage = () => {
    
    return (
    <div>
        <div className="w-[160rem]">
                <EducationInfoForm />        
        </div>
    </div>
  );
};

export default generatingEdu;