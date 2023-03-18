import { NextComponentType } from "next";
import { useState } from "react";

const Workinfo: NextComponentType = () => {
  const [position, setPostion] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [startMonth, setStartMonth] = useState<string>("");
  const [startYear, setStartYear] = useState<string>("");
  const [endMonth, setEndMonth] = useState<string>("");
  const [endYear, setEndYear] = useState<string>("");
  const [currentlyIn, setCurrentlyIn] = useState(false);
  const [description, setDescription] = useState<string>("");

  return (
    <div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Name of Position</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Name of Position"
          value={position}
          className="input-bordered input input-sm w-full"
          onChange={(e) => {
            setPostion(e.currentTarget.value);
          }}
        />
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
          className="input-bordered input input-sm w-full"
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
          className="input-bordered input input-sm w-full"
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
          className="input-bordered input input-sm w-full"
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
          className="input-bordered input input-sm w-full"
          onChange={(e) => {
            setEndMonth(e.currentTarget.value);
          }}
        />
        <div>{endMonth}</div>
      </div>

      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter ending Year</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Ending Year"
          value={endYear}
          className="input-bordered input input-sm w-full"
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
          onChange={(e) => setCurrentlyIn(e.target.checked)}
        />
        <div>{currentlyIn}</div>
      </div>

      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Description</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Description"
          value={description}
          className="input-bordered input input-sm w-full"
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        />
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Workinfo;
