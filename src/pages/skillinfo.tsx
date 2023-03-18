import { type NextPage } from "next";
import Footer from "~/components/Footer";
import SkillInfo from "~/components/SkillInfo";

const skillinfo: NextPage = () => {
  return (
    <div>
      <div>
        <SkillInfo />
      </div>
      <Footer />
    </div>
  );
};

export default skillinfo;
