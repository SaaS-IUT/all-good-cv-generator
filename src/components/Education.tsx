import { type NextComponentType } from "next";

const Education: NextComponentType = () => {
  return (
    <>
      <div>
        {" "}
        <section className="my-8">
          <h2 className="mb-4 text-xl font-bold">Education</h2>
          <div className="border-b-2 border-gray-300 pb-4">
            <h3 className="text-lg font-bold">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-md font-bold text-gray-600">University of XYZ</p>
            <p className="text-md font-bold text-gray-600">
              Graduated May 2019
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;
