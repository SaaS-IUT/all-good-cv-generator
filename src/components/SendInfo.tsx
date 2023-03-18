import { type NextComponentType } from "next";
import { useContext, useState, useEffect } from "react";

import Header from "./Header";
import React from "react";
import { api } from "~/utils/api";
import AppContext from "./AppContext";
import Link from "next/link";


const SendInfo: NextComponentType = ({}) => {

  const context = useContext(AppContext);

  const options = ["Male", "Female", "Not sure"]

    const sendGeneralInfo = api.generalInfo.updateInfo.useMutation().mutate({
        name: context.name,
        address: context.address,
        zipCode: context.zip,
        dateOfBirth: context.dateOfBirth,
        sex: context.gender,
        nationality: context.nationality,
        religion: context.religion
      })
      

  
    
    // useEffect(() => {
    //   sendGeneralInfo();
    // }),[name, address, zip, dateOfBirth, gender, nationality, religion];

    return (
      <>
      </>
    );
  };

export default SendInfo;