import { type NextComponentType } from "next";
import { useState, useEffect } from "react";
import { api } from "~/utils/api";

const EducationInfoForm: NextComponentType = () => {

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

    function sendEducationInfo(){
        api.educationInfo.updateInfo.useMutation().mutate({
            institutionName: institutionName,
            institutionLocation: institutionLocation,
            degreeName: degreeName,
            grade: grade,
            startMonth: startMonth,
            startYear: startYear,
            endMonth: endMonth,
            endYear: endYear,
            graduated: graduated,
            fieldOfStudy: fieldOfStudy,
            description: description
        })
      }
    
    // useEffect(() => {
    //     sendEducationInfo();
    // }),[institutionName, institutionLocation, degreeName, grade, startMonth, startYear, endMonth, endYear, graduated, fieldOfStudy, description];

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
                value={institutionName}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setInstitutionName(e.currentTarget.value)
                }}
            />
            <div>{institutionName}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Instituition Location</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Instituition Location"
                value={institutionLocation}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setInstitutionLocation(e.currentTarget.value)
                }}
            />
            <div>{institutionLocation}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Name of Degree</label>
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
                <label >Enter Ending Year</label>
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
                checked={true}
                onChange={e => setGraduated(e.target.checked)}
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
            
            <button type="submit" className="mx-5 mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Next
            </button>

          </div>
        </div>
    );

}

export default EducationInfoForm;