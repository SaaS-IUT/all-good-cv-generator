import { type NextComponentType } from "next";
import Link from "next/link";

const Footer: NextComponentType = () => {
  return (
    <div className="h-auto bg-white px-40">
      <div className="flex justify-between">
        <div className="hover:text-blue-500">
          <Link href="/eduinfo">Education Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/workinfo">Work Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/skillinnfo">Skill Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/enterinfo"> Enter Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/projectinfo">Project Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/certificateinfo">Certification Info</Link>
        </div>
        <div className="hover:text-blue-500">
          <Link href="/publiinfo">Publication Info</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
