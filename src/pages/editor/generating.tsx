import { type NextPage } from "next";
import FooterNav from "~/components/FooterNav";
import InfoForm from "~/components/InfoForm";
import { api } from "~/utils/api";
import { useContext } from "react";
import AppContext from "~/components/AppContext";
import { useEffect } from "react";

const generating: NextPage = () => {
  return (
    <div className="flex flex-col">
      <div>
        <InfoForm />
      </div>
      <div className="py-2">
      <FooterNav />
      </div>
    </div>
  );
};

export default generating;
