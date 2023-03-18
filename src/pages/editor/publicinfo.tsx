import { type NextPage } from "next";
import Footer from "~/components/Footer";
import PublicationInfo from "~/components/PublicationInfo";

const publicinfo: NextPage = () => {
  return (
    <div>
      <div>
        <PublicationInfo />
      </div>
      <Footer />
    </div>
  );
};

export default publicinfo;
