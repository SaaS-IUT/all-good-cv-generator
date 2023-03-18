import { type NextPage } from "next";
import Footer from "~/components/Footer";
import WorkInfo from "~/components/WorkInfo";

const workinfo: NextPage = () => {
  return (
    <div>
      <div>
        <WorkInfo />
      </div>
      <Footer />
    </div>
  );
};

export default workinfo;
