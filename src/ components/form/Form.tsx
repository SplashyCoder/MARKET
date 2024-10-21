import React, { useState } from "react";
import Card from "@/ components/Card/Card";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto
    console.log(JSON.stringify(formData)); // Imprimir el JSON en consola
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <div className="border border-double border-amber-500 bg-zinc-600 p-2 w-0.8">
      <form onSubmit={handleSubmit}>
        <Card name="Arroz" cuantity={1} handeler={handleChange} />
        <Card name="Azucar" cuantity={1} handeler={handleChange} />
        <Card name="Sal" cuantity={1} handeler={handleChange} />
        <Card name="Panela" cuantity={1} handeler={handleChange} />
        <Card name="Comida Monchos" cuantity={1} handeler={handleChange} />
        <Card name="Arena Monchos" cuantity={1} handeler={handleChange} />

        <button
          className=" flex justify-center items-center relative w-full border border-1 border-solid bg-amber-700 border-zinc-950 hover:bg-amber-600"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
