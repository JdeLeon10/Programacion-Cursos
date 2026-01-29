// Creacion de un objeto literal
const Vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    // Creacion de metodo dentro del objeto
    showInfo: function() {
        return `${this.marca} ${this.modelo} (${this.anio})`;
    }
}

console.log(Vehiculo);
console.log(Vehiculo.marca);
console.log(Vehiculo.modelo);
console.log(Vehiculo.anio);
console.log(Vehiculo.showInfo());