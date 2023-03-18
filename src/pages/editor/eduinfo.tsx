import { type NextPage } from "next";
import EducationInfoForm from "~/components/EducationInfoForm";
import Footer from "~/components/Footer";

const eduinfo: NextPage = () => {
  return (
    <div>
      <div>
        <EducationInfoForm />
      </div>
      <Footer />
    </div>
  );
};

export default eduinfo;
