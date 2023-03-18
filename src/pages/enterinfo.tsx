import { type NextPage } from "next";
import Footer from "~/components/Footer";
import FooterNav from "~/components/FooterNav";
import InfoForm from "~/components/InfoForm";

const enterinfo: NextPage = () => {
  return (
    <div>
      <div>
        <InfoForm />
      </div>
      <FooterNav />
    </div>
  );
};

export default enterinfo;
