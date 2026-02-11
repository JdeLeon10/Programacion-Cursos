// Get y set permiten controlar el acceso a un objeto mediante propiedades
class Product{
    #price;

    get price(){
        return `El precio es: $${this.#price}`;
    }

    set price(newPrice){ // set debe llevar un parámetro
        if(newPrice < 0){
            console.log("El precio no puede ser negativo");
        } else {
            this.#price = newPrice;
        }
    }
}

const product1 = new Product(); // Instanciando el objeto

product1.price = 100; // Usando el setter para asignar un valor
console.log(product1.price); // Usando el getter para obtener el valor

product1.price = -50; // Intento de asignar un valor negativo
console.log(product1.price);

product1.price = 200; // Asignando otro valor
console.log(product1.price);