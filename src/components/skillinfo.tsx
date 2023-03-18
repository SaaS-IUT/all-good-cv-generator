import { NextComponentType } from "next";
import { useState } from "react";

const skillinfo: NextComponentType = () => {

    const [name, setName] = useState<string>("");
    const [rating, setRating] = useState<string>("");
    const [description, setDescription] = useState<string>("");

  return (
    <div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Name of degree</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Name of skill"
                value={name}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setName(e.currentTarget.value)
                }}
            />
            <div>{name}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter rating</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="number"
                placeholder="Name of skill"
                value={rating}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setRating(e.currentTarget.value)
                }}
            />
            <div>{name}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter rating</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="number"
                placeholder="Name of skill"
                value={rating}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setRating(e.currentTarget.value)
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

export default skillinfo;
