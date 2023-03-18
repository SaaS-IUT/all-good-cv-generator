import { type NextComponentType } from "next";
import { useState } from "react";
import { api } from "~/utils/api";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const CertificatesInfo: NextComponentType = () => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  
  const sendCertificatesInfo = () => {
    api.certifications.updateInfo.useMutation().mutate({
      name: name,
      link: link,
      description: description
    })
  };

  return (
    <>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Name of Certificate</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
            <input
                type="text"
                placeholder="Name of skill"
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
                <label >Enter link</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
            <input
                type="text"
                placeholder="Name of skill"
                value={link}
                className="input-bordered input input-sm w-full"
                onChange={(e) => {
                setLink(e.currentTarget.value)
                }}
            />
            </GrammarlyEditorPlugin>
            <div>{link}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Description</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <GrammarlyEditorPlugin clientId="client_JKCVw8bF58bnfhivajADMr">
            <input
                type="text"
                placeholder="Name of skill"
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

export default CertificatesInfo;
