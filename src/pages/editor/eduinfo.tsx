import { type NextPage } from "next";
import EducationInfoForm from "~/components/EducationInfoForm";
import Footer from "~/components/Footer";
import FooterNav from "~/components/FooterNav";

const eduinfo: NextPage = () => {
  return (
    <div>
      <div>
        <EducationInfoForm />
      </div>
      <FooterNav />
    </div>
  );
};

export default eduinfo;
