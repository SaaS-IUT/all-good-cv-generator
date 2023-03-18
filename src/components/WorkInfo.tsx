import { type NextComponentType } from "next";
import Link from "next/link";
import { useContext, useState } from "react";
import { api } from "~/utils/api";
import AppContext from "./AppContext";
import Education from "./Education";
import Header from "./Header";
import WorkExperienceInfo from "./WorkExperienceInfo";

const Workinfo: NextComponentType = () => {
    const context = useContext(AppContext);
  
  const [startMonth, setStartMonth] = useState<string>("");
  
  const [endMonth, setEndMonth] = useState<string>("");
  
  const [currentlyIn, setCurrentlyIn] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  function sendWorkInfo(){
    api.workInfo.updateInfo.useMutation().mutate({
      position: context.position,
      companyName: context.companyName,
      startMonth: startMonth,
      startYear: context.startYear,
      endMonth: endMonth,
      endYear: context.endYear,
      currentlyIn: currentlyIn,
      description: description
    })
  };
  
  return (
    <div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Name of Position</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Name of Position"
                value={context.position}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                    context.setPostion(e.currentTarget.value)
                }}
            />
            <div><Header name={context.name} address={context.address} dob={context.dateOfBirth} nationality={context.nationality} religion={context.religion} gender={context.gender} zip={context.zip}/>
            <Education institutionname={context.institutionName} degree={context.degree} endYear={context.endYear} />
            <WorkExperienceInfo post={context.position} place={context.companyName} start={context.workStartYear} end={context.workEndYear}/>
            </div>

        </div>
        
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Name of Company</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Company Name"
                value={context.companyName}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                    context.setCompanyName(e.currentTarget.value)
                }}
            />
            <div>{context.companyName}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Starting Month</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Starting Month"
                value={startMonth}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                    setStartMonth(e.currentTarget.value)
                }}
            />
            <div>{startMonth}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Starting Year</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Starting Year"
                value={context.startYear}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                    context.setStartYear(e.currentTarget.value)
                }}
            />
            <div>{context.startYear}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Ending Month</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Ending month"
                value={endMonth}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                    setEndMonth(e.currentTarget.value)
                }}
            />
            <div>{endMonth}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Ending Year</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Ending Year"
                value={context.endYear}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                    context.setEndYear(e.currentTarget.value)
                }}
            />
            <div>{context.endYear}</div>
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
                <label >Enter Description</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Description"
                value={description}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setDescription(e.currentTarget.value)
                }}
            />
            <div>{description}</div>
        </div>

        <Link href="../exportpage">
        <button onClick={sendWorkInfo} type="submit" className="mx-5 mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                FINISH
        </button>
        </Link>
    </div>
  );
};

export default Workinfo;
