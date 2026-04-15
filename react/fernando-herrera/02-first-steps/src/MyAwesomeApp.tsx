/*
  Constantes que nunca cambian pueden estar fuera del componente, 
  para evitar que se vuelvan a crear en cada renderizado
*/

const firstName = "Jeremy";
const lastName = "de Leon";

const favoriteGames = ["GTA", "FIFA", "Mortal Kombat"];

const isActive = true;

const address = {
  street: "123 Main St",
  city: "Anytown",
  country: "USA",
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
      <p>Favorite Games: {favoriteGames.join(", ")}</p>

      {/* Valores booleanos en React deben utilizar operador ternario */}
      <h1>{isActive ? "Active" : "Inactive"}</h1>

      {/* Impresion literal de objetos en React */}
      <p
        style={{
          backgroundColor: "red",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        Address: {JSON.stringify(address)}
      </p>
    </>
  );
};
