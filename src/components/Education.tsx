import { type NextComponentType } from "next";

interface Props {
  institutionname: string;
  degreeName: string;
  institutionlocation: string;
  endYear: string;
  graduated: boolean;
  grade: string;
  fieldOfStudy: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  description: string;
}

const Education: React.FC<Props> = ({institutionname, institutionlocation,  degreeName, endYear, graduated, grade, fieldOfStudy, startMonth, startYear, endMonth, description}) => {
  return (
    <>
      <div>
        {" "}
        <section className="px-4 my-5">
          <h2 className="mb-4 text-xl font-bold">Education</h2>
          <div className="border-b-2 border-gray-300 pb-4">
            <h3 className="text-lg font-bold">
              {degreeName}
            </h3>
            <h4 className="text-md font-semibold">{grade}</h4>
            <p className="text-md font-bold text-gray-600">{institutionname}</p>
            <p className="text-sm font-bold text-gray-600">{institutionlocation}</p>
            <p className="text-sm font-bold text-gray-600">{startMonth}, {startYear} {graduated ? <> <p className="text-md font-bold text-gray-600">to {endMonth}, {endYear}</p> </> : <></>} </p>
            <p className="text-md font-bold text-gray-600">
              {graduated ? <>Graduated: {endYear}</> : <></>} 
            </p>
            <p>{description}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;
