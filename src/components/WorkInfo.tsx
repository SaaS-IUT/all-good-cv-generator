import { type NextComponentType } from "next";
import { useState, useEffect } from "react";
import { api } from "~/utils/api";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const Workinfo: NextComponentType = () => {
  const [position, setPostion] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [startMonth, setStartMonth] = useState<string>("");
  const [startYear, setStartYear] = useState<string>("");
  const [endMonth, setEndMonth] = useState<string>("");
  const [endYear, setEndYear] = useState<string>("");
  const [currentlyIn, setCurrentlyIn] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  function sendWorkInfo() {
    api.workInfo.updateInfo.useMutation().mutate({
      position: position,
      companyName: companyName,
      startMonth: startMonth,
      startYear: startYear,
      endMonth: endMonth,
      endYear: endYear,
      currentlyIn: currentlyIn,
      description: description,
    });
  }

  //   useEffect(() => {
  //     sendWorkInfo();
  //   }),[position, companyName, startMonth, startYear, endMonth, endYear, currentlyIn, description];

  return (
    <div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Name of Position</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
       <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
        <input
          type="text"
          placeholder="Name of Position"
          value={position}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setPostion(e.currentTarget.value);
          }}
        />
        </GrammarlyEditorPlugin>
        <div>{position}</div>
      </div>


      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Name of Company</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setCompanyName(e.currentTarget.value);
          }}
        />
        <div>{companyName}</div>
      </div>

      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Starting Month</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Starting Month"
          value={startMonth}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setStartMonth(e.currentTarget.value);
          }}
        />
        <div>{startMonth}</div>
      </div>

      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Starting Year</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Starting Year"
          value={startYear}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setStartYear(e.currentTarget.value);
          }}
        />
        <div>{startYear}</div>
      </div>

      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Ending Month</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Ending month"
          value={endMonth}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setEndMonth(e.currentTarget.value);
          }}
        />
        <div>{endMonth}</div>
      </div>

      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Ending Year</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Ending Year"
          value={endYear}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setEndYear(e.currentTarget.value);
          }}
        />
        <div>{endYear}</div>
      </div>

      <div className="mx-5 mt-5 gap-2">
        Are you currently in the company?
        <input
          type="checkbox"
          checked={currentlyIn}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setCurrentlyIn(e.target.checked)}
        />
        <div>{currentlyIn}</div>
      </div>

      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Description</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
        <input
          type="text"
          placeholder="Description"
          value={description}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        />
        </GrammarlyEditorPlugin>
        <div>{description}</div>
      </div>
      <button
        type="submit"
        className="mx-5 mt-5  rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      >
        Next
      </button>

    </div>
  );
};

export default Workinfo;
