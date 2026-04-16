import { useState } from "react";
/*
  Interfaces propias de TypeScript para definir las props de un componente
  En JS, podria unicamente pasar el objeto con las props
*/

interface Props {
  productName: string;
  quantity?: number; // Propiedad opcional, no es necesario pasarla al componente
}

// Exportamos el arreglo para poder utilizarlo en el componente principal (main.tsx)
// Se utilizo un arreglo de elementos para mostrar que se pueden renderizar multiples componentes a
// partir de un arreglo de datos
export const ItemsInStore: Props[] = [
  { productName: "Monitores de 27 pulgadas", quantity: 3 },
  { productName: "Teclados mecánicos", quantity: 5 },
  { productName: "Ratones gaming", quantity: 2 },
  { productName: "Juegos para PS5", quantity: 7 },
];

export const ItemCounter = ({ productName, quantity }: Props) => {
  const [count, setCount] = useState(quantity || 0); // Si quantity es undefined, se inicializa en 0 , si quantity fuera obligatoria no seria necesario el operador || y se podria inicializar directamente con quantity

  const handleClick = () => {
    console.log(`Click en ${productName}`);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count === 1) return; // Evitamos que el contador baje de 1, ya que no tiene sentido tener un producto con cantidad negativa o 0 en un carrito de compras

    setCount(count - 1);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <button onClick={handleClick}>Test click</button>
        <span>{productName}</span>
        {/* Ya que solo es una funcion, puede retornarse directamente sin necesidad de una funcion anonima */}
        {/* 
        <button
          onClick={() => {
            handleClick();
          }}
        >
          +1
        </button> */}
        <button onClick={handleAdd}>+1</button>
        <span>{count}</span>
        <button onClick={handleSubtract}>-1</button>
      </div>
    </>
  );
};
