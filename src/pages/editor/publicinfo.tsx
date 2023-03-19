import { type NextPage } from "next";
import Footer from "~/components/Footer";
import FooterNav from "~/components/FooterNav";
import PublicationInfo from "~/components/PublicationInfo";

const publicinfo: NextPage = () => {
  return (
    <div>
      <div>
        <PublicationInfo />
      </div>
      <FooterNav />
    </div>
  );
};

export default publicinfo;
