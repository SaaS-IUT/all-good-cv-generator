import { NextPage } from "next";
import CertificatesInfo from "~/components/CertificatesInfo";
import Bottomnav from "~/components/BottomNav";

const certificationInfo: NextPage = () => {
  return (
    <div>
      <div>
        <CertificatesInfo />
      </div>
      <Bottomnav />
    </div>
  );
};

export default certificationInfo;
