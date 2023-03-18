import { type NextPage } from "next";
import InfoForm from "~/components/InfoForm";

const generating: NextPage = () => {
  return (
    <div>
        <div >
            <InfoForm />
            <button  type="submit" className="mx-5 mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Next
            </button>
        </div>
        
    </div>
  );
};

export default generating;