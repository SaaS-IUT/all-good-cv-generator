import { NextPage } from "next";
import Bottomnav from "~/components/BottomNav";
import Enterinfo from "~/components/Enterinfo";

const enterinfo: NextPage = () => {
  return (
    <div>
      <div>
        <Enterinfo />
      </div>
      <Bottomnav />
    </div>
  );
};

export default enterinfo;
