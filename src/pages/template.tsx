import { NextPage } from "next";
import Temaplate from "~/components/Template";

const template: NextPage = () => {
  return (
    <div className="h-fit">
      <>
        <div className="px-72">
          <Temaplate />
        </div>
      </>
    </div>
  );
};

export default template;
