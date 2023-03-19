import { type NextComponentType } from "next";
import { useContext, useState, useEffect } from "react";

import Header from "./Header";
import React from "react";
import { api } from "~/utils/api";

import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

import AppContext from "./AppContext";
import Link from "next/link";
import SendInfo from "./SendInfo";
import UpdateGeneralInfo from "./UpdateGeneralInfo";


const InfoForm: NextComponentType = ({}) => {
  const context = useContext(AppContext);

  const options = ["Male", "Female", "Not sure"];

  async function sendGeneralInfo() {
    await api.generalInfo.updateInfo.useMutation().mutate({
      name: context.name,
      address: context.address,
      zipCode: context.zip,
      dateOfBirth: context.dateOfBirth,
      sex: context.gender,
      nationality: context.nationality,
      religion: context.religion,
    });
  }

  // useEffect(() => {
  //   sendGeneralInfo();
  // }),[name, address, zip, dateOfBirth, gender, nationality, religion];


    return (
      <>
        <div className="mx-5 flex flex-col gap-2 font-bold text-3xl">Personal Information</div>
          <form className="flex flex-col">
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter your Full Name</label>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
              <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">

              <input
                type="text"
                placeholder="Name"
                value={context.name}
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => {
                  context.setName(e.currentTarget.value)
                }}
              />

              </GrammarlyEditorPlugin>
             

          <div className="px-[3rem]">
            <Header
              name={context.name}
              address={context.address}
              dob={context.dateOfBirth}
              nationality={context.nationality}
              religion={context.religion}
              gender={context.gender}
              zip={context.zip}
            />
          </div>
            </div>
            
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter your Address</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
              <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
              <input
                type="text"
                placeholder="Address"
                value={context.address}
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => {
                  context.setAddress(e.currentTarget.value)
                }}
              />

              </GrammarlyEditorPlugin>
              
            </div>


        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <label>Enter your Address</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="text"
            placeholder="Address"
            value={context.address}
            className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              context.setAddress(e.currentTarget.value);
            }}
          />
          
        </div>


        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <label>Enter your zipcode</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="number"
            placeholder="Address"
            value={context.zip}
            className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              context.setZip(e.currentTarget.value);
            }}
          />
          
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <label>Enter your Date of Birth</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="date"
            value={context.dateOfBirth}
            className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              context.setDateOfBirth(e.currentTarget.value);
            }}
          />
         
        </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter your Nationality</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
              <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
              <input
                type="text"
                value={context.nationality}
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => {
                  context.setNationality(e.currentTarget.value)
                }}
              />

              </GrammarlyEditorPlugin>

              

            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter your Gender</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
              <div>
              <select className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={context.gender}
                onChange={e => context.setGender(e.target.value)}
              >
                {options.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
              </div>
              
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter your Religion</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
              <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
              <input
                type="text"
                value={context.religion}
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => {
                  context.setReligion(e.currentTarget.value)
                }}
              />

              </GrammarlyEditorPlugin>

              

            </div>

        <Link href={"/editor/generatingEdu"}>
          <button
            type="submit"
            className="mx-5 mt-5  rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            Next
          </button>
        </Link>
      </form>
    </>
  );
};

export default InfoForm;
