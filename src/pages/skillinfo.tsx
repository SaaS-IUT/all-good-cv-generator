import { NextPage } from "next";
import Bottomnav from "~/components/BottomNav";
import Skillinfo from "~/components/Skillinfo";

const skillinfo: NextPage = () => {
  return (
    <div>
      <div>
        <Skillinfo />
      </div>
      <Bottomnav />
    </div>
  );
};

export default skillinfo;
