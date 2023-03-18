import { type NextComponentType } from "next";
import Link from "next/link";

const Footer: NextComponentType = () => {
  return (
    <footer className="font-Space bg-[#000000] py-5 mt-5">
      <div className="flex flex-row justify-around gap-4 px-2 py-2">
        <ul className="flex flex-col gap-2 text-white">
          <li>
          <h1 className="font-myfont1 text-3xl text-white">AllGood.</h1>
          </li>
          <li className="my-1">
            <h2 className="text-lg font-normal text-white">
            Your one-stop solution to everything Curriculum Vitae.
            </h2>
          </li>
        </ul>
        <ul className="flex flex-col items-center gap-1 text-white">
          <li>
            <Link href="/template" className="text-xl font-normal">
              Templates
            </Link>
          </li>
          <li>
            <Link href="/editor/generating" className="text-xl font-normal">
              Editor
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-xl font-normal">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-xl font-normal">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-10 flex flex-row justify-center py-2">
        <h3 className="text-md font-normal text-gray-500">
          Copyright 2023 _SaaS_, All Rights Reserved.
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
