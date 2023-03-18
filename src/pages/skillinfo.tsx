import { type NextPage } from "next";
import Footer from "~/components/Footer";
import Skillinfo from "~/components/Skillinfo";

const skillinfo: NextPage = () => {
  return (
    <div>
      <div>
        <Skillinfo />
      </div>
      <Footer />
    </div>
  );
};

export default skillinfo;
