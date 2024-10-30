"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { DataContextInterface, CardProps } from "@/types/interfaces";

const DataContext = createContext<DataContextInterface | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://192.168.20.22:8000/", {
        method: "GET",
        cache: "no-store",
      });
      const result: CardProps[] = await res.json();
      setData(result);
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
