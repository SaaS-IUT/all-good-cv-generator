import { type NextPage } from "next";
import Footer from "~/components/Footer";
import FooterNav from "~/components/FooterNav";
import WorkInfo from "~/components/WorkInfo";

const workinfo: NextPage = () => {
  return (
    <div>
      <div>
        <WorkInfo />
      </div>
      <FooterNav />
    </div>
  );
};

export default workinfo;
