import { CardProps } from "@/types/interfaces";

export async function getData(): Promise<CardProps[]> {
  const res = await fetch("http://192.168.20.17:8000/", {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener los datos de las cartas");
  }

  const data = await res.json();

  // Verifica que `data` sea un array y que cada elemento cumpla con `CardProps`
  if (
    !Array.isArray(data) ||
    !data.every(
      (item) =>
        typeof item.id === "number" &&
        typeof item.name === "string" &&
        typeof item.cuantity === "number"
    )
  ) {
    throw new Error("Datos de las cartas no válidos");
  }

  return data;
}
