import { type NextComponentType } from "next";
import { useState } from "react";
import { api } from "~/utils/api";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const ProjectInfo: NextComponentType = () => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  
  const sendProjectInfo = () => {
    api.projectInfo.updateInfo.useMutation().mutate({
      name: name,
      link: link,
      description: description
    })
  };
  
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
                className="input-bordered input input-sm w-full"
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
                        className="input-bordered input input-sm w-full"
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
                    className="input-bordered input input-sm w-full"
                    onChange={(e) => {
                    setDescription(e.currentTarget.value)
                    }}
                />
                </GrammarlyEditorPlugin>
            <div>{description}</div>
        </div>
    </>
  );
};

export default ProjectInfo;
