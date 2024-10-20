import React from "react";
interface Articulo {
  name: string;
  cuantity: number;
  handeler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Card = ({ name, cuantity, handeler }: Articulo) => {
  return (
    <div className="flex justify-between items-center p-2">
      <label className="w-1/2" htmlFor="name">
        {name}
      </label>
      <div className="flex justify-between items-center w-1/2">
        <label htmlFor="cuantity">{cuantity}</label>
        <input
          type="checkbox"
          id="name"
          name="name"
          value="check"
          onChange={handeler}
        />
      </div>
    </div>
  );
};

export default Card;
