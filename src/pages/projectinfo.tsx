import { NextPage } from "next";
import Bottomnav from "~/components/BottomNav";
import ProjectInfo from "~/components/ProjectInfo";

const projectinfo: NextPage = () => {
  return (
    <div>
      <div>
        <ProjectInfo />
      </div>
      <Bottomnav />
    </div>
  );
};

export default projectinfo;
