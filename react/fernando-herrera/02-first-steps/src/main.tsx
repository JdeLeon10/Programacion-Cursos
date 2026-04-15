import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstStepsApp } from "./FirstStepsApp";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { ItemCounter } from "./shopping-cart/ItemCounter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirstStepsApp />
    <hr />
    <MyAwesomeApp />
    <hr />
    <h1>CARRITO DE COMPRAS</h1>
    <ItemCounter productName="Monitores de 27 pulgadas" quantity={3} />
    <ItemCounter productName="Teclados mecánicos" quantity={5} />
    <ItemCounter productName="Ratones gaming" quantity={2} />
    <hr />
  </StrictMode>,
);
