import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Enterinfo from "~/components/Enterinfo";
import EnterEduInfo from "~/components/EnterEduInfo";
import Workinfo from "~/components/WorkInfo";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
