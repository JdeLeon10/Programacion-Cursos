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
  { productName: "Juegos para PS5", quantity: 2 },
];

export const ItemCounter = ({ productName, quantity }: Props) => {
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
        <span>{productName}</span>
        <button>+1</button>
        <span>{quantity}</span>
        <button>-1</button>
      </div>
    </>
  );
};
