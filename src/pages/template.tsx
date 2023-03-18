import { type NextPage } from "next";
import Temaplate from "~/components/Template";
import Footer from "~/components/Footer";
import FooterNav from "~/components/FooterNav";

const template: NextPage = () => {
  return (
    <div className="h-fit mt-5">
      <>
        <div className="px-72">
          <Temaplate />
        </div>
      </>
      <div className="my-10">
        <FooterNav />
      </div>
    </div>
  );
};

export default template;
