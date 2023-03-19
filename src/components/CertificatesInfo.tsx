import { type NextComponentType } from "next";
import { useState } from "react";
import { api } from "~/utils/api";

const CertificatesInfo: NextComponentType = () => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function sendCertificatesInfo() {
    api.certifications.updateInfo.useMutation().mutate({
      name: name,
      link: link,
      description: description,
    });
  }

  return (
    <>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Name of Certificate</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Certificate Name"
          value={name}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <div>{name}</div>
      </div>

      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter link</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Certficate Link"
          value={link}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setLink(e.currentTarget.value);
          }}
        />
        <div>{link}</div>
      </div>

      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <label>Enter Description</label>
      </div>
      <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
        <input
          type="text"
          placeholder="Description"
          value={description}
          className="rounded-md border border-gray-500 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        />
        <div>{description}</div>
      </div>
      <button
        onClick={sendCertificatesInfo}
        type="submit"
        className="mx-5 mt-5  rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      >
        Next
      </button>
    </>
  );
};

export default CertificatesInfo;
