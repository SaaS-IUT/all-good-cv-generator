import { type NextComponentType } from "next";
import { useState } from "react";

const SkillInfo: NextComponentType = () => {

    const [name, setName] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [description, setDescription] = useState<string>("");

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
    </div>
  );
};

export default SkillInfo;
