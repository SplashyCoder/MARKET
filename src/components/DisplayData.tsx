// app/components/DisplayData.tsx
"use client"; // Este componente es un Client Component
import { useData } from "@/app/context/DataContext";
import Card from "@/components/Card";

const DisplayData = () => {
  const { data, loading } = useData();

  return (
    <div className="border border-double border-amber-500 bg-zinc-600 p-2 w-80">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="w-full">
          {data.map((item) => (
            <div key={item.id} style={{ marginBottom: "20px" }}>
              <Card
                name={item.name}
                cuantity={item.cuantity}
                price={item.price}
                ready={item.ready}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayData;
