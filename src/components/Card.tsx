import React from "react";
import { CardProps } from "@/types/interfaces";

const Card = ({ name, cuantity, price, ready }: CardProps) => {
  const handeler = () => {
    console.log("hola");
  };
  return (
    <>
      <div className="flex gap-2 items-center p-2 w-full">
        <label className="w-1/2" htmlFor="name">
          {name}
        </label>
        <div className="flex gap-4 items-end justify-end w-1/2">
          <label htmlFor="cuantity">{cuantity}</label>

          <input
            type="number"
            value={price}
            className="w-24"
            // onChange={handeler}
          />
          <input
            type="checkbox"
            id="name"
            name="name"
            defaultChecked={ready ? true : false}
            onChange={handeler}
          />
        </div>
      </div>
      <div className="bg-white w-full h-px" />
    </>
  );
};

export default Card;
