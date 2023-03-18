import { NextComponentType } from "next";
import { useState } from "react";

const Enterinfo: NextComponentType = () => {

    const [firstname, setFirstName] = useState<string>("");
    const [lastname, setLastName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("");
    const options = ["Male", "Female", "Not sure"]
    const [gender, setGender] = useState<string>("");
    const [zip, setZip] = useState<string>("");
    const [nationality, setNationality] = useState<string>("");
    const [religion, setReligion] = useState<string>("");

    return (
      <div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2 font-bold text-3xl">Personal Information</div>
        <form action="/EnterEduInfo.tsx">
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label >Enter your First Name</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="text"
            placeholder="Name"
            value={firstname}
            className="input-bordered input input-sm w-full"
            onChange={(e) => {
              setFirstName(e.currentTarget.value)
            }}
          />
          <div>{firstname}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label >Enter your Last Name</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="text"
            placeholder="Name"
            value={lastname}
            className="input-bordered input input-sm w-full"
            onChange={(e) => {
              setLastName(e.currentTarget.value)
            }}
          />
          <div>{lastname}</div>
        </div>
        
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label >Enter your Address</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="text"
            placeholder="Address"
            value={address}
            className="input-bordered input input-sm w-full"
            onChange={(e) => {
              setAddress(e.currentTarget.value)
            }}
          />
          <div>{address}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label >Enter your zipcode</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="number"
            placeholder="Address"
            value={zip}
            className="input-bordered input input-sm w-full"
            onChange={(e) => {
              setZip(e.currentTarget.value)
            }}
          />
          <div>{zip}</div>
        </div>
        
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label >Enter your Date of Birth</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="date"
            value={dateOfBirth}
            className="input-bordered input input-sm w-full"
            onChange={(e) => {
              setDateOfBirth(e.currentTarget.value)
            }}
          />
          <div>{dateOfBirth}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label >Enter your Nationality</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="text"
            value={nationality}
            className="input-bordered input input-sm w-full"
            onChange={(e) => {
              setNationality(e.currentTarget.value)
            }}
          />
          <div>{nationality}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label >Enter your Gender</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <div>
          <select
            value={gender}
            onChange={e => setGender(e.target.value)}
          >
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          </div>
          <div>{gender}</div>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
            <label >Enter your Religion</label>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <input
            type="text"
            value={religion}
            className="input-bordered input input-sm w-full"
            onChange={(e) => {
              setReligion(e.currentTarget.value)
            }}
          />
          <div>{religion}</div>
        </div>

        <button type="submit" className="mx-5 mt-5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Next
        </button>

        </form>
      </div>
    );
  };

export default Enterinfo;
  