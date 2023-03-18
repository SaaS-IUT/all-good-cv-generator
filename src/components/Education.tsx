import { type NextComponentType } from "next";

interface Props {
  institutionname: string;
  degree: string;
  endYear: string;
}

const Education: React.FC<Props> = ({institutionname, degree, endYear}) => {
  return (
    <>
      <div>
        {" "}
        <section className="px-4 my-8">
          <h2 className="mb-4 text-xl font-bold">Education</h2>
          <div className="border-b-2 border-gray-300 pb-4">
            <h3 className="text-lg font-bold">
              {degree}
            </h3>
            <p className="text-md font-bold text-gray-600">{institutionname}</p>
            <p className="text-md font-bold text-gray-600">
              Graduated {endYear}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;
