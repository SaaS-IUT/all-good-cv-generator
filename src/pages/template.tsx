import { type NextPage } from "next";
import Temaplate from "~/components/Template";
import Footer from "~/components/Footer";
import FooterNav from "~/components/FooterNav";

const template: NextPage = () => {
  return (
    <div className="h-fit">
      <>
        <div className="px-72">
          <Temaplate />
        </div>
      </>
      <FooterNav />
    </div>
  );
};

export default template;
