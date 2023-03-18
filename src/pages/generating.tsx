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
        </div>
        
    </div>
  );
};

export default generating;