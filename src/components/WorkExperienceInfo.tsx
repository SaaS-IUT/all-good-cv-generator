import { type NextComponentType } from "next";

const WorkExperienceInfo: NextComponentType = () => {
  return (
    <div>
      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold">Work Experience</h2>
        <div className="border-b-2 border-gray-300 pb-4">
          <h3 className="text-lg font-bold">Software Engineer</h3>
          <p className="text-md font-bold text-gray-600">ACME Inc.</p>
          <p className="text-md font-bold text-gray-600">
            January 2020 - Present
          </p>
          <ul className="ml-8 mt-2 list-disc">
            <li>Developed and maintained software applications</li>
            <li>
              Collaborated with cross-functional teams to design and implement
              new features
            </li>
            <li>
              Performed code reviews and provided feedback to team members
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WorkExperienceInfo;
