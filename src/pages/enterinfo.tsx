import { type NextPage } from "next";
import Footer from "~/components/Footer";
import InfoForm from "~/components/InfoForm";

const enterinfo: NextPage = () => {
  return (
    <div>
      <div>
        <InfoForm />
      </div>
      <Footer />
    </div>
  );
};

export default enterinfo;
