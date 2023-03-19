import { type NextComponentType } from "next";
import Link from "next/link";
import { useContext, useState } from "react";
import { api } from "~/utils/api";
import AppContext from "./AppContext";
import Education from "./Education";
import Header from "./Header";


const EducationInfoForm: NextComponentType = () => {

    const context = useContext(AppContext);

    function sendEducationInfo(){
        api.educationInfo.updateInfo.useMutation().mutate({
            institutionName: context.institutionName,
            institutionLocation: context.institutionLocation,
            degreeName: context.degreeName,
            grade: context.grade,
            startMonth: context.startMonth,
            startYear: context.startYear,
            endMonth: context.endMonth,
            endYear: context.endYear,
            graduated: context.graduated,
            fieldOfStudy: context.fieldOfStudy,
            description: context.description
        })
      }
   

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
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                value={context.institutionName}

                onChange={(e) => {
                    context.setInstitutionName(e.currentTarget.value)
                }}
            />
            <div><Header name={context.name} address={context.address} dob={context.dateOfBirth} nationality={context.nationality} religion={context.religion} gender={context.gender} zip={context.zip}/>
            <Education institutionname={context.institutionName} degree={context.degree} endYear={context.endYear} /></div>

            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Instituition Location</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Instituition Location"
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                value={context.institutionLocation}
                onChange={(e) => {
                    context.setInstitutionLocation(e.currentTarget.value)
                }}
            />
            <div>{context.institutionLocation}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Name of Degree</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Name of Degree"
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={context.degreeName}

                onChange={(e) => {
                    context.setDegreeName(e.currentTarget.value)
                }}
            />
            <div>{context.degreeName}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Grade</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Grade"
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={context.grade}

                onChange={(e) => {
                    context.setGrade(e.currentTarget.value)
                }}
            />
            <div>{context.grade}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Starting Month</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Starting Month"
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={context.startMonth}
                onChange={(e) => {
                    context.setStartMonth(e.currentTarget.value)
                }}
            />
            <div>{context.startMonth}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Starting Year</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Starting Year"
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={context.startYear}
               
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
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={context.endMonth}

                onChange={(e) => {
                    context.setEndMonth(e.currentTarget.value)
                }}
            />
            <div>{context.endMonth}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Ending Year</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Ending Year"
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                value={context.endYear}

                onChange={(e) => {
                    context.setEndYear(e.currentTarget.value)
                }}
            />
            <div>{context.endYear}</div>
            </div>

            <div className="mx-5 mt-5 gap-2">
            Have you Graduated? 
            <input
                type="checkbox"
                checked={context.graduated}
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={e => context.setGraduated(e.target.checked)}

            />
            <div>{context.graduated}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label>Enter Field of Study</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Field of Study"
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                value={context.fieldOfStudy}

                onChange={(e) => {
                    context.setFieldOfStudy(e.currentTarget.value)
                }}
            />
            <div>{context.fieldOfStudy}</div>
            </div>

            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Description</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Description"

                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                value={context.description}

                onChange={(e) => {
                    context.setDescription(e.currentTarget.value)
                }}
            />
            <div>{context.description}</div>
            </div>
            

            <Link href="generatingwork">
                <button  type="submit" className="mx-5 mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Next
                </button>
            </Link>
        

          </div>
        </div>
    );

}

export default EducationInfoForm;