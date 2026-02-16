import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-16 py-8">
      <h4 className="bg-black rounded-full text-sm text-white px-5 py-2 uppercase">
        Target Audiance
      </h4>
      <button className="bg-gray-200 px-6 py-2 uppercase tracking-wider text-sm rounded-full">
        Digital Banking Plateform
      </button>
    </div>
  );
};

export default Navbar;
