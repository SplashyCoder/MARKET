import React from "react";
import { CardProps } from "@/types/interfaces";

const Card = ({ name, cuantity }: CardProps) => {
  return (
    <>
      <div className="flex justify-between items-center p-2">
        <label className="w-1/2" htmlFor="name">
          {name}
        </label>
        <div className="flex gap-4 items-center w-1/2">
          <label htmlFor="cuantity">{cuantity}</label>
          <input
            type="checkbox"
            id="name"
            name="name"
            value="check"
            // onChange={handeler}
          />
        </div>
      </div>
      <div className="bg-white w-full h-px" />
    </>
  );
};

export default Card;