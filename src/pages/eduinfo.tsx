import { NextPage } from "next";
import EnterEduInfo from "~/components/EnterEduInfo";
import Bottomnav from "~/components/BottomNav";

const eduinfo: NextPage = () => {
  return (
    <div>
      <div>
        <EnterEduInfo />
      </div>
      <Bottomnav />
    </div>
  );
};

export default eduinfo;
