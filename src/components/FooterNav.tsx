import { type NextComponentType } from "next";
import Link from "next/link";

const FooterNav: NextComponentType = () => {
  return (
    <div className="h-auto bg-white px-40">
      <div className="flex justify-between">
        <div className="hover:text-blue-500">
          <Link href="/editor/eduinfo">Education Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/editor/workinfo">Work Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/skillinfo">Skill Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/enterinfo"> Enter Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/editor/projectinfo">Project Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/editor/certificateinfo">Certification Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/editor/publicinfo">Publication Info</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
