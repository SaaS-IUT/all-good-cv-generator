import { NextComponentType } from "next";
import Link from "next/link";

const Footer: NextComponentType = () => {
  return (
    <div className="h-[10rem] bg-[#F7F8F9]">
      <div>
        <div>
          <Link href="">Education Info</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
