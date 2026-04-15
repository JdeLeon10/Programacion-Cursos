/*
  Interfaces propias de TypeScript para definir las props de un componente
  En JS, podria unicamente pasar el objeto con las props
*/

interface Props {
  productName: string;
  quantity?: number; // Propiedad opcional, no es necesario pasarla al componente
}

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
