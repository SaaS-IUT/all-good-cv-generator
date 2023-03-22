import React from 'react';

interface Props {
  name: string;
  address: string;
  zip: string;
  dob: string;
  nationality: string;
  gender: string;
  religion: string;
}

const Header: React.FC<Props> = ({name, address, zip, dob, nationality, gender, religion}) => {
  return (
    <div>
      <header className="bg-gray-900 px-4 py-6 text-white">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg">Software Developer</p>
        <div>{address} - {zip}</div>
      </header>
      <h3 className='px-4 text-xl font-bold py-2'>Personal Infomation</h3>
      <div className="px-4 py-2">
        Date of Birth: {dob} &emsp; Nationality: {nationality} &emsp; Gender: {gender} &emsp; Religion: {religion}
      </div>
      
    </div>
  );
};

export default Header;
