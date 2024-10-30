// app/components/DataFetcher.tsx
import React, { useEffect } from "react";
import { useData } from "../context/DataContext";

const DataFetcher = () => {
  const { fetchData } = useData();

  useEffect(() => {
    fetchData(); // Llama a la función para obtener datos
  }, [fetchData]);

  return null; // No renderiza nada
};

export default DataFetcher;
