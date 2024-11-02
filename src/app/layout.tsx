// // app/layout.tsx
// import "../styles/globals.css";
import { ReactNode } from "react";
import { DataProvider } from "@/app/context/DataContext";
import "./globals.css";
import Container from "@/components/Container";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Container>
          <DataProvider>{children}</DataProvider>
        </Container>
      </body>
    </html>
  );
}
