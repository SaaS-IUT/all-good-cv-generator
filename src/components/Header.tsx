import { NextComponentType } from "next";
import Enterinfo from "./Enterinfo";
import React from 'react';

interface Props {
  props: string;
}

const Header: React.FC<Props> = ({props}) => {
  return (
    <div>
      <header className="bg-gray-900 px-4 py-6 text-white">
        <h1 className="text-3xl font-bold">{props}</h1>
        <p className="text-lg">Software Developer</p>
      </header>
    </div>
  );
};

export default Header;
