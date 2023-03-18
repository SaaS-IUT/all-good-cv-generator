import { type NextComponentType } from "next";
import { useState, useEffect } from "react";
import { api } from "~/utils/api";

const SkillInfo: NextComponentType = () => {

    const [name, setName] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [description, setDescription] = useState<string>("");

    function sendSkillInfo(){
        api.skillInfo.updateInfo.useMutation().mutate({
          name: name,
          rating: rating,
          description: description
        })
      }
    
    //   useEffect(() => {
    //     sendSkillInfo();
    //   }),[name, rating, description];

  return (
    <div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Name of Skill`</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Skill"
                value={name}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                    setName(e.currentTarget.value)
                }}
            />
            <div>{name}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Skill Rating</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="number"
                placeholder="Rating"
                value={rating}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                  setRating(Number(e.currentTarget.value))
                }}
            />
            <div>{name}</div>
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
  );
};

export default SkillInfo;
