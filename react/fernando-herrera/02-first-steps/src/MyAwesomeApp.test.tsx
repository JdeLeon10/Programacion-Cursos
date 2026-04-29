import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

// Prueba utilizando render, recomendado para render iniciar
describe("MyAwesomeApp", () => {
  test("should render firstName and lastName con render", () => {
    const { container } = render(<MyAwesomeApp />);
    render(<MyAwesomeApp />); // Renderiza el componente MyAwesomeApp

    const h1 = container.querySelector("h1"); // Devolvera el primer h1 que encuentre
    const h2 = container.querySelector("h2"); // Devolvera el primer h2 que encuentre

    console.log("Contenido del h1 " + h1?.innerHTML); // Imprime el contenido del h1 en la consola INNERHTML
    console.log("Contenido del h2 " + h2?.textContent); // Imprime el contenido del h2 en la consola TEXTCONTENT

    expect(h1?.textContent).toBe("Jeremy");
    expect(h2?.textContent).toBe("de Leon");
  });
});

// Prueba utilizando screen
describe("MyAwesomeApp", () => {
  test("should render firstName and lastName con screen", () => {
    render(<MyAwesomeApp />);
    screen.debug(); // Imprime el HTML renderizado en la consola

    const h1 = screen.getByText("Jeremy"); // Busca un elemento que contenga el texto "Jeremy"
    const h2 = screen.getByText("de Leon");

    expect(h1?.textContent).toBe("Jeremy");
    expect(h2?.textContent).toBe("de Leon");
  });
});
