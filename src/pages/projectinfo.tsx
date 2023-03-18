import { type NextPage } from "next";
import Footer from "~/components/Footer";
import ProjectInfo from "~/components/ProjectInfo";

const projectinfo: NextPage = () => {
  return (
    <div>
      <div>
        <ProjectInfo />
      </div>
      <Footer />
    </div>
  );
};

export default projectinfo;
