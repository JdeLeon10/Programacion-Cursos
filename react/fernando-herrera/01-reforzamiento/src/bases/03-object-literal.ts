// Creacion de objetos literales
// A pesar de crear el objeto con const, las propiedades si pueden cambiarse
const Person = {
  firstName: "Jeremy",
  lastName: "de Leon",
  age: 24,
  isDeveloper: true,
};

console.log(Person);

Person.firstName = "Alejandro";
console.log(Person.firstName);

/* spread vs structuredClone()  
  spread crea una copia superficial, es decir que si hay objetos dentro del objeto, estos no se copian, por lo que no pueden ser modificados
  structuredClone() crea una copia profunda, es decir que si hay objetos dentro del objeto, estos si se copian y pueden ser modificados
*/

// Una interfaz sirve para definir la forma de un objeto, propiedades y tipos de datos
interface IVehiculo {
  brand: string;
  model: string;
  year: number;
  owner?: string; // Propiedad opcional
}

const Carro: IVehiculo = {
  brand: "Kia",
  model: "Sportage",
  year: 2016,
};

const Moto: IVehiculo = {
  brand: "Yamaha",
  model: "R1",
  year: 2020,
  owner: "Jeremy",
};

console.log(Carro);
console.log(Moto);
