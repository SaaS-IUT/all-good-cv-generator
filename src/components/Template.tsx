import { NextComponentType } from "next";

const Template: NextComponentType = () => {
  return (
    <div className="border px-1">
      <header className="bg-gray-900 px-4 py-6 text-white">
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-lg">Software Developer</p>
      </header>
      {/* work section */}
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
      {/* education */}
      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold">Education</h2>
        <div className="border-b-2 border-gray-300 pb-4">
          <h3 className="text-lg font-bold">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-md font-bold text-gray-600">University of XYZ</p>
          <p className="text-md font-bold text-gray-600">Graduated May 2019</p>
        </div>
      </section>
      {/* skill */}
      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold">Skills</h2>
        <ul className="ml-8 list-disc">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML/CSS</li>
        </ul>
      </section>
    </div>
  );
};

export default Template;
