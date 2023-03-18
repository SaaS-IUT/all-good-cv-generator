import { NextComponentType } from "next";

const Header: NextComponentType = () => {
  return (
    <div>
      <header className="bg-gray-900 px-4 py-6 text-white">
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-lg">Software Developer</p>
      </header>
    </div>
  );
};

export default Header;
