import { NextPage } from "next";

const about: NextPage = () => {
  return (
    <div className="h-screen">
      <div className="pt-14 text-center font-myfont2 text-[30px]">
        Team _SaaS_
      </div>
      <div className="px-80 pt-1 text-[13px]">
        We are new but dedicated developers willing to go far beyond our
        capacity.We are motivated by our passion for making somehting new and
        innovative.Although we are new, we are willing to take the risk and dive
        deep into the development deep hole.
      </div>
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text pt-14 text-center font-myfont2 text-[30px] font-extrabold text-transparent">
        Our Goals
      </div>
      <div className="px-80 pt-1 text-[13px]">
        Our one of the primary goals is to provide solution to existing
        unanswered question.And along with the process we might pick up some
        skill which my be beneficial to others.
      </div>
    </div>
  );
};

export default about;
