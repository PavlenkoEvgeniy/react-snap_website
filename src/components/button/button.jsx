import React from "react";

const simpleStyles = 'hover:text-black'
const borderStyles = 'border-2 border-almost-black rounded-lg hover:bg-black hover:text-white';
const filledStyles = 'text-white bg-black rounded-lg py-4 px-4 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black';

export const Button = ({
  children = '',
  hasBorder = false,
  isFilled = false,
  hasSimpleStyles = false,
}) => {
  return <button className={`text-medium-gray px-5 py-2 transition duration-500 ease-in-out ${hasSimpleStyles && simpleStyles} ${hasBorder && borderStyles} ${isFilled && filledStyles}`}>{children}</button>;
};
