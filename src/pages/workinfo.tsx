import { NextPage } from "next";
import Bottomnav from "~/components/BottomNav";
import WorkInfo from "~/components/WorkInfo";

const workinfo: NextPage = () => {
  return (
    <div>
      <div>
        <WorkInfo />
      </div>
      <Bottomnav />
    </div>
  );
};

export default workinfo;
