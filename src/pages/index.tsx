import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";


import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const result = api.generalInfo.getAllInfo.useQuery(sessionData?.user.id);
  console.log(result.data);
  return (
    <>
      <Head>
        <title>All Good CV Generator</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-fill flex flex-col mt-[4rem] mb-[19rem]">
        <div className="pt-14 text-center font-myfont2 text-[30px]">
          <div className="">The new way to Represent yourself</div>
        </div>
        <div className="px-80 pt-1 text-[13px]">
          Our resume builder offers a fast and effortless method to create a
          professional resume. With over thirty modern and customizable
          templates, you can choose the one that suits your preferences. Our
          resume wizard makes it simple and easy to use, allowing you to quickly
          create a polished and impressive resume.
        </div>
        <div className="pt-4 text-center">
          <Link href="/dashboard">
            <button
              type="button"
              className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
            >
              +CREATE MY CV
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  console.log("User: ", sessionData?.user.id);

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name} {sessionData.user.id}</span> }
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
