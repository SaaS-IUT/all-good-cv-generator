import { type NextComponentType } from "next";

interface Props {
  post: string;
  place: string;
  start: string;
  end: string;
  description: string;
}

const WorkExperienceInfo: React.FC<Props>  = ( { post, place, start, end } ) => {
  return (
    <div>
      <section className="px-4 my-8">
        <h2 className="mb-4 text-xl font-bold">Work Experience</h2>
        <div className="border-b-2 border-gray-300 pb-4">
          <h3 className="text-lg font-bold">{post}</h3>
          <p className="text-md font-bold text-gray-600">{place}</p>
          <p className="text-md font-bold text-gray-600">
            {start} - {end}
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
