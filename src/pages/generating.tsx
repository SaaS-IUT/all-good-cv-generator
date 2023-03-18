import { NextPage } from "next";
import Card from "~/components/Card";

import Link from "next/link";
import Enterinfo from "~/components/Enterinfo";
import Template from "~/components/Template";

const generating: NextPage = () => {
  return (
    <div>
        <div className="flex">
            <Enterinfo />
            <button  type="submit" className="mx-5 mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Next
            </button>
        </div>
        
    </div>
  );
};

export default generating;