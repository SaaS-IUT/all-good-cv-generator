import { type NextComponentType } from "next";
import { useState, useEffect } from "react";
import { api } from "~/utils/api";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const ProjectInfo: NextComponentType = () => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  
  function sendProjectInfo(){
    api.projectInfo.updateInfo.useMutation().mutate({
      name: name,
      link: link,
      description: description
    })
  }

  // useEffect(() => {
  //   sendProjectInfo();
  // }),[name, link, description];
  
  return (
    <>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Name of Project</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
            <input
                type="text"
                placeholder="Project Name"
                value={name}
                className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                onChange={(e) => {
                setName(e.currentTarget.value)
                }}
            />
            </GrammarlyEditorPlugin>
            <div>{name}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Link</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <input
                        type="text"
                        placeholder="Project Link"
                        value={link}
                        className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                        onChange={(e) => {
                        setLink(e.currentTarget.value)
                        }}
                    />
           
            <div>{link}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Description</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
                <input
                    type="text"
                    placeholder="Project Description"
                    value={description}
                    className="border border-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                    onChange={(e) => {
                    setDescription(e.currentTarget.value)
                    }}
                />
                </GrammarlyEditorPlugin>
            <div>{description}</div>
        </div>
        <button onClick={sendProjectInfo} type="submit" className="mx-5 mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Next
        </button>
    </>
  );
};

export default ProjectInfo;
