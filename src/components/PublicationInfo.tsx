import { type NextComponentType } from "next";
import { useState, useEffect } from "react";
import { api } from "~/utils/api";

const PublicationInfo: NextComponentType = () => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function sendPublicationInfo(){
    api.publicationInfo.updateInfo.useMutation().mutate({
      name: name,
      link: link,
      description: description
    })
  }

  // useEffect(() => {
  //   sendPublicationInfo();
  // }),[name, link, description];
  
  return (
    <>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
                <label >Enter Name of Publication</label>
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
                <label >Enter link</label>
            </div>
            <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <input
                type="text"
                placeholder="Link of Publication"
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
        <button onClick={sendPublicationInfo} type="submit" className="mx-5 mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Next
        </button>
    </>
  );
};

export default PublicationInfo;
