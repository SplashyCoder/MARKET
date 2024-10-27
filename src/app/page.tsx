"use client";

import Form from "@/ components/form/Form";
import Card from "@/ components/Card/Card";
import Container from "@/ components/container/Container";
import { getData } from "@/app/api/getData";

export default async function Home() {
  const cards = await getData();

  return (
    <Container>
      <h1 className="text-red-500">Telefono</h1>
      {/* <Form /> */}
      <div className="cards-container">
        {cards.map((card) => (
          <Card key={card.key} name={card.name} cuantity={card.cuantity} />
        ))}
      </div>
    </Container>
  );
}
