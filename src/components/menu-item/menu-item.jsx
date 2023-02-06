import React from "react";

export const MenuItem = ({ text = "", icon }) => {
  return (
    <div className="flex w-full space-x-4">
      {icon}
      <span className="text-medium-gray hover:text-almost-black cursor-pointer transition duration-500 ease-in-out">{text}</span>
    </div>
  );
};
