// La abstracción en JavaScript consiste en ocultar los detalles internos y exponer solo lo necesario para usar un objeto. En POO normalmente se logra con clases base, métodos que se esperan implementar, y encapsulación.

class Animal {
    constructor(nombre) {
        if (this.constructor === Animal) {
            throw new Error("No se puede instanciar una clase abstracta.");
        }
        this.nombre = nombre;
    }

    hacerSonido() {
        throw new Error("El método hacerSonido() debe ser implementado por la subclase.");
    }
}

class Perro extends Animal {
    hacerSonido() {
        return "Guau Guau";
    }
}

class Gato extends Animal {
    hacerSonido() {
        return "Miau Miau";
    }
}

// Uso de las clases
try {
    const miAnimal = new Animal("Animal"); // Esto lanzará un error
} catch (e) {
    console.log(e.message);
}

const miPerro = new Perro("Firulais");
console.log(`${miPerro.nombre} dice: ${miPerro.hacerSonido()}`);

const miGato = new Gato("Misu");
console.log(`${miGato.nombre} dice: ${miGato.hacerSonido()}`);

// En este ejemplo no puede crearse una clase tipo animal, y sus clases hijas deben heredar su comportamiento y sus propios metodos