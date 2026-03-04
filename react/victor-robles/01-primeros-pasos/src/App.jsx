import { useState } from "react";
import { Boton } from "./Boton";
import { PrimerComponente } from "./PrimerComponente";
import { SegundoComponente } from "./SegundoComponente";
import { TercerComponente } from "./TercerComponente";
import { Eventos } from "./Eventos";

function App() {
  const [count, setCount] = useState(0);
  const nombre = "Alejandro"; // Puede pasarse a las props

  return (
    <>
      <hr />
      <h1>Vite + React</h1>
      <div>
        <p>Valor de count: {count}</p>
        <Boton texto="count ++" accion={() => setCount((count) => count + 1)} />
        <Boton texto="count --" accion={() => setCount((count) => count - 1)} />
        <Boton texto="reset" accion={() => setCount(0)} />
        <Boton texto="Nuevo boton" />
      </div>
      <hr />
      <PrimerComponente />
      <hr />
      <SegundoComponente />
      <hr />
      <TercerComponente nombre={nombre} apellido="De Leon" />
      <hr />
      <Eventos />
      <hr />
    </>
  );
}

export default App;
