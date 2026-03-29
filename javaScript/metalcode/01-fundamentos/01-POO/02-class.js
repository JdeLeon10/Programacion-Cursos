// Creacion de objetos usando clases
class Persona {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    // Metodo para mostrar informacion
    mostrarInfo() {
        return `${this.nombre}, ${this.edad} años`;
    }
}

// Instanciando objeto pasando argumentos al constructor segun sus parametros
const persona1 = new Persona("Juan", 30);

// Instanciando objeto sin pasar argumentos al constructor
const persona2 = new Persona;
// Asignando valores a las propiedades del objeto posteriormente
persona2.nombre = "Ana";
persona2.edad = 25;

console.log(persona1);
console.log(persona2);
console.log(persona2.mostrarInfo());

// Diferencia entre tener un constructor y no tenerlo en una clase
class SinConstructor {
    propiedad = "Valor por defecto";
}
class ConConstructor {
    constructor(propiedad) {
        this.propiedad = propiedad;
    }           
}

const objetoSinConstructor = new SinConstructor();
const objetoConConstructor = new ConConstructor("Valor asignado");
console.log(persona1.mostrarInfo());