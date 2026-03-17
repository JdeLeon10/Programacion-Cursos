// import { useState } from "react";
import { Efecto } from "./components/Efecto";
import { PrimerEstado } from "./components/PrimerEstado";
import { Fetch } from "./components/Fetch";
import { AsyncAwait } from "./components/AsyncAwait";
import { Axios } from "./components/Axios";

function App() {
  return (
    <>
      <hr />
      <PrimerEstado />
      <hr />
      <Efecto />
      <hr />
      <Fetch />
      <hr />
      <AsyncAwait />
      <hr />
      <Axios />
      <hr />
    </>
  );
}

export default App;
