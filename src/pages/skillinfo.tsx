import { type NextPage } from "next";
import Footer from "~/components/Footer";
import FooterNav from "~/components/FooterNav";
import SkillInfo from "~/components/SkillInfo";

const skillinfo: NextPage = () => {
  return (
    <div>
      <div>
        <SkillInfo />
      </div>
      <FooterNav />
    </div>
  );
};

export default skillinfo;
