// Creacion de objeto por medio de una funcion constructora
function Customer(name, email){
    this.name = name;
    this.email = email;

    // Creacion de metodo
    this.getInfo = function(){
        return `Customer Name: ${this.name}, Email: ${this.email}`;
    }
}

const customer1 = new Customer('Alice', 'alice@example.com');
console.log(customer1.getInfo());