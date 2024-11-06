// context/DataContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CardProps } from "@/types/interfaces";

// interface Pokemon {
//   id: number;
//   name: string;
//   cuantity?: number;
// }

type DataContextType = {
  data: CardProps[];
  loading: boolean;
  fetchData: () => Promise<void>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        // "https://pokeapi.co/api/v2/pokemon?limit=10"
        "http://192.168.20.22:8000/"
      ); // Obtener los primeros 10 Pokémon
      const result = await response.json();
      // const pokemons: Pokemon[] = await Promise.all(
      //   result.results.map(async (pokemon: { name: string; url: string }) => {
      //     const res = await fetch(pokemon.url);
      //     return await res.json();
      //   })
      // );
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData debe ser usado dentro de un DataProvider");
  }
  return context;
};
