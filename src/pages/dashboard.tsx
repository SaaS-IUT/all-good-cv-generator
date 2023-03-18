import { NextPage } from "next";
import Card from "~/components/Card";

const dashboard: NextPage = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center space-x-4">
        <Card props="Existing CV" />

        <Card props="+CREATE NEW" />
      </div>
    </div>
  );
};

export default dashboard;
