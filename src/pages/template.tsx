import { type NextPage } from "next";
import Temaplate from "~/components/Template";
import Footer from "~/components/Footer";

const template: NextPage = () => {
  return (
    <div className="h-fit">
      <>
        <div className="px-72">
          <Temaplate />
        </div>
      </>
      <Footer />
    </div>
  );
};

export default template;
