import React from "react";
import { CardProps } from "@/types/interfaces";

const Card = ({ name, cuantity }: CardProps) => {
  return (
    <>
      <div className="flex gap-2 items-center p-2 w-full">
        <label className="w-1/2" htmlFor="name">
          {name}
        </label>
        <div className="flex gap-4 items-end justify-end w-1/2">
          <label htmlFor="cuantity">{cuantity}</label>
          {/* <input
            type="checkbox"
            id="name"
            name="name"
            value="check"
            // onChange={handeler}
          /> */}
        </div>
      </div>
      <div className="bg-white w-full h-px" />
    </>
  );
};

export default Card;
