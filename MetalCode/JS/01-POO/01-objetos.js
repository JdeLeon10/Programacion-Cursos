// Creacion de un objeto literal
const Vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    // Creacion de metodo
    showInfo: function() {
        return `${this.marca} ${this.modelo} (${this.anio})`;
    }
}

console.log(Vehiculo);
console.log(Vehiculo.marca);
console.log(Vehiculo.modelo);
console.log(Vehiculo.anio);
console.log(Vehiculo.showInfo());

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
console.log(persona1.mostrarInfo());
console.log(persona2.mostrarInfo());