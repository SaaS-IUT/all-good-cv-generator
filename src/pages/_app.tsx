import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Enterinfo from "~/components/Enterinfo";
import EnterEduInfo from "~/components/EnterEduInfo";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <EnterEduInfo />
    </SessionProvider>
    
  );
};

export default api.withTRPC(MyApp);
