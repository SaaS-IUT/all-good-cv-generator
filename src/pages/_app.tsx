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

    const [institutionName, setInstitutionName] = useState<string>("");
    const [institutionLocation, setInstitutionLocation] = useState<string>("");
    const [degreeName, setDegreeName] = useState<string>("");
    const [grade, setGrade] = useState<string>("");
    const [startMonth, setStartMonth] = useState<string>("");
    const [startYear, setStartYear] = useState<string>("");
    const [endMonth, setEndMonth] = useState<string>("");
    const [endYear, setEndYear] = useState<string>("");
    const [graduated, setGraduated] = useState<boolean>(true);
    const [fieldOfStudy, setFieldOfStudy] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [position, setPostion] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [workStartYear, setWorkStartYear] = useState<string>("");
    const [workEndYear, setWorkEndYear] = useState<string>("");

  return (
    <SessionProvider session={session}>
      <Navbar /> 
      <AppContext.Provider value={ 
        { name, setName , address, setAddress, dateOfBirth, 
          setDateOfBirth, gender, setGender, zip, setZip, nationality, 
          setNationality, religion, setReligion, institutionName, setInstitutionName,
          institutionLocation, setInstitutionLocation, degreeName, setDegreeName,
          grade, setGrade, startMonth, setStartMonth, startYear, setStartYear,
          endMonth, setEndMonth, endYear, setEndYear, graduated, setGraduated,
          fieldOfStudy, setFieldOfStudy, description, setDescription, position,
          setPostion, companyName, setCompanyName, workStartYear, setWorkStartYear,
          workEndYear, setWorkEndYear
        }
      }>
        <Component {...pageProps} />
      </AppContext.Provider>
      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
