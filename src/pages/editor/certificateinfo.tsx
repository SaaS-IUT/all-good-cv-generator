import { type NextPage } from "next";
import CertificatesInfo from "~/components/CertificatesInfo";
import Footer from "~/components/Footer";
import FooterNav from "~/components/FooterNav";

const certificationInfo: NextPage = () => {
  return (
    <div>
      <div>
        <CertificatesInfo />
      </div>
      <FooterNav />
    </div>
  );
};

export default certificationInfo;
