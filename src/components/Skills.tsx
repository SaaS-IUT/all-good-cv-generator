import { type NextComponentType } from "next";

const Skills: NextComponentType = () => {
  return (
    <>
      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold">Skills</h2>
        <ul className="ml-8 list-disc">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML/CSS</li>
        </ul>
      </section>
    </>
  );
};

export default Skills;
