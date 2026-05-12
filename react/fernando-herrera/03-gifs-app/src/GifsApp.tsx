import { useState } from "react";
import { CustomHeader } from "./components/CustomHeader";
import { SearchBar } from "./components/SearchBar";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  // const [constante, funcion para actualizar constante] = useState(estado inicial)
  const [previousTerms, setPreviousTerms] = useState([
    "Sponge Bob",
    "Rick and Morty",
    "Star Wars",
  ]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca tus gifs favoritos..." />

      {/* Busquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
