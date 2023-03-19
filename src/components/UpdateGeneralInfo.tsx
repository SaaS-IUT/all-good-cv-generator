import { type NextComponentType } from "next";
import Link from "next/link";
import { useState, useContext } from "react";
import { api } from "~/utils/api";
import AppContext from "./AppContext";

const UpdateGeneralInfo: NextComponentType = () => {
  const context = useContext(AppContext);
  const data = {
    name: context.name,
    address: context.address,
    zipCode: context.zip,
    dateOfBirth: context.dateOfBirth,
    sex: context.gender,
    nationality: context.nationality,
    religion: context.religion,
  };

  const { mutate } = api.generalInfo.updateInfo.useMutation();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate(data);
        }}
      >
        <Link href={"/editor/generatingEdu"}>
            <button
            type="submit"
            className="mx-5 mt-5  rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            >Next</button>
        </Link>
      </form>
    </>
  );
};


export default UpdateGeneralInfo