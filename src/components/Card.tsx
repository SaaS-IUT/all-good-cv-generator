import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  props: string;
}

const Card: React.FC<Props> = ({ props }) => {
  return (
    <div className="">
      <div className=" max-w-[15rem] overflow-hidden rounded bg-black shadow-lg transition delay-100 duration-150 ease-in-out hover:scale-105">
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-blue-500">{props}</div>
          <p className="text-base text-white">
            Here appears the resume cards or leads to the resume creating page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
