import { type NextPage } from "next";
import InfoForm from "~/components/InfoForm";

const generating: NextPage = () => {
  return (
    <div>
        <div className="w-[160rem]">
            <InfoForm />
        </div>
    </div>
  );
};

export default generating;