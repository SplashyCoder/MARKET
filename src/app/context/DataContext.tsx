// context/DataContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CardProps } from "@/types/interfaces";

const URL = "http://192.168.20.24:8000";

type DataContextType = {
  data: CardProps[];
  loading: boolean;
  getData: () => Promise<void>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(URL);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL, {
        method: "GET",
        cache: "no-store",
      });

      const result = await response.json();

      setData(result);
      console.log(result);
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const postData = async () => {
    try {
      const response = await fetch("http://192.168.20.22:8000/", {
        method: "GET",
        cache: "no-store",
      });
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, getData }}>
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
