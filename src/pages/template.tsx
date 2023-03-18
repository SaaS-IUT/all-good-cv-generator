import { NextPage } from "next";
import Temaplate from "~/components/Template";
import Bottomnav from "~/components/BottomNav";

const template: NextPage = () => {
  return (
    <div className="h-fit">
      <>
        <div className="px-72">
          <Temaplate />
        </div>
      </>
      <Bottomnav />
    </div>
  );
};

export default template;
