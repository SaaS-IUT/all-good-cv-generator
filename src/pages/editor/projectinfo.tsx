import { type NextPage } from "next";
import Footer from "~/components/Footer";
import FooterNav from "~/components/FooterNav";
import ProjectInfo from "~/components/ProjectInfo";

const projectinfo: NextPage = () => {
  return (
    <div>
      <div>
        <ProjectInfo />
      </div>
      <FooterNav />
    </div>
  );
};

export default projectinfo;
