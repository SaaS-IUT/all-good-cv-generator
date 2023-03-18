import { type NextComponentType } from "next";
import { useState } from "react";

const EducationInfoForm: NextComponentType = () => {

    const [instituitionName, setInstituitionName] = useState<string>("");
    const [instituitionLocation, setInstituitionLocation] = useState<string>("");
    const [degreeName, setDegreeName] = useState<string>("");
    const [grade, setGrade] = useState<string>("");
    const [startMonth, setStartMonth] = useState<string>("");
    const [startYear, setStartYear] = useState<string>("");
    const [endMonth, setEndMonth] = useState<string>("");
    const [endYear, setEndYear] = useState<string>("");
    const [graduated, setGraduated] = useState<string>("Not Graduated");
    const [fieldOfStudy, setFieldOfStudy] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [currentlyIn, setCurrentlyIn] = useState(false)

    return (
        <div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2 font-bold text-3xl">Educational Information</div>
          <div>
            
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Instituition Name</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Institution name"
                value={instituitionName}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setInstituitionName(e.currentTarget.value)
                }}
            />
            <div>{instituitionName}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Instituition Location</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Instituition Location"
                value={instituitionLocation}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setInstituitionLocation(e.currentTarget.value)
                }}
            />
            <div>{instituitionLocation}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Name of degree</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Name of Degree"
                value={degreeName}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setDegreeName(e.currentTarget.value)
                }}
            />
            <div>{degreeName}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Grade</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Grade"
                value={grade}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setGrade(e.currentTarget.value)
                }}
            />
            <div>{grade}</div>
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
                value={startYear}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setStartYear(e.currentTarget.value)
                }}
            />
            <div>{startYear}</div>
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
                <label >Enter ending Year</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Ending Year"
                value={endYear}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setEndYear(e.currentTarget.value)
                }}
            />
            <div>{endYear}</div>
            </div>

            <div className="mx-5 mt-5 gap-2">
            Have you Graduated? 
            <input
                type="checkbox"
                checked={currentlyIn}
                onChange={e => setCurrentlyIn(e.target.checked)}
            />
            <div>{graduated}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label>Enter Field of Study</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Field of Study"
                value={fieldOfStudy}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setFieldOfStudy(e.currentTarget.value)
                }}
            />
            <div>{fieldOfStudy}</div>
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

          </div>
        </div>
    );

}

export default EducationInfoForm;