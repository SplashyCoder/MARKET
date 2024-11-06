// app/page.tsx
import DisplayData from "@/components/DisplayData";

export default function Home() {
  return (
    <main>
      <h1 className="text-red-500 flex items-center justify-center">Mercado</h1>
      <DisplayData />
    </main>
  );
}
