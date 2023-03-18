import { NextPage } from "next";
import Bottomnav from "~/components/BottomNav";
import PublicationInfo from "~/components/PublicationInfo";

const publiinfo: NextPage = () => {
  return (
    <div>
      <div>
        <PublicationInfo />
      </div>
      <Bottomnav />
    </div>
  );
};

export default publiinfo;
