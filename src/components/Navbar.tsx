import { NextComponentType } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import Link from "next/link";

const Navbar: NextComponentType = () => {
  //   const { data: sessionData } = useSession();

  return (
    <div className="flex justify-between px-24 py-2">
      <div>
        <h1 className="font-myfont1">AllGood.</h1>
      </div>
      <div className="flex space-x-20">
        <div className="text-black transition delay-150 duration-300 ease-in-out hover:text-blue-500">
          <Link href="/">Home</Link>
        </div>
        <div className="text-black transition delay-150 duration-300 ease-in-out hover:text-blue-500">
          <Link href="/">About us</Link>
        </div>
        <div className="text-black transition delay-150 duration-300 ease-in-out hover:text-blue-500">
          <Link href="/">Contact us</Link>
        </div>
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent transition delay-150 duration-300 ease-in-out hover:text-blue-500">
          <Link href="/template">Template</Link>
        </div>
      </div>
      <div className="">
        {/* <button onClick={sessionData ? void signOut() : void signIn()}>
          {sessionData ? "Sign Out" : "Sign In"}
        </button> */}
        <button className="mr-1 mb-1 rounded-lg border border-blue-700 px-2.5 py-1 text-center text-sm font-bold text-black transition delay-150 duration-300 ease-in-out hover:bg-blue-800 hover:text-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
