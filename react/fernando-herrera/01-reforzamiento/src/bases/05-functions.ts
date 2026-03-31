// Forma tradicional de declarar una función
function greeting(name: string): string {
  return `Hello ${name}`;
}

console.log(greeting("Jeremy"));

// Arrow functions
const greeting2 = (name: string): string => {
  return `Hello ${name}`;
};

console.log(greeting2("Alejandro"));

// Creacion de interfaz para definir la forma de un objeto, propiedades y tipos de datos
interface IUser {
  uid: string;
  username: string;
}

// Test
const getUser = (): IUser => {
  return {
    uid: "ABC-123",
    username: "Jeremy8520",
  };
};

console.log(getUser());

// Retornos implicitos
const greeting3 = (name: string): string => `Hello ${name}`;
console.log(greeting3("Jeremy"));

const getUser2 = () => ({
  uid: "ABC-123",
  username: "Jeremy8520",
});
console.log(getUser2());
