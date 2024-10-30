"use client";
import React, { useState } from "react";
import Card from "@/ components/Card/Card";
import { getData } from "@/app/api/getData";
import { useData } from "@/context/DataContext";
import DataFetcher from "@/ components/DataFetcher"; // Importa el DataFetcher

const Form = async () => {
  const { data, loading } = useData();

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  // });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault(); // Prevenir el comportamiento por defecto
  //   console.log(JSON.stringify(formData)); // Imprimir el JSON en consola
  //   setFormData({
  //     name: "",
  //     email: "",
  //   });
  // };

  // const cards = await getData();

  return (
    // <div className="border border-double border-amber-500 bg-zinc-600 p-2 w-0.8">
    //   {loading ? (
    //     <p>Cargando...</p>
    //   ) : (
    //     // <form onSubmit={handleSubmit}>
    //     <form>
    //       {data.map((card) => (
    //         <Card key={card.key} name={card.name} cuantity={card.cuantity} />
    //       ))}

    //       <button
    //         className=" flex justify-center items-center relative w-full border border-1 border-solid bg-amber-700 border-zinc-950 hover:bg-amber-600"
    //         type="submit"
    //         onClick={fetchData}
    //       >
    //         Enviar
    //       </button>
    //     </form>
    //   )}
    // </div>

    <div>
      <DataFetcher />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.key}>
              <p>Nombre: {item.name}</p>
              <p>Cantidad: {item.cuantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Form;
