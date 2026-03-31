console.log("");

const person = {
  name: "Jeremy",
  age: 22,
  country: "Guatemala",
};

// Desestructuracion = Desarmar un objeto y extraer sus propiedades en variables independientes
const { name, age, country } = person;
console.log(name, age, country);

// Desestructuracion con alias
const { name: firstName, age: yearsOld } = person;
console.log(firstName, yearsOld);

// Desestructuracion en funciones
const getPersonInfo = ({ name, age, country }: { name: string; age: number; country: string }) => {
  return `Name: ${name}, Age: ${age}, Country: ${country}`;
};

console.log(getPersonInfo(person));