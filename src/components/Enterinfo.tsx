import { NextComponentType } from "next";
import { useState } from "react";

const Enterinfo: NextComponentType = () => {

    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("");

    return (
      <div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label >Enter your Name</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="text"
            placeholder="New Topic"
            value={name}
            className="input-bordered input input-sm w-full"
            onChange={(e) => {
              setName(e.currentTarget.value)
            }}
          />
          <div>{name}</div>
        </div>
        
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label >Enter your Address</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="text"
            placeholder="New Topic"
            value={address}
            className="input-bordered input input-sm w-full"
            onChange={(e) => {
              setAddress(e.currentTarget.value)
            }}
          />
          <div>{address}</div>
        </div>
        
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label >Enter your Date of Birth</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="date"
            placeholder="New Topic"
            value={dateOfBirth}
            className="input-bordered input input-sm w-full"
            onChange={(e) => {
              setDateOfBirth(e.currentTarget.value)
            }}
          />
          <div>{dateOfBirth}</div>
        </div>

      </div>
    );
  };

export default Enterinfo;
  