import { type NextComponentType } from "next";
import Link from "next/link";
import { useContext, useState } from "react";
import { api } from "~/utils/api";

import AppContext from "./AppContext";
import Education from "./Education";
import Header from "./Header";

import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const EducationInfoForm: NextComponentType = () => {
  const context = useContext(AppContext);

  function sendEducationInfo() {
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
      description: context.description,
    });
  }

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2 text-3xl font-bold">
          Educational Information
        </div>
        <div>
          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label>Enter Instituition Name</label>
          </div>
          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
              <input
                type="text"
                placeholder="Institution name"
                className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={context.institutionName}
                onChange={(e) => {
                  context.setInstitutionName(e.currentTarget.value);
                }}
              />
            </GrammarlyEditorPlugin>
          </div>

          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label>Enter Instituition Location</label>
          </div>
          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
              <input
                type="text"
                placeholder="Instituition Location"
                className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={context.institutionLocation}
                onChange={(e) => {
                  context.setInstitutionLocation(e.currentTarget.value);
                }}
              />
            </GrammarlyEditorPlugin>
          </div>
          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label>Enter Field of Study</label>
          </div>
          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
              <input
                type="text"
                placeholder="Field of Study"
                className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={context.fieldOfStudy}
                onChange={(e) => {
                  context.setFieldOfStudy(e.currentTarget.value);
                }}
              />
            </GrammarlyEditorPlugin>
          </div>

          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label>Enter Name of Degree</label>
          </div>
          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
              <input
                type="text"
                placeholder="Name of Degree"
                className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={context.degreeName}
                onChange={(e) => {
                  context.setDegreeName(e.currentTarget.value);
                }}
              />
            </GrammarlyEditorPlugin>
          </div>

          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label>Enter Grade</label>
          </div>
          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
              <input
                type="text"
                placeholder="Grade"
                className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={context.grade}
                onChange={(e) => {
                  context.setGrade(e.currentTarget.value);
                }}
              />
            </GrammarlyEditorPlugin>
          </div>

          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label>Enter Starting Month</label>
          </div>
          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
              type="text"
              placeholder="Starting Month"
              className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={context.startMonth}
              onChange={(e) => {
                context.setStartMonth(e.currentTarget.value);
              }}
            />
          </div>

          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label>Enter Starting Year</label>
          </div>
          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
              type="text"
              placeholder="Starting Year"
              className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={context.startYear}
              onChange={(e) => {
                context.setStartYear(e.currentTarget.value);
              }}
            />
          </div>

          <div className="mx-5 mt-5 gap-2">
            Have you Graduated?
            <input
              type="checkbox"
              checked={context.graduated}
              className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => context.setGraduated(e.target.checked)}
            />
          </div>
          {context.graduated ? (
            <>
              <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label>Enter Ending Month</label>
              </div>
              <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <input
                  type="text"
                  placeholder="Ending month"
                  className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={context.endMonth}
                  onChange={(e) => {
                    context.setEndMonth(e.currentTarget.value);
                  }}
                />
              </div>

              <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label>Enter Ending Year</label>
              </div>
              <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <input
                  type="text"
                  placeholder="Ending Year"
                  className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={context.endYear}
                  onChange={(e) => {
                    context.setEndYear(e.currentTarget.value);
                  }}
                />
              </div>
            </>
          ) : (
            <></>
          )}

          
          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label>Enter Description</label>
          </div>
          <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
              <input
                type="text"
                placeholder="Description"
                className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={context.description}
                onChange={(e) => {
                  context.setDescription(e.currentTarget.value);
                }}
              />
            </GrammarlyEditorPlugin>
          </div>

          <Link href="generatingwork">
            <button
              type="submit"
              className="mx-5 mt-5  rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            >
              Next
            </button>
          </Link>
        </div>
      </div>

      <div className="w-[70rem] px-2">
        <Header
          name={context.name}
          address={context.address}
          dob={context.dateOfBirth}
          nationality={context.nationality}
          religion={context.religion}
          gender={context.gender}
          zip={context.zip}
        />
        <Education
          institutionname={context.institutionName}
          degreeName={context.degreeName}
          endYear={context.endYear}
          institutionlocation={context.institutionLocation}
          grade={context.grade}
          fieldOfStudy={context.fieldOfStudy}
          startMonth={context.startMonth}
          startYear={context.startYear}
          endMonth={context.endYear}
          description={context.description}
        />
      </div>
    </div>
  );
};

export default EducationInfoForm;
