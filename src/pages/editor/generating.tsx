import { type NextPage } from "next";
import FooterNav from "~/components/FooterNav";
import InfoForm from "~/components/InfoForm";

const generating: NextPage = () => {
  return (
    <div>
      <div>
        <InfoForm />
      </div>
      <FooterNav />
    </div>
  );
};

export default generating;
