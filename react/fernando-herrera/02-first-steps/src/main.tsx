import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstStepsApp } from "./FirstStepsApp";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { ItemCounter, ItemsInStore } from "./shopping-cart/ItemCounter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirstStepsApp />
    <hr />
    <MyAwesomeApp />
    <hr />

    <h1>CARRITO DE COMPRAS</h1>
    {/* Renderizamos un componente por cada elemento del arreglo utilizando map */}
    {ItemsInStore.map(({ productName, quantity }) => (
      <ItemCounter
        key={productName}
        productName={productName}
        quantity={quantity}
      />
    ))}
    <hr />
  </StrictMode>,
);
