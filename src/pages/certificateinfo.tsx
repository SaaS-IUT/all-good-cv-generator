import { type NextPage } from "next";
import CertificatesInfo from "~/components/CertificatesInfo";
import Footer from "~/components/Footer";

const certificationInfo: NextPage = () => {
  return (
    <div>
      <div>
        <CertificatesInfo />
      </div>
      <Footer />
    </div>
  );
};

export default certificationInfo;
