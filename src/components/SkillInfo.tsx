import { type NextComponentType } from "next";
import { useState, useEffect } from "react";
import { api } from "~/utils/api";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const SkillInfo: NextComponentType = () => {
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  function sendSkillInfo() {
    api.skillInfo.updateInfo.useMutation().mutate({
      name: name,
      rating: rating,
      description: description,
    });
  }

  //   useEffect(() => {
  //     sendSkillInfo();
  //   }),[name, rating, description];

  return (

    <div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Name of Skill`</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
        <input
          type="text"
          placeholder="Skill"
          value={name}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        </GrammarlyEditorPlugin>
        <div>{name}</div>
      </div>


      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Skill Rating</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
      <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setRating(Number(e.currentTarget.value));
          }}
        />
         </GrammarlyEditorPlugin>
        <div>{name}</div>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Description</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
       <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
        <input
          type="text"
          placeholder="Description"
          value={description}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        />
        </GrammarlyEditorPlugin>
        <div>{description}</div>
      </div>
      <button
        type="submit"
        className="mx-5 mt-5  rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      >
        Next
      </button>

    </div>
  );
};

export default SkillInfo;
