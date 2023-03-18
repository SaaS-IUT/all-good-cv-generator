import { NextPage } from "next";
import Card from "~/components/Card";

import Link from "next/link";

const dashboard: NextPage = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center space-x-4">
        <Card props="Existing CV" />

        <Link href="/generating">
          <Card props="+CREATE NEW" />
        </Link>
        
      </div>
    </div>
  );
};

export default dashboard;
