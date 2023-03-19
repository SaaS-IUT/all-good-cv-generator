import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";
import AppContext from "../components/AppContext"

import "~/styles/globals.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { useState } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {


  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [religion, setReligion] = useState<string>("");

  return (
    <SessionProvider session={session}>
      <Navbar /> 
      <AppContext.Provider value={ { name, setName , address, setAddress, dateOfBirth, setDateOfBirth, gender, setGender, zip, setZip, nationality, setNationality, religion, setReligion}}>
        <Component {...pageProps} />
      </AppContext.Provider>
      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
